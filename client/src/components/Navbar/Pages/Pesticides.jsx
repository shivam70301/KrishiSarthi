import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const pesticidesData = [
  {
    name: 'Pesticide A',
    description: 'Effective against various pests. It is commonly used in crops to prevent pest damage and improve yield.',
    category: 'Insecticide',
    application: 'Spray',
    image: 'path/to/pesticideA.jpg', // Replace with actual image path
  },
  {
    name: 'Pesticide B',
    description: 'Controls fungal infections. Helps protect crops from mildew and other fungal diseases.',
    category: 'Fungicide',
    application: 'Soil Drench',
    image: 'path/to/pesticideB.jpg', // Replace with actual image path
  },
  {
    name: 'Pesticide C',
    description: 'Prevents weed growth. Effective in maintaining soil health across various crops.',
    category: 'Herbicide',
    application: 'Granules',
    image: 'path/to/pesticideC.jpg', // Replace with actual image path
  },
  // Add more pesticide data as needed
];

const styles = {
  container: {
    marginTop: '4rem',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #4facfe, #00f2fe)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  subheading: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '1.25rem',
    color: '#6c757d',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2rem',
    border: 'none',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  },
  image: {
    width: '180px',
    height: '180px',
    objectFit: 'cover',
    marginRight: '1.5rem',
    borderRadius: '10px',
  },
  cardBody: {
    flex: 1,
    textAlign: 'left',
  },
  cardTitle: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '0.5rem',
  },
  cardText: {
    fontSize: '1rem',
    color: '#6c757d',
  },
};

const Pesticides = () => {
  return (
    <div className="container" style={styles.container}>
      <h1 style={styles.heading}>Agriculture Pesticides</h1>
      <p style={styles.subheading}>
        Learn more about the best pesticides for your crops and how they can protect your yield.
      </p>
      <div>
        {pesticidesData.map((pesticide, index) => {
          return (
            <div
              className="card shadow-sm"
              style={styles.card}
              key={index}
              onMouseEnter={(e) => (e.currentTarget.style.transform = styles.cardHover.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
            >
              <img src={pesticide.image} alt={pesticide.name} style={styles.image} />
              <div className="card-body" style={styles.cardBody}>
                <h5 className="card-title" style={styles.cardTitle}>{pesticide.name}</h5>
                <p className="card-text" style={styles.cardText}>
                  {pesticide.description}
                </p>
                <p className="font-weight-bold">Category: {pesticide.category}</p>
                <p>Application: {pesticide.application}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pesticides;
