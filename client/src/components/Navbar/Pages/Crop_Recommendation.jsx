import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing icons
import wheat from '../../../assets/wheat.jpg'; // Ensure this path is correct

const cropRecommendations = [
  {
    name: 'Wheat',
    image: wheat,
    growingTechnique: 'Sow seeds in well-drained soil during winter for a good harvest.',
    detailedInfo: 'Wheat is a cereal grain and a staple food for many cultures around the world. It requires a cool growing season and should be sown early in the winter.',
    techniqueDetails: 'Use soil testing to determine pH and nutrient levels, ensuring it is around 6.0 to 7.0 pH. Fertilize with nitrogen and potassium for better yield.',
  },
  {
    name: 'Rice',
    image: 'path/to/rice.jpg',
    growingTechnique: 'Plant in flooded fields and provide adequate water management.',
    detailedInfo: 'Rice is a staple food for more than half of the world\'s population. It grows well in warm and humid climates with abundant water.',
    techniqueDetails: 'Plant seedlings in nursery beds and transplant them to puddled fields. Maintain water levels between 5-10 cm during the growing season.',
  },
  {
    name: 'Maize',
    image: 'path/to/maize.jpg',
    growingTechnique: 'Requires warm weather, sow in rows with adequate spacing.',
    detailedInfo: 'Maize, also known as corn, is a major cereal grain worldwide. It thrives in warm temperatures and requires full sun.',
    techniqueDetails: 'Ensure soil is well-drained and fertilize with phosphorus at planting. Practice crop rotation to maintain soil fertility.',
  },
  {
    name: 'Pulses',
    image: 'path/to/pulses.jpg',
    growingTechnique: 'Plant in well-drained soil with full sunlight exposure.',
    detailedInfo: 'Pulses are a group of legumes that are important for their high protein content and nitrogen-fixing abilities.',
    techniqueDetails: 'Inoculate seeds with the right rhizobia bacteria before planting. Ensure soil is moderately fertile and avoid excessive nitrogen fertilizer.',
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
