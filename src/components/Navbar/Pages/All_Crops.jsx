import React, { useState } from 'react';
import { Modal, Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images from the assets folder
import wheat from "../../../assets/wheat.jpg";
import rice from "../../../assets/rice.jpg";
import corn from "../../../assets/corn.jpg";

// Sample data for crops with more detailed information
const cropsData = [
  {
    id: 1,
    name: 'Wheat',
    image: wheat, // Use the imported image
    growingTechnique: 'Plant in well-drained soil with full sun exposure.',
    diseases: 'Rust, Blight, and Fusarium.',
    benefits: 'Rich in carbohydrates and proteins.',
    climate: 'Temperate climate with moderate rainfall.',
    watering: 'Moderate watering, especially during dry spells.',
  },
  {
    id: 2,
    name: 'Rice',
    image: rice, // Use the imported image
    growingTechnique: 'Requires flooded conditions for optimal growth.',
    diseases: 'Blast, Sheath blight.',
    benefits: 'Staple food rich in carbohydrates.',
    climate: 'Warm and humid climate.',
    watering: 'Water regularly to maintain flooded conditions.',
  },
  {
    id: 3,
    name: 'Corn',
    image: corn, // Use the imported image
    growingTechnique: 'Needs full sun and rich, well-drained soil.',
    diseases: 'Northern corn leaf blight, Rootworm.',
    benefits: 'Versatile crop used for food and fuel.',
    climate: 'Warm climate with plenty of sunlight.',
    watering: 'Regular watering, especially during pollination.',
  },
  // Add more crops as needed
];

const AllCrops = () => {
  const [show, setShow] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (crop) => {
    setSelectedCrop(crop);
    setShow(true);
  };

  return (
    <div className="container">
      <h1 className="text-center my-5 display-4 stylish-heading">All Crops</h1>
      <Row>
        {cropsData.map((crop) => (
          <Col md={4} key={crop.id} className="mb-4">
            <Card className="shadow border-0 rounded crop-card">
              <Card.Img
                variant="top"
                src={crop.image}
                className="crop-image"
              />
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
                className="img-fluid mb-3 crop-image" 
              />
              <h5>Growing Technique:</h5>
              <p>{selectedCrop.growingTechnique}</p>
              <h5>Diseases:</h5>
              <p>{selectedCrop.diseases}</p>
              <h5>Benefits:</h5>
              <p>{selectedCrop.benefits}</p>
              <h5>Preferred Climate:</h5>
              <p>{selectedCrop.climate}</p>
              <h5>Watering Requirements:</h5>
              <p>{selectedCrop.watering}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
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
