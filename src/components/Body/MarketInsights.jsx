import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MarketTrends = () => {
  return (
    <div className="container my-5">
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
      >
        <div className="carousel-item-content text-center p-4">
          <h3 className="text-info">Market Trends</h3>
          <ul className="list-unstyled">
            <li className="mb-2"><strong>Organic Produce:</strong> 25%</li>
            <li className="mb-2"><strong>Sustainable Farming:</strong> 30%</li>
            <li className="mb-2"><strong>Artisanal Foods:</strong> 20%</li>
          </ul>
        </div>
        <div className="carousel-item-content text-center p-4">
          <h3 className="text-info">Market Analysis</h3>
          <p>The demand for organic produce is increasing rapidly.</p>
          <p>Sustainable farming practices are becoming more popular.</p>
          <p>Artisanal foods are gaining traction among consumers.</p>
        </div>
      </Carousel>
      <style>{`
        .carousel-item-content {
          background-color: #f8f9fa; /* Light background for contrast */
          border-radius: 10px; /* Rounded corners */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Soft shadow */
          min-height: 300px; /* Minimum height for carousel items */
          display: flex; /* Flexbox for centering content */
          flex-direction: column; /* Column direction */
          justify-content: center; /* Center vertically */
          align-items: center; /* Center horizontally */
        }
        
        .carousel-item-content h3 {
          font-size: 1.8rem; /* Heading size */
          font-weight: 600; /* Bold weight */
        }

        .custom-dot-list-style {
          bottom: 10px; /* Adjust dot position */
        }

        .dot-active {
          background-color: #007bff; /* Active dot color */
        }
        
        /* Optional: Adjust the overall carousel height */
        .react-multi-carousel-list {
          max-height: 400px; /* Set max height for the carousel */
        }

        @media (max-width: 768px) {
          .carousel-item-content {
            padding: 15px; /* Adjust padding for mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default MarketTrends;
