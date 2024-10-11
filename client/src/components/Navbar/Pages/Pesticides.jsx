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
    <div className="container-fluid" style={styles.container}>
      <div className="text-center">
        <h1 style={styles.heading}>Agriculture Pesticides</h1>
        <p style={styles.subheading}>
          Discover the best pesticides for your crops and protect your yield efficiently.
        </p>
      </div>
      <div className="d-flex flex-column align-items-center">
        {pesticides.length === 0 ? (
          <p style={styles.noData}>No pesticides available.</p>
        ) : (
          pesticides.map((pesticide, index) => (
            <div className="card shadow-sm" style={styles.card} key={index}>
              <img src={pesticide.image} alt={pesticide.name} style={styles.image} />
              <div className="card-body" style={styles.cardBody}>
                <h5 className="card-title" style={styles.cardTitle}>{pesticide.name}</h5>
                <p style={styles.price}><span style={styles.headingText}>Price: </span><span>{pesticide.price}</span></p>
                <p><span style={styles.headingText}>Description:</span> <span style={styles.infoText}>{pesticide.description}</span></p>
                <p><span style={styles.headingText}>Technical Content:</span> <span style={styles.infoText}>{pesticide.technicalContent}</span></p>
                <p><span style={styles.headingText}>Usage:</span> <span style={styles.infoText}>{pesticide.usage}</span></p>

                {expandedIndex === index && (
                  <div style={styles.expandedText}>
                    <p><span style={styles.headingText}>Dosage:</span> <span style={styles.infoText}>{pesticide.dosage}</span></p>
                    <p><span style={styles.headingText}>Benefits:</span> <span style={styles.infoText}>{pesticide.benefits}</span></p>
                  </div>
                )}
                <div className="d-flex justify-content-start" style={styles.buttonContainer}>
                  <button
                    style={expandedIndex === index ? styles.btnViewLess : styles.btnLearnMore}
                    onClick={() => handleLearnMoreClick(index)}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = expandedIndex === index ? styles.btnLearnMoreHover.backgroundColor : styles.btnLearnMoreHover.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = expandedIndex === index ? styles.btnViewLess.backgroundColor : styles.btnLearnMore.backgroundColor)}
                  >
                    {expandedIndex === index ? 'View Less' : 'Read More'}
                  </button>
                  <a
                    href={pesticide.buyLink} // This is the link from the database
                    target="_blank"          // Opens the link in a new tab
                    rel="noopener noreferrer" // Security measure for external links
                    style={styles.btnBuyNow}
                  >
                    Buy Now
                  </a>
                </div>
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
    backgroundColor: '#cae4c5',
  },
  heading: {
    marginBottom: '0.5rem',
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  subheading: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '1.5rem',
    color: 'black',
    fontStyle: 'italic',
  },
  card: {
    display: 'flex',
    flexDirection: 'column', // Changed to column for image on top
    alignItems: 'center',
    marginBottom: '2rem',
    border: 'none',
    padding: '1rem',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#e6e7e9',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
    width: '90%',
    maxWidth: '100%',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    maxWidth: '400px', // Adjust max-width for better responsiveness
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '15px',
    border: '2px solid #ddd',
    marginBottom: '1rem', // Changed margin to bottom to place image above the text
  },
  cardBody: {
    flex: 1,
    textAlign: 'left',
  },
  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#027c68',
    marginBottom: '0.75rem',
  },
  headingText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#333',
    fontSize: '1.1rem',
    letterSpacing: '0.5px',
  },
  infoText: {
    fontWeight: 'normal',
    color: '#666',
    fontSize: '1rem',
  },
  price: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#333',
    marginTop: '1px',
  },
  expandedText: {
    display: 'block',
    marginTop: '0.5rem',
  },
  buttonContainer: {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  btnLearnMore: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '8px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  btnLearnMoreHover: {
    backgroundColor: '#218838',
  },
  btnViewLess: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '8px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  btnBuyNow: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '8px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
  noData: {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#888',
  },
};

export default Pesticides;
