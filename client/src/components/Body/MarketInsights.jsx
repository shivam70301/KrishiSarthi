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
      {/* Carousel starts here */}
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
        {/* Agronomy + Tech = Precision Agriculture Slide */}
        <div className="carousel-item-content animate__animated animate__fadeInUp text-center p-4">
          <div className="heading-container">
            <h3 className="heading-part animate__animated animate__zoomIn">Agronomy + Tech =</h3>
            <h3 className="heading-part animate__animated animate__zoomIn">Precision Agriculture</h3>
          </div>
          <p className="small-text animate__animated animate__fadeInUp animate__delay-1s">
            Powerful combination of agronomy expertise with Technology enables any farmer to
            adopt and succeed <p>with precision agriculture practices.</p>
          </p>
        </div>

        {/* Updated Crop Planning and Production Slide */}
        <div className="carousel-item-content animate__animated animate__fadeInRight text-center p-4">
          <div className="heading-container">
            <h3 className="heading-part animate__animated animate__zoomIn">Crop Planning and</h3>
            <h3 className="heading-part animate__animated animate__zoomIn">Production</h3>
          </div>
          <p className="small-text animate__animated animate__fadeInUp animate__delay-1s">
            With you at every stage, from soil test through crop selection to production and help you <p> achieve the target yield</p>
          </p>
        </div>

        {/* Updated Pest and Disease Control Slide */}
        <div className="carousel-item-content animate__animated animate__fadeInLeft text-center p-4">
          <div className="heading-container">
            <h3 className="heading-part animate__animated animate__zoomIn">Pest and Disease</h3>
            <h3 className="heading-part animate__animated animate__zoomIn">Control</h3>
          </div>
          <p className="small-text animate__animated animate__fadeInUp animate__delay-1s">
            We provide expert guidance in pest and disease control, ensuring your crops thrive and yield abundantly. Together, we’ll safeguard your harvest and cultivate resilience in your farming practices!
          </p>
        </div>
      </Carousel>

      <style>{`
        body {
          background-color: #cae4c5; /* Change to your desired background color */
          margin: 0; /* Remove default margin */
          padding: 0; /* Remove default padding */
        }
        .carousel-item-content {
          background-image: linear-gradient(to bottom, #f7f7f7, #e7e7e7);
          border-radius: 15px; 
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); 
          min-height: 400px; 
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

        .heading-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px; /* Adjust this margin to raise the headings */
        }

        .heading-part {
          font-size: 2.5rem; 
          font-weight: 700; 
          margin: 0;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .carousel-item-content p, .carousel-item-content ul {
          font-size: 1.2rem; 
          color: #333;
          text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }

        .small-text {
          font-size: 1rem; 
          margin-top: 0px;
          color: #555;
          line-height: 1.6;
        }

        .custom-dot-list-style {
          bottom: 10px; 
        }

        .dot-active {
          background-color: #007bff; 
        }

        /* Consistent height for all carousel items */
        .carousel-item-content {
          height: 400px; /* Set a fixed height for consistency */
        }

        @media (max-width: 768px) {
          .carousel-item-content {
            padding: 20px; 
            height: 300px; /* Adjust height for smaller screens */
          }
          .heading-part {
            font-size: 2rem; 
          }
          .small-text {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .heading-part {
            font-size: 1.5rem; 
          }
          .small-text {
            font-size: 0.8rem; 
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
