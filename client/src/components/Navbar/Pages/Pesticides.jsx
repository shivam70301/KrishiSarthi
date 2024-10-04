import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pesticides = () => {
  const [pesticides, setPesticides] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from backend API
  useEffect(() => {
    const fetchPesticides = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/pesticides'); // Replace with your actual API URL
        const data = await response.json();
        setPesticides(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pesticide data:', error);
        setLoading(false);
      }
    };

    fetchPesticides();
  }, []);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleLearnMoreClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid" style={styles.container}> {/* Changed to container-fluid */}
      <div className="text-center">
        <h1 style={styles.heading}>Agriculture Pesticides</h1>
        <p style={styles.subheading}>
          Discover the best pesticides for your crops and protect your yield efficiently.
        </p>
      </div>
      <div>
        {pesticides.length === 0 ? (
          <p style={styles.noData}>No pesticides available.</p>
        ) : (
          pesticides.map((pesticide, index) => (
            <div className="card shadow-sm" style={styles.card} key={index}>
              <img src={pesticide.image} alt={pesticide.name} style={styles.image} />
              <div className="card-body" style={styles.cardBody}>
                <h5 className="card-title" style={styles.cardTitle}>{pesticide.name}</h5>
                <p className="card-text" style={styles.cardText}>{pesticide.description}</p>
                <p className="font-weight-bold">Category: {pesticide.category}</p>
                <p className="font-weight-bold">Active Ingredient: {pesticide.activeIngredient}</p>
                <p>Application: {pesticide.application}</p>

                {expandedIndex === index && (
                  <div style={styles.expandedText}>
                    <p className="font-weight-bold">Precautions: {pesticide.precautions}</p>
                    <p className="font-weight-bold">Environmental Impact: {pesticide.environmentalImpact}</p>
                    <p className="font-weight-bold">Recommended Usage: {pesticide.recommendedUsage}</p>
                  </div>
                )}
                <button
                  style={expandedIndex === index ? styles.btnViewLess : styles.btnLearnMore} // Change style based on state
                  onClick={() => handleLearnMoreClick(index)}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = expandedIndex === index ? styles.btnLearnMoreHover.backgroundColor : styles.btnLearnMoreHover.backgroundColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = expandedIndex === index ? styles.btnViewLess.backgroundColor : styles.btnLearnMore.backgroundColor)}
                >
                  {expandedIndex === index ? 'View Less' : 'Read Now'} {/* Change text based on state */}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#99cc99', // Updated background color
  },
  
  heading: {
    marginBottom: '0.5rem',
    fontSize: '3.5rem',
    fontWeight: 'bold',
    background: 'none',
    display: 'inline-block',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    color:'white'
  },
  subheading: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '1.5rem',
    color: '#232323',
    fontStyle: 'italic',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2rem',
    border: 'none',
    padding: '1rem',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#e6e7e9',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
    width: '95%',
    maxWidth: '100%', // Ensure it doesn't exceed container width
    flexWrap: 'wrap', // Allow items to wrap if needed
  },

  image: {
    width: '100%', // Full width of its container
    maxWidth: '200px', // Limit maximum width
    height: 'auto', // Automatic height to maintain aspect ratio
    objectFit: 'cover', // Ensures the image covers the space without distortion
    borderRadius: '15px',
    border: '2px solid #ddd',
    marginRight: '1rem',
  },
  cardBody: {
    flex: 1,
    textAlign: 'left',
  },
  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '0.75rem',
  },
  cardText: {
    fontSize: '1.1rem',
    color: '#6c757d',
    lineHeight: '1.6',
  },
  expandedText: {
    display: 'block',
    marginTop: '1rem',
  },
  btnLearnMore: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '8px',
    backgroundColor: '#28a745', // Green color
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  btnLearnMoreHover: {
    backgroundColor: '#218838', // Darker green for hover effect
  },
  btnViewLess: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '8px',
    backgroundColor: '#dc3545', // Red color for "View Less"
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  noData: {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#888',
  },
};

export default Pesticides;
