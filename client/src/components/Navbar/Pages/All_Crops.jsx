import React, { useState, useEffect } from 'react';
import { Modal, Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllCrops = () => {
  const [cropsData, setCropsData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (crop) => {
    setSelectedCrop(crop);
    setShow(true);
  };

  // Fetch crops data from the backend
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/AllCrops');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCropsData(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchCrops();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-5 display-4 stylish-heading">All Crops</h1>
      <Row>
        {cropsData.map((crop) => (
          <Col md={4} key={crop._id} className="mb-4">
            <Card className="shadow border-0 rounded crop-card">
              <Card.Img variant="top" src={crop.image} className="crop-image" />
              <Card.Body>
                <Card.Title className="font-weight-bold">{crop.name}</Card.Title>
                <Button 
                  variant="primary" 
                  onClick={() => handleShow(crop)} 
                  className="mt-3" 
                  aria-label={`View details for ${crop.name}`}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedCrop && (
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title className="font-weight-bold">{selectedCrop.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <img 
                src={selectedCrop.image} 
                alt={selectedCrop.name} 
                className="img-fluid mb-3 crop-image d-block mx-auto" 
              />
              <h5>Seed Selection:</h5>
              <p>{selectedCrop.seedSelection}</p>
              <h5>Soil Preparation:</h5>
              <p>{selectedCrop.soilPreparation}</p>
              <h5>Planting:</h5>
              <p>{selectedCrop.planting}</p>
              <h5>Water Management:</h5>
              <p>{selectedCrop.waterManagement}</p>
              <h5>Fertilizer Requirements:</h5>
              <p>{selectedCrop.fertilizer}</p>
              <h5>Diseases:</h5>
              <p>{selectedCrop.diseases}</p>
              <h5>Pesticides:</h5>
              <p>{selectedCrop.pesticides}</p>
              <h5>Harvesting (Time & Methods):</h5>
              <p>{selectedCrop.harvesting}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <style>{`
        .container {
          background-color: #f8f9fa; /* Light background for better contrast */
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }

        .stylish-heading {
          font-family: 'Georgia', serif; /* Stylish font */
          font-weight: bold;
          color: #2c3e50; /* Darker color for better contrast */
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); /* Subtle text shadow */
        }

        .crop-card {
          transition: transform 0.2s; /* Smooth hover effect */
          border-radius: 10px; /* Round card corners */
        }

        .crop-card:hover {
          transform: scale(1.05); /* Slightly enlarge the card on hover */
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Card shadow on hover */
        }

        .crop-image {
          height: 300px; /* Adjusted height for better proportion */
          object-fit: cover; /* Maintain aspect ratio */
          border-radius: 10px 10px 0 0; /* Round top corners */
        }

        .modal-header {
          background-color: #007bff; /* Bootstrap primary color */
          color: white;
          border-bottom: 2px solid #0056b3; /* Bottom border for distinction */
        }

        .modal-title {
          font-size: 1.75rem; /* Adjust title size in modal */
        }

        h5 {
          font-weight: bold; /* Bold headings for clarity */
          color: #333; /* Darker color for readability */
        }

        p {
          color: #555; /* Grey text for better contrast */
        }

        @media (max-width: 768px) {
          .crop-image {
            height: 200px; /* Smaller image height for mobile */
          }

          .modal-title {
            font-size: 1.5rem; /* Smaller title size on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default AllCrops;
