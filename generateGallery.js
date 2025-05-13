const fs = require('fs');
const path = require('path');

// === CONFIGURATION ===
const folderPath = './photos/oiseaux_de_proies'; // Adjust this path
const webPath = 'photos/oiseaux_de_proies';
let index = 0;

function sanitizeFileName(fileName, dir) {
  if (fileName.startsWith('_')) {
    const newName = fileName.slice(1);
    const oldPath = path.join(dir, fileName);
    const newPath = path.join(dir, newName);

    // Avoid overwrite
    if (!fs.existsSync(newPath)) {
      fs.renameSync(oldPath, newPath);
      return newName;
    } else {
      return fileName; // keep original if conflict
    }
  }
  return fileName;
}

function generateMasonryHTML(dirPath, webPath) {
  const files = fs.readdirSync(dirPath)
    .filter(f => /\.(jpe?g)$/i.test(f))
    .sort();

  const imageDivs = files.map(file => {
    const cleaned = sanitizeFileName(file, dirPath);
    return `  <div class="grid-item"><img src="${webPath}/${cleaned}" onclick="openLightbox(${index++})"></div>`;
  });

  return `<div class="masonry-grid">\n${imageDivs.join('\n')}\n</div>`;
}

// === EXECUTE ===
const html = generateMasonryHTML(folderPath, webPath);
console.log(html);
