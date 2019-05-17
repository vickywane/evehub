import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./slider.css" 

const slideImages = [
  'http://mountain.org/wp-content/plugins/widgetkit/cache/Landscapes-Cordillera-Blanca-South-Photo-B.-Fuentealba-1-ebb7d81d1fc0c5b8f8c6e41e383b62a0.jpg',
  'http://mountain.org/wp-content/plugins/widgetkit/cache/Landscapes-Cordillera-Blanca-South-Photo-B.-Fuentealba-1-ebb7d81d1fc0c5b8f8c6e41e383b62a0.jpg',
  'http://mountain.org/wp-content/plugins/widgetkit/cache/Landscapes-Cordillera-Blanca-South-Photo-B.-Fuentealba-1-ebb7d81d1fc0c5b8f8c6e41e383b62a0.jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    )
}

export default Slideshow