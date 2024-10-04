import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing icons
import wheat from '../../../assets/wheat.jpg'; // Ensure this path is correct

const cropRecommendations = [
  {
    name: 'Wheat',
    image: wheat,
    detailedInfo: 'Wheat is a cereal grain and a staple food for many cultures worldwide. It thrives in a cool growing season, typically sown in early winter for optimal yield. Wheat prefers well-drained soil with a pH level between 6.0 and 7.0. Regular soil testing is essential to determine nutrient levels. Fertilizing with nitrogen and potassium can significantly enhance growth and production. This crop plays a crucial role in food security and can be used for various products, including bread, pasta, and cereals.',
  },
  {
    name: 'Rice',
    image: 'path/to/rice.jpg',
    detailedInfo: 'Rice is a staple food for more than half of the world\'s population and is a vital source of carbohydrates. It grows best in warm, humid climates and requires abundant water for irrigation. The cultivation of rice involves flooding the fields, which helps suppress weeds and pests. Additionally, rice plants can thrive in different soil types but prefer those rich in organic matter. Proper management of water levels during the growth cycle is critical for maximizing yield, especially during the flowering and grain-filling stages.',
  },
  {
    name: 'Maize',
    image: 'path/to/maize.jpg',
    detailedInfo: 'Maize, commonly known as corn, is a major cereal grain and is crucial for both human consumption and animal feed. It requires warm temperatures and thrives in full sunlight, making it ideal for summer planting. Adequate soil moisture is essential for seed germination and growth. Maize is often planted in rows with appropriate spacing to ensure sufficient air circulation and nutrient access. It benefits from the application of phosphorus at planting to enhance root development, and implementing crop rotation can improve soil health and yield over time.',
  },
  {
    name: 'Pulses',
    image: 'path/to/pulses.jpg',
    detailedInfo: 'Pulses are legumes known for their high protein content and beneficial nitrogen-fixing properties, which enhance soil fertility. These crops, which include lentils, chickpeas, and beans, thrive in well-drained soil with full sunlight exposure. Pulses can grow in various climates but prefer moderate temperatures. Before planting, seeds should be inoculated with the appropriate rhizobia bacteria to optimize nitrogen fixation. Pulses also help improve the overall health of the cropping system, making them a valuable addition to crop rotation.',
  },
];


const styles = {
  container: {
    minHeight: '100vh', // Full page height
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: '2rem',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    transition: 'transform 0.2s',
  },
  cardHover: {
    transform: 'scale(1.02)',
  },
  image: {
    width: '30%', // Reduced size for better responsiveness
    height: 'auto', // Maintain aspect ratio
    objectFit: 'cover',
    borderRadius: '10px 0 0 10px',
  },
  cardBody: {
    flex: 1,
    textAlign: 'left',
    padding: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '0.5rem',
  },
  cardText: {
    fontSize: '1rem',
    color: '#6c757d',
  },
  detailedInfo: {
    marginTop: '0.5rem',
    fontSize: '0.9rem',
    color: '#495057',
  },
  techniqueDetails: {
    marginTop: '0.5rem',
    fontSize: '0.9rem',
    color: '#495057',
    fontStyle: 'italic',
  },
  learnMoreBtn: {
    marginTop: '1rem',
    padding: '0.3rem 0.8rem', // Reduced padding
    fontSize: '0.9rem', // Reduced font size
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  learnMoreBtnHover: {
    backgroundColor: '#0056b3',
  },
};

const CropRecommendations = () => {
  const [expandedCrop, setExpandedCrop] = useState(null);

  const handleLearnMoreClick = (index) => {
    setExpandedCrop(expandedCrop === index ? null : index);
  };

  return (
    <div className="container-fluid" style={styles.container}>
      <h1 style={styles.heading}>Crops Recommendation</h1>
      <div>
        {cropRecommendations.map((crop, index) => (
          <div className="mb-4" key={index}>
            <div
              className={`card shadow-sm ${expandedCrop === index ? 'bg-light' : ''}`}
              style={styles.card}
              onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img src={crop.image} alt={crop.name} style={styles.image} />
              <div className="card-body" style={styles.cardBody}>
                <h5 className="card-title" style={styles.cardTitle}>{crop.name}</h5>
                <p className="card-text" style={styles.cardText}>
                  {crop.growingTechnique}
                </p>
                {/* Display detailed info by default */}
                <p style={styles.detailedInfo}>{crop.detailedInfo}</p>
                {expandedCrop === index && (
                  <p style={styles.techniqueDetails}>{crop.techniqueDetails}</p>
                )}
                <button
                  style={styles.learnMoreBtn}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.learnMoreBtnHover.backgroundColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.learnMoreBtn.backgroundColor}
                  onClick={() => handleLearnMoreClick(index)}
                >
                  {expandedCrop === index ? (
                    <>
                      <FaChevronUp /> Show Less
                    </>
                  ) : (
                    <>
                      <FaArrowRight /> Learn More
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropRecommendations;
