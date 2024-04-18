const carousels = document.getElementsByClassName("carousel");

const setupCarousel = (carousel) => {
    const images = carousel.querySelectorAll("img");
    for(i = 1; i < images.length; i++){
        images[i].style.display = "none";
    }

    const nextButton = document.createElement("img");
    nextButton.classList.add("next-button");
    nextButton.src = "./Images/NextCarousel.png"
    carousel.appendChild(nextButton);
    nextButton.addEventListener("click", nextImage);

    const previousButton = document.createElement("img");
    previousButton.classList.add("previous-button");
    previousButton.src = "./Images/PreviousCarousel.png";
    carousel.appendChild(previousButton);
    previousButton.addEventListener("click", previousImage);

    carousel.images = images;
    carousel.currentImage = 0;
}

const nextImage = (event) => {
    const carousel = event.currentTarget.parentNode;

    carousel.images[carousel.currentImage].style.display = "none";
    if(carousel.currentImage + 1 == carousel.images.length){
        carousel.currentImage = 0;
    }
    else{
        carousel.currentImage++;
    }
    carousel.images[carousel.currentImage].style.display = "block";
}

const previousImage = (event) =>{
    const carousel = event.currentTarget.parentNode;

    carousel.images[carousel.currentImage].style.display = "none";
    if(carousel.currentImage == 0){
        carousel.currentImage = carousel.images.length - 1;
    }
    else{
        carousel.currentImage--;
    }
    carousel.images[carousel.currentImage].style.display = "block";
}

for(let i = 0; i < carousels.length; i++){
    setupCarousel(carousels[i]);
}