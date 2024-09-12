import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MarketTrends = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (newIndex) => {
    setCurrentSlide(newIndex);
  };

  return (
    <div>
      <Carousel 
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item"
        dotListClass="custom-dot-list-style"
        dotActiveClass="dot-active"
        onBeforeChange={handleSlideChange}
      >
        <div>
          <h2>Market Trends</h2>
          <ul>
            <li>Organic Produce(25%)</li>
            <li>Sustainable Farming (30%)</li>
            <li>Artisanal Foods(20%)</li>
          </ul>
        </div>
        <div>
          <h2>Market Analysis</h2>
          <p>The demand for organic produce is increasing rapidly.</p>
          <p>Sustainable farming practices are becoming more popular.</p>
          <p>Artisanal foods are gaining traction among consumers.</p>
        </div>
      </Carousel>
      {/* <div className="current-slide">
        Current slide: {currentSlide + 1}
      </div> */}
    </div>
  );
};

export default MarketTrends;