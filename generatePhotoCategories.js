const fs = require('fs');
const path = require('path');

// Configuration
const photosDirectory = './photos';
const outputFile = './photoCategories.js';

// Default descriptions for different categories
const categoryDescriptions = {
    'Animaux': [
        'Majestic wildlife in their natural habitat, showcasing the beauty of the animal kingdom.',
        'Intimate portrait capturing the grace and power of this magnificent creature.',
        'A moment frozen in time, revealing the wild spirit of nature.',
        'The raw beauty of wildlife, captured in perfect lighting and composition.',
        'Nature\'s artistry displayed through the elegant form of this animal.',
        'A stunning example of wildlife photography, showcasing natural behavior.',
        'Beautiful creature captured in its natural environment.',
        'Wildlife photography showcasing the grace of nature.',
        'Magnificent animal portrait in stunning detail.',
        'Natural beauty captured through the lens.',
        'Wildlife in its pristine natural habitat.',
        'Elegant animal portrait showcasing natural grace.',
        'Beautiful wildlife photography capturing essence of nature.',
        'Stunning animal captured in perfect lighting.',
        'Nature\'s beauty displayed through wildlife photography.',
        'Magnificent creature showcasing the wonder of wildlife.'
    ],
    'Oiseaux_aquatiques': [
        'Graceful waterfowl in their natural aquatic environment.',
        'Beautiful aquatic bird captured in serene water setting.',
        'Elegant water bird displaying natural grace and beauty.',
        'Stunning aquatic wildlife photography in pristine waters.',
        'Magnificent waterfowl showcasing natural swimming behavior.',
        'Beautiful bird captured gliding across calm waters.',
        'Aquatic bird life in perfect harmony with nature.',
        'Serene water bird in tranquil natural habitat.'
    ],
    'Echassiers': [
        'Elegant wading bird in shallow water habitat.',
        'Magnificent shorebird displaying natural hunting behavior.',
        'Beautiful wading bird captured in perfect stance.',
        'Graceful shore bird in pristine wetland environment.',
        'Stunning wader bird photography in natural setting.',
        'Elegant long-legged bird in coastal habitat.',
        'Beautiful shorebird captured at water\'s edge.',
        'Magnificent wading bird in natural feeding behavior.'
    ],
    'Oiseaux_de_proie': [
        'Powerful bird of prey in commanding natural pose.',
        'Magnificent raptor showcasing natural hunting instincts.',
        'Majestic bird of prey captured in stunning detail.',
        'Powerful predator bird in natural wild habitat.',
        'Stunning raptor photography displaying raw power.',
        'Noble bird of prey in regal natural stance.',
        'Magnificent predator bird captured in flight.',
        'Powerful raptor showcasing natural grace and strength.'
    ],
    'Bruants': [
        'Beautiful sparrow in natural woodland habitat.',
        'Charming small bird captured in perfect detail.',
        'Elegant songbird in pristine natural environment.',
        'Beautiful small bird displaying natural behavior.',
        'Stunning sparrow photography in natural setting.',
        'Graceful small bird in seasonal natural habitat.',
        'Beautiful songbird captured in nature\'s embrace.',
        'Charming bird in perfect natural composition.'
    ],
    'Parulines': [
        'Colorful warbler in beautiful natural setting.',
        'Vibrant songbird captured in stunning detail.',
        'Beautiful warbler displaying natural grace.',
        'Elegant small bird in pristine forest habitat.',
        'Stunning warbler photography in natural environment.',
        'Graceful songbird in seasonal migration.',
        'Beautiful forest bird in natural feeding behavior.',
        'Charming warbler in perfect natural light.'
    ],
    'Passereaux': [
        'Beautiful perching bird in natural habitat.',
        'Charming songbird captured in perfect moment.',
        'Elegant small bird displaying natural behavior.',
        'Beautiful passerine in pristine natural setting.',
        'Stunning songbird photography in wild environment.',
        'Graceful perching bird in seasonal habitat.',
        'Beautiful small bird in nature\'s perfect frame.',
        'Charming songbird captured in natural glory.'
    ],
    'Pics': [
        'Magnificent woodpecker in natural forest habitat.',
        'Powerful bird captured in characteristic pose.',
        'Beautiful woodpecker displaying natural behavior.',
        'Stunning tree-dwelling bird in wild environment.',
        'Elegant woodpecker in pristine forest setting.',
        'Magnificent forest bird showcasing natural instincts.',
        'Beautiful woodpecker captured in perfect detail.',
        'Powerful tree bird in natural woodland habitat.'
    ],
    'Autres_oiseaux': [
        'Beautiful bird captured in stunning natural detail.',
        'Magnificent avian subject in pristine wild habitat.',
        'Elegant bird displaying natural grace and beauty.',
        'Stunning bird photography in perfect natural setting.',
        'Beautiful feathered creature in wild environment.',
        'Magnificent bird captured in natural behavior.',
        'Elegant avian portrait in pristine natural light.',
        'Beautiful bird showcasing nature\'s artistry.'
    ]
};

