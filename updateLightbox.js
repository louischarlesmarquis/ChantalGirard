const fs = require('fs');
const path = require('path');

// Define the mapping of file names to categories
const categoryMapping = {
    'animaux.html': 'animaux',
    'autres_oiseaux.html': 'autres_oiseaux',
    'bruants.html': 'bruants',
    'oiseaux_aquatiques.html': 'oiseaux_aquatiques',
    'oiseaux_de_proie.html': 'oiseaux_de_proie',
    'oiseaux_de_rivage.html': 'oiseaux_de_rivage',
    'parulines.html': 'parulines',
    'passereaux.html': 'passereaux',
    'pics.html': 'pics'
};

function updateLightboxCalls(filePath, category) {
    try {
        // Read the file
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Regular expression to find openLightbox calls with only one parameter
        // This matches: onclick="openLightbox(number)"
        const regex = /onclick="openLightbox\((\d+)\)"/g;
        
        // Replace with the category parameter added
        const updatedContent = content.replace(regex, `onclick="openLightbox($1, '${category}')"`);
        
        // Check if any changes were made
        if (content !== updatedContent) {
            // Write the updated content back to the file
            fs.writeFileSync(filePath, updatedContent, 'utf8');
            console.log(`✅ Updated ${filePath} - Added category '${category}'`);
            
            // Count how many replacements were made
            const matches = content.match(regex);
            const count = matches ? matches.length : 0;
            console.log(`   📸 Updated ${count} image(s)`);
        } else {
            console.log(`ℹ️  No changes needed for ${filePath}`);
        }
        
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
    }
}

function updateAllFiles() {
    console.log('🚀 Starting to update lightbox function calls...\n');
    
    // Process each file in the category mapping
    Object.entries(categoryMapping).forEach(([fileName, category]) => {
        const filePath = path.join(__dirname, fileName);
        
        // Check if file exists
        if (fs.existsSync(filePath)) {
            updateLightboxCalls(filePath, category);
        } else {
            console.log(`⚠️  File not found: ${fileName}`);
        }
    });
    
    console.log('\n🎉 Finished updating all files!');
}

// Alternative function to update a single file
function updateSingleFile(fileName) {
    const category = categoryMapping[fileName];
    
    if (!category) {
        console.log(`❌ Unknown category for file: ${fileName}`);
        console.log('Available files:', Object.keys(categoryMapping));
        return;
    }
    
    const filePath = path.join(__dirname, fileName);
    
    if (fs.existsSync(filePath)) {
        updateLightboxCalls(filePath, category);
    } else {
        console.log(`❌ File not found: ${fileName}`);
    }
}

// Function to preview changes without actually modifying files
function previewChanges() {
    console.log('🔍 Preview of changes that would be made:\n');
    
    Object.entries(categoryMapping).forEach(([fileName, category]) => {
        const filePath = path.join(__dirname, fileName);
        
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            const regex = /onclick="openLightbox\((\d+)\)"/g;
            const matches = content.match(regex);
            
            if (matches) {
                console.log(`📁 ${fileName} (Category: ${category})`);
                matches.forEach((match, index) => {
                    const newMatch = match.replace(/onclick="openLightbox\((\d+)\)"/, `onclick="openLightbox($1, '${category}')"`);
                    console.log(`   ${index + 1}. ${match} → ${newMatch}`);
                });
                console.log(`   Total: ${matches.length} image(s)\n`);
            } else {
                console.log(`📁 ${fileName} - No changes needed\n`);
            }
        }
    });
}

// Export functions for different use cases
module.exports = {
    updateAllFiles,
    updateSingleFile,
    previewChanges
};

// If this script is run directly (not imported)
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log('📖 Usage:');
        console.log('  node updateLightbox.js preview    - Preview changes without modifying files');
        console.log('  node updateLightbox.js update     - Update all files');
        console.log('  node updateLightbox.js single [filename] - Update a single file');
        console.log('\nExample:');
        console.log('  node updateLightbox.js single animaux.html');
    } else if (args[0] === 'preview') {
        previewChanges();
    } else if (args[0] === 'update') {
        updateAllFiles();
    } else if (args[0] === 'single' && args[1]) {
        updateSingleFile(args[1]);
    } else {
        console.log('❌ Invalid arguments. Use "preview", "update", or "single [filename]"');
    }
}