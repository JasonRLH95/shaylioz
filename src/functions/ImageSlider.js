import React, { Component } from 'react';
import {images} from '../constants';


class ImageSlider extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        images.canopyTerasse1,
        images.couple2,
        images.canopy4,
        images.canopyTerasse3,
        images.couple5,
        images.canopy1,

        // Add more image URLs as needed
      ],
      currentIndex: 0,
    };
  }

  componentDidMount() {
    // Start the auto-change timer
    this.imageSliderInterval = setInterval(this.nextImage, 3000); // Change every 3 seconds (adjust as needed)
  }

  componentWillUnmount() {
    // Clear the timer to prevent memory leaks
    clearInterval(this.imageSliderInterval);
  }

  nextImage = () => {
    // Update the currentIndex to the next image
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.images.length,
    }));
  };

  render() {
    const { images, currentIndex } = this.state;
    const currentImage = images[currentIndex];

    return (
      <div style={{height:'70vh',width:'90%',margin:'auto'}} className="image-slider">
        <img style={{width:'inherit',height:'inherit'}} src={currentImage} alt="Slider" />
      </div>
    );
  }
}

export default ImageSlider;
