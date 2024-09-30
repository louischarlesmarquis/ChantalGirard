//hamburger menu
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});


//zoom in on images
let currentImageIndex = 0;
const images = [
    {
        src: 'bg.avif',
        description: 'This is image 1'
    },
    {
        src: 'bird-example.webp',
        description: 'This is image 2'
    },
    {
        src: 'ex-bird.jpg',
        description: 'This is image 3'
    }
    // Add more images and descriptions as needed
];

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const description = document.getElementById('description');

    lightbox.style.display = 'block';
    lightboxImage.src = images[index].src;
    description.textContent = images[index].description;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;

    // Wrap around the images if at the start or end
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const lightboxImage = document.getElementById('lightbox-image');
    const description = document.getElementById('description');

    lightboxImage.src = images[currentImageIndex].src;
    description.textContent = images[currentImageIndex].description;
}
