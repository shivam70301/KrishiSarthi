import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // For animations

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
        customTransition="all .7s ease-in-out"
        transitionDuration={700}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="carousel-item-content animate__animated animate__fadeInUp text-center p-4">
          <h3 className="text-primary animate__animated animate__zoomIn">Market Trends</h3>
          <ul className="list-unstyled animate__animated animate__fadeInLeft animate__delay-1s">
            <li className="mb-2"><strong>Organic Produce:</strong> 25%</li>
            <li className="mb-2"><strong>Sustainable Farming:</strong> 30%</li>
            <li className="mb-2"><strong>Artisanal Foods:</strong> 20%</li>
          </ul>
        </div>

        <div className="carousel-item-content animate__animated animate__fadeInRight text-center p-4">
          <h3 className="text-primary animate__animated animate__bounceIn">Market Analysis</h3>
          <p className="animate__animated animate__fadeInUp animate__delay-1s">The demand for organic produce is increasing rapidly.</p>
          <p className="animate__animated animate__fadeInUp animate__delay-2s">Sustainable farming practices are becoming more popular.</p>
          <p className="animate__animated animate__fadeInUp animate__delay-3s">Artisanal foods are gaining traction among consumers.</p>
        </div>
      </Carousel>

      <style>{`
        .carousel-item-content {
          background-image: linear-gradient(to bottom, #f7f7f7, #e7e7e7);
          border-radius: 15px; 
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); 
          min-height: 350px; 
          display: flex; 
          flex-direction: column; 
          justify-content: center; 
          align-items: center; 
          padding: 30px;
          transition: transform 0.5s ease-in-out;
        }
        
        .carousel-item-content:hover {
          transform: scale(1.05); 
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); 
        }

        .carousel-item-content h3 {
          font-size: 2rem; 
          font-weight: 700; 
          margin-bottom: 20px;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .carousel-item-content p, .carousel-item-content ul {
          font-size: 1.2rem; 
          color: #333;
          text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }

        .carousel-item-content ul {
          padding-left: 0;
          list-style: none;
        }

        .carousel-item-content li {
          margin-bottom: 10px;
        }

        .custom-dot-list-style {
          bottom: 10px; 
        }

        .dot-active {
          background-color: #007bff; 
        }
        
        /* Optional: Adjust the overall carousel height */
        .react-multi-carousel-list {
          max-height: 450px; 
        }

        @media (max-width: 768px) {
          .carousel-item-content {
            padding: 20px; 
            min-height: 300px ;
          }
        }

        /* Gradient animation */
        .carousel-item-content {
          animation: gradient 10s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-image: linear-gradient(to bottom, #f7f7f7, #e7e7e7);
          }
          50% {
            background-image: linear-gradient(to bottom, #e7e7e7, #f7f7f7);
          }
          100% {
            background-image: linear-gradient(to bottom, #f7f7f7, #e7e7e7);
          }
        }
      `}</style>
    </div>
  );
};

export default MarketTrends;