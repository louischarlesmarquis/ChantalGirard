//hamburger menu
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

//zoom in on images
let currentImageIndex = 0;
const images = [
    [ 
    {
        src: '/photos/Animaux/DSC00070A.JPG',
        description: 'Grenouille'
    },
    {
        src: '/photos/Animaux/DSC03314A.jpg',
        description: 'Lapin'
    },
    {
        src: '/photos/Animaux/DSC03489A.JPG',
        description: 'Couleuvre'
    }
    ]
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

function changeImage(direction, category) {
    currentImageIndex += direction;

    // Wrap around the images if at the start or end
    if (currentImageIndex % 1000 > 998  || currentImageIndex < 1000) {
        if(category==0){
            currentImageIndex = 8000 + images[8].length - 1;
        } 
        else{
            currentImageIndex = images[category-1].length - 1 - (category+1)*1000;
        } 
        
    } else if (currentImageIndex % 1000 >= images[category].length) {
        if(category==8){
            currentImageIndex = 1000;
        }
        else{
            currentImageIndex = (category+1)*1000;
        }
    }

    const lightboxImage = document.getElementById('lightbox-image');
    const description = document.getElementById('description');

    lightboxImage.src = images[category][currentImageIndex].src;
    description.textContent = images[category][currentImageIndex].description;
}
