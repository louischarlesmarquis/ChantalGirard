from pathlib import Path
import re

def generate_gallery_html(category_folder: Path, category_name: str) -> str:
    """Generate HTML gallery markup for a photo category"""
    
    # Supported image extensions
    image_extensions = {'.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'}
    
    # Find all images in the folder
    images = [f for f in category_folder.iterdir() 
              if f.is_file() and f.suffix in image_extensions]
    
    # Sort alphabetically
    images.sort(key=lambda x: x.name)
    
    # Generate HTML with proper indentation
    html_lines = ['<div class="masonry-grid">']
    
    for index, img_path in enumerate(images):
        # Relative path from HTML root
        relative_path = f"photos/{category_folder.name}/{img_path.name}"
        
        html_lines.append(
            f'                <div class="grid-item">'
            f'<img src="{relative_path}" '
            f'onclick="openLightbox({index}, \'{category_name}\')"></div>'
        )
    
    html_lines.append('</div>')
    
    return '\n'.join(html_lines)


def update_html_file(html_file: Path, new_gallery_html: str):
    """Update the gallery section in an HTML file"""
    
    # Read the current HTML
    content = html_file.read_text(encoding='utf-8')
    
    # Match masonry-grid and the stray </div> that comes after it
    # The pattern looks for:
    # 1. <div class="masonry-grid">
    # 2. All content inside (non-greedy)
    # 3. The closing </div> for masonry-grid
    # 4. Optional whitespace and ONE more </div> (the stray one)
    pattern = r'<div class="masonry-grid">.*?</div>\s*</div>'
    
    # Replace with new gallery
    new_content = re.sub(pattern, new_gallery_html, content, flags=re.DOTALL)
    
    # Check if replacement happened
    if new_content == content:
        print(f"⚠️  Warning: Could not find gallery section in {html_file}")
        print("    Make sure the HTML contains: <div class=\"masonry-grid\">")
        return False
    
    # Write back to file
    html_file.write_text(new_content, encoding='utf-8')
    return True


def update_all_galleries(photos_dir: Path, html_dir: Path):
    """Generate galleries and update HTML files for all categories"""
    
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
    
    for folder_name, (category_id, html_filename) in categories.items():
        category_path = photos_dir / folder_name
        html_file = html_dir / html_filename
        
        # Check if photo folder exists
        if not category_path.exists():
            print(f"⚠️  Skipping {folder_name}: folder doesn't exist")
            continue
        
        # Check if HTML file exists
        if not html_file.exists():
            print(f"⚠️  Skipping {folder_name}: {html_filename} doesn't exist")
            continue
        
        # Generate new gallery HTML
        gallery_html = generate_gallery_html(category_path, category_id)
        
        # Count images
        image_count = len([f for f in category_path.iterdir() 
                          if f.is_file() and f.suffix.lower() in {'.jpg', '.jpeg', '.png'}])
        
        # Update the HTML file
        if update_html_file(html_file, gallery_html):
            print(f"✅ Updated {html_filename} with {image_count} images")
        else:
            print(f"❌ Failed to update {html_filename}")


# Run it
if __name__ == "__main__":
    photos_directory = Path("photos")
    html_directory = Path(".")  # Assuming HTML files are in the root
    
    print("Updating photo galleries...\n")
    update_all_galleries(photos_directory, html_directory)
    print("\n✨ Done!")