// Supported image extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.JPG', '.JPEG', '.PNG', '.GIF', '.BMP', '.WEBP'];

function getRandomDescription(category) {
    // Return empty description for now
    return '';
}

function scanPhotosDirectory() {
    if (!fs.existsSync(photosDirectory)) {
        console.error(`Photos directory "${photosDirectory}" not found!`);
        return;
    }

    const photoCategories = {};
    
    // Read all subdirectories in photos folder
    const categories = fs.readdirSync(photosDirectory, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    console.log(`Found categories: ${categories.join(', ')}`);

    categories.forEach(category => {
        const categoryPath = path.join(photosDirectory, category);
        const files = fs.readdirSync(categoryPath);
        
        // Filter only image files
        const imageFiles = files.filter(file => {
            const ext = path.extname(file);
            return imageExtensions.includes(ext);
        });

        console.log(`Category "${category}": ${imageFiles.length} images found`);

        // Convert category name to lowercase for JavaScript object key
        const categoryKey = category.toLowerCase();
        
        photoCategories[categoryKey] = imageFiles.map((file, index) => ({
            src: `photos/${category}/${file}`,
            description: getRandomDescription(category)
        }));
    });

    return photoCategories;
}

function generateJavaScriptFile(photoCategories) {
    let jsContent = `// Auto-generated photo categories - Generated on ${new Date().toISOString()}\n`;
    jsContent += `// This file was created by generate-photo-categories.js\n\n`;
    jsContent += `const photoCategories = {\n`;

    Object.keys(photoCategories).forEach((category, categoryIndex) => {
        jsContent += `    '${category}': [\n`;
        
        photoCategories[category].forEach((photo, photoIndex) => {
            jsContent += `        {\n`;
            jsContent += `            src: '${photo.src}',\n`;
            jsContent += `            description: '${photo.description}'\n`;
            jsContent += `        }`;
            
            if (photoIndex < photoCategories[category].length - 1) {
                jsContent += ',';
            }
            jsContent += '\n';
        });
        
        jsContent += `    ]`;
        
        if (categoryIndex < Object.keys(photoCategories).length - 1) {
            jsContent += ',';
        }
        jsContent += '\n';
    });

    jsContent += `};\n\n`;
    jsContent += `// Export for use in your script.js file\n`;
    jsContent += `// Copy the photoCategories object above into your script.js file\n`;

    return jsContent;
}

function main() {
    console.log('🔍 Scanning photos directory...');
    
    const photoCategories = scanPhotosDirectory();
    
    if (!photoCategories || Object.keys(photoCategories).length === 0) {
        console.error('❌ No photo categories found!');
        return;
    }

    console.log('\n📊 Summary:');
    Object.keys(photoCategories).forEach(category => {
        console.log(`   ${category}: ${photoCategories[category].length} photos`);
    });

    const jsContent = generateJavaScriptFile(photoCategories);
    
    fs.writeFileSync(outputFile, jsContent);
    
    console.log(`\n✅ Generated ${outputFile} successfully!`);
    console.log(`📁 Total categories: ${Object.keys(photoCategories).length}`);
    console.log(`🖼️  Total photos: ${Object.values(photoCategories).reduce((sum, photos) => sum + photos.length, 0)}`);
    console.log('\n📋 Next steps:');
    console.log('1. Open the generated photoCategories.js file');
    console.log('2. Copy the photoCategories object');
    console.log('3. Replace the photoCategories object in your script.js file');
}

// Run the script
main();