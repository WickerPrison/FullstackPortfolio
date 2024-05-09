import { useState } from "react";

export default function Carousel(images) {
    let [currentImage, setImage] = useState(0);

    function nextImage(){
        if(currentImage + 1 == images.images.length){
            setImage(0);
        }
        else{
            setImage(currentImage + 1);
        }
    }

    function previousImage(){
        if(currentImage == 0){
            setImage(images.images.length - 1);
        }
        else{
            setImage(currentImage - 1);
        }
    }
    
    return (
        <div className="carousel">
            <img src={images.images[currentImage]}/>
            <img onClick={nextImage} className="next-button" src="/Images/NextCarousel.png"/>
            <img onClick={previousImage} className="previous-button" src="/Images/PreviousCarousel.png"/>
        </div>
    );
  }