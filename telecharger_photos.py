import os
import re

BASE_PHOTOS_DIR = "photos"

IMAGE_EXTENSIONS = (".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG")

categories = {
    'Animaux': ('animaux', 'animaux.html'),
    'Autres_oiseaux': ('autres_oiseaux', 'autres_oiseaux.html'),
    'Bruants': ('bruants', 'bruants.html'),
    'Echassiers': ('echassiers', 'echassiers.html'),
    'Oiseaux_aquatiques': ('oiseaux_aquatiques', 'oiseaux_aquatiques.html'),
    'Oiseaux_de_proie': ('oiseaux_de_proie', 'oiseaux_de_proie.html'),
    'Parulines': ('parulines', 'parulines.html'),
    'Passereaux': ('passereaux', 'passereaux.html'),
    'Pics': ('pics', 'pics.html'),
}


def generate_gallery_html(category_folder, js_key):
    folder_path = os.path.join(BASE_PHOTOS_DIR, category_folder)

    if not os.path.isdir(folder_path):
        print(f"⚠️ Folder not found: {folder_path}")
        return ""

    images = sorted(
        f for f in os.listdir(folder_path)
        if f.lower().endswith(IMAGE_EXTENSIONS)
    )

    lines = []
    for i, img in enumerate(images):
        lines.append(
            f'''    <div class="grid-item"><img src="photos/{category_folder}/{img}" onclick="openLightbox({i}, '{js_key}')"></div>'''
        )

    return "\n".join(lines)


def update_html_file(html_file, gallery_html):
    with open(html_file, "r", encoding="utf-8") as f:
        content = f.read()

    pattern = re.compile(
        r'(<!-- GALLERIE DE PHOTOS -->\s*<div class="masonry-grid">)(.*?)(</div>\s*<!-- FIN GALLERIE DE PHOTOS -->)',
        re.DOTALL
    )

    match = pattern.search(content)
    if not match:
        print(f"⚠️ Gallery block not found in {html_file}")
        return

    new_block = (
        match.group(1)
        + "\n"
        + gallery_html
        + "\n"
        + match.group(3)
    )

    updated = content[:match.start()] + new_block + content[match.end():]

    with open(html_file, "w", encoding="utf-8") as f:
        f.write(updated)

    print(f"✅ Updated {html_file}")


def main():
    for folder, (js_key, html_file) in categories.items():
        gallery_html = generate_gallery_html(folder, js_key)
        update_html_file(html_file, gallery_html)


if __name__ == "__main__":
    main()
