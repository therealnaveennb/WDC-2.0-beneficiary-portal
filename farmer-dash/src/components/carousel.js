import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';


const ImageCarousel = () => {
  return (
    <Carousel showArrows={true}>
     
      <div>
        <img src={image1} alt="Image 1" />
        <p className="legend">Caption 1</p>
      </div>
      <div>
        <img src={image2} alt="Image 2" />
        <p className="legend">Caption 2</p>
      </div>
      <div>
        <img src={image3} alt="Image 3" />
        <p className="legend">Caption 3</p>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
