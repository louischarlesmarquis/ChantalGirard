console.log('script started...');

//hamburger menu
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

// Photo data organized by category - UPDATED to match your HTML exactly
const photoCategories = {
    'animaux': [
        {
            src: 'photos/Animaux/DSC00070A.JPG',
            description: 'Majestic wildlife in their natural habitat, showcasing the beauty of the animal kingdom.'
        },
        {
            src: 'photos/Animaux/DSC03314A.jpg',
            description: 'Intimate portrait capturing the grace and power of this magnificent creature.'
        },
        {
            src: 'photos/Animaux/DSC03489A.JPG',
            description: 'A moment frozen in time, revealing the wild spirit of nature.'
        },
        {
            src: 'photos/Animaux/DSC03683A.JPG',
            description: 'The raw beauty of wildlife, captured in perfect lighting and composition.'
        },
        {
            src: 'photos/Animaux/DSC0658A.JPG',
            description: 'Nature\'s artistry displayed through the elegant form of this animal.'
        },
        {
            src: 'photos/Animaux/DSC0658AA.JPG',
            description: 'A stunning example of wildlife photography, showcasing natural behavior.'
        },
        {
            src: 'photos/Animaux/DSC07060A.JPG',
            description: 'Beautiful creature captured in its natural environment.'
        },
        {
            src: 'photos/Animaux/DSC07062B.JPG',
            description: 'Wildlife photography showcasing the grace of nature.'
        },
        {
            src: 'photos/Animaux/DSC07447A.JPG',
            description: 'Magnificent animal portrait in stunning detail.'
        },
        {
            src: 'photos/Animaux/DSC09011A.JPG',
            description: 'Natural beauty captured through the lens.'
        },
        {
            src: 'photos/Animaux/DSC1284A.JPG',
            description: 'Wildlife in its pristine natural habitat.'
        },
        {
            src: 'photos/Animaux/DSC1376A.JPG',
            description: 'Elegant animal portrait showcasing natural grace.'
        },
        {
            src: 'photos/Animaux/DSC1544A.JPG',
            description: 'Beautiful wildlife photography capturing essence of nature.'
        },
        {
            src: 'photos/Animaux/DSC1622A.JPG',
            description: 'Stunning animal captured in perfect lighting.'
        },
        {
            src: 'photos/Animaux/DSC1700A.JPG',
            description: 'Nature\'s beauty displayed through wildlife photography.'
        },
        {
            src: 'photos/Animaux/DSC1729A.JPG',
            description: 'Magnificent creature showcasing the wonder of wildlife.'
        }
    ]
};

let currentCategory = '';
let currentImageIndex = 0;

function openLightbox(imageIndex, category) {
    console.log('Opening lightbox - Index:', imageIndex, 'Category:', category);
    
    currentCategory = category;
    currentImageIndex = imageIndex;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const description = document.getElementById('description');
    
    const photos = photoCategories[category];
    console.log('Photos array:', photos);
    console.log('Selected photo:', photos ? photos[imageIndex] : 'undefined');
    
    if (!photos || !photos[imageIndex]) {
        console.error('Photo not found for index:', imageIndex, 'in category:', category);
        return;
    }
    
    const photoSrc = photos[imageIndex].src;
    console.log('Setting image src to:', photoSrc);
    
    lightboxImage.src = photoSrc;
    if (description) {
        description.textContent = photos[imageIndex].description;
    }
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// FIXED: Function name changed from changeSlide to changeImage to match your HTML
function changeImage(direction) {
    const photos = photoCategories[currentCategory];
    const totalPhotos = photos.length;
    
    currentImageIndex += direction;
    
    // Handle wrapping around
    if (currentImageIndex >= totalPhotos) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = totalPhotos - 1;
    }
    
    const lightboxImage = document.getElementById('lightbox-image');
    const description = document.getElementById('description');
    
    lightboxImage.src = photos[currentImageIndex].src;
    if (description) {
        description.textContent = photos[currentImageIndex].description;
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'block') {
        switch(event.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                changeImage(-1);
                break;
            case 'ArrowRight':
                changeImage(1);
                break;
        }
    }
});

// Close lightbox when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(event) {
            if (event.target === this) {
                closeLightbox();
            }
        });
    }
});