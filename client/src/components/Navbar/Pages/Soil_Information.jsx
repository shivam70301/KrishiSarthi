import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaLeaf, FaVials } from 'react-icons/fa';
import { ProgressBar, Tooltip, OverlayTrigger } from 'react-bootstrap';

const SoilInformation = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [soilData, setSoilData] = useState([]);

  useEffect(() => {
    const checkLocalStorage = () => {
      const district = localStorage.getItem('maharashtraDistricts');
      if (district && district !== selectedDistrict) {
        setSelectedDistrict(district);
      }
    };

    checkLocalStorage();
    const interval = setInterval(checkLocalStorage, 100);

    return () => clearInterval(interval);
  }, [selectedDistrict]);

  useEffect(() => {
    const fetchSoilData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/soil');
        const data = await response.json();
        setSoilData(data);
      } catch (error) {
        console.error('Error fetching soil data:', error);
      }
    };

    fetchSoilData();
  }, []);

  const filteredSoilData = soilData.filter(soilInfo => soilInfo.region === selectedDistrict);

  // Inline styles for the component
  const styles = {
    card: {
      transition: 'transform 0.2s',
    },
    cardHover: {
      transform: 'scale(1.02)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    },
    header: {
      backgroundColor: '#28a745',
      color: 'white',
      textAlign: 'center',
    },
    tableHeader: {
      backgroundColor: '#28a745',
      color: 'white',
    },
    tableCell: {
      backgroundColor: '#f8f9fa',
    },
    listItem: {
      transition: 'background-color 0.3s',
    },
    listItemHover: {
      backgroundColor: '#e2e6ea',
    },
    container: {
      backgroundColor: '#cae4c5', // Set background color to red
      padding: '20px',
      minHeight: '100vh',
    }
  };

  return (
    <div className="container mt-5" style={styles.container}>
      {filteredSoilData.length > 0 ? (
        filteredSoilData.map((soilInfo, index) => (
          <div
            className="card shadow-lg mb-4"
            key={index}
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = styles.cardHover.transform)}
            onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
          >
            <div className="card-header" style={styles.header}>
              <h2>Soil Information for {soilInfo.region}</h2>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-md-6">
                  <h5><strong>Soil Type:</strong> <FaLeaf /></h5>
                  <p>{soilInfo.soilType}</p>
                </div>
                <div className="col-md-6">
                  <h5><strong>pH Level:</strong> <FaVials /></h5>
                  <p>{soilInfo.pH}</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <h5><strong>Fertility:</strong></h5>
                  <p>{soilInfo.fertility}</p>
                </div>
                <div className="col-md-6">
                  <h5><strong>Moisture Level:</strong></h5>
                  <p>{soilInfo.moistureLevel}</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <h5><strong>Soil Depth:</strong></h5>
                  <p>{soilInfo.soilDepth}</p>
                </div>
                <div className="col-md-6">
                  <h5><strong>Electrical Conductivity:</strong></h5>
                  <p>{soilInfo.electricalConductivity}</p>
                </div>
              </div>

              <h5><strong>Macro Nutrients:</strong></h5>
              <ul className="list-group mb-4">
                <li className="list-group-item">Nitrogen: {soilInfo.nutrients.nitrogen} ppm</li>
                <li className="list-group-item">Phosphorus: {soilInfo.nutrients.phosphorus} ppm</li>
                <li className="list-group-item">Potassium: {soilInfo.nutrients.potassium} ppm</li>
                <li className="list-group-item">Organic Matter: {soilInfo.nutrients.organicMatter}</li>
              </ul>

              {/* Micronutrient Levels */}
              <h5><strong>Micronutrient Levels:</strong></h5>
              <ProgressBar now={soilInfo.micronutrients.zinc} label={`ZINC: ${soilInfo.micronutrients.zinc}`} max={100} className="mb-3" variant="success" />
              <ProgressBar now={soilInfo.micronutrients.iron} label={`IRON: ${soilInfo.micronutrients.iron}`} max={100} className="mb-3" variant="warning" />
              <ProgressBar now={soilInfo.micronutrients.manganese} label={`MANGANESE: ${soilInfo.micronutrients.manganese}`} max={100} className="mb-3" variant="danger" />

              <h5 className="mt-4"><strong>Soil Test Results:</strong></h5>
              <table className="table table-bordered table-striped mt-2">
                <thead>
                  <tr>
                    <th style={styles.tableHeader}>Parameter</th>
                    <th style={styles.tableHeader}>Result</th>
                    <th style={styles.tableHeader}>Optimal Range</th>
                    <th style={styles.tableHeader}>Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {soilInfo.soilTestResults.map((test, index) => (
                    <tr key={index}>
                      <td>{test.parameter}</td>
                      <td style={styles.tableCell}>{test.result}</td>
                      <td style={styles.tableCell}>{test.optimalRange}</td>
                      <td style={styles.tableCell}>{test.recommendation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h5 className="mt-4"><strong>Best Practices:</strong></h5>
              <ul className="list-group">
                {soilInfo.bestPractices.map((practice, index) => (
                  <li
                    className="list-group-item"
                    key={index}
                    style={styles.listItem}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.listItemHover.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
                  >
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id={`tooltip-top`}>{practice}</Tooltip>}
                    >
                      <span>
                        <FaCheckCircle className="text-success" /> {practice}
                      </span>
                    </OverlayTrigger>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">
          <h5>No soil information found for the selected district.</h5>
        </div>
      )}
        <style jsx>{`
    body {
      background-color: #cae4c5; /* Change to your desired background color */
      margin: 0; /* Remove default margin */
      padding: 0; /* Remove default padding */
    }

};
`}</style>
    </div>
    
  );
  
};

export default SoilInformation;
