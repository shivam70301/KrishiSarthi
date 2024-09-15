import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
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

  const styles = {
    carouselContainer: {
      position: 'relative',
      width: '89%',
      margin: '30px auto',
      backgroundColor: '#f7f7f7',
      borderRadius: "10px",
    },
    carouselItem: {
      backgroundColor: '#f5f5f5',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '20px',
    },
    ul: {
      listStyle: 'disc',
      paddingLeft: '20px',
      marginBottom: '20px',
    },
    li: {
      marginBottom: '10px',
    },
    carouselSlide: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '300px',
    },
    customDotListStyle: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      justifyContent: 'center',
    },
    dotActive: {
      backgroundColor: '#333',
    },
  };

  return (
    <div style={styles.carouselContainer}>
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
        <div style={styles.carouselSlide}>
          <h2 style={styles.h2}>Market Trends</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>Organic Produce (25%)</li>
            <li style={styles.li}>Sustainable Farming (30%)</li>
            <li style={styles.li}>Artisanal Foods (20%)</li>
          </ul>
        </div>
        <div style={styles.carouselSlide}>
          <h2 style={styles.h2}>Market Analysis</h2>
          <p>The demand for organic produce is increasing rapidly.</p>
          <p>Sustainable farming practices are becoming more popular.</p>
          <p>Artisanal foods are gaining traction among consumers.</p>
        </div>
      </Carousel>
    </div>
  );
};

export default MarketTrends;