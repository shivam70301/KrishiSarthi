import React, { useState } from 'react';
import { Modal, Card, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images from the assets folder
import wheat from "../../../assets/wheat.jpg";
import rice from "../../../assets/rice.jpg";   
import corn from "../../../assets/corn.jpg";
import ashGourd from "../../../assets/ashGourd.jpg";
import banana from "../../../assets/banana.jpg";

// Sample data for crops with more detailed information
const cropsData = [
  {
    id: 1,
    name: 'Wheat',
    image: wheat,
    growingTechnique: 'Plant in well-drained soil with full sun exposure.',
    diseases: 'Rust, Blight, Fusarium.',
    benefits: 'Rich in carbohydrates and proteins.',
    climate: 'Temperate climate with moderate rainfall.',
    watering: 'Moderate watering, especially during dry spells.',
    soil: 'Loamy soil with neutral pH.',
    fertilizer: 'Apply nitrogen and phosphorus-based fertilizers.',
    pestControl: 'Use fungicides to control rust and blight.',
    harvesting: 'Harvest when wheat turns golden yellow and hard.',
  },
  {
    id: 2,
    name: 'Rice',
    image: rice,
    growingTechnique: 'Requires flooded conditions for optimal growth.',
    diseases: 'Blast, Sheath blight.',
    benefits: 'Staple food rich in carbohydrates.',
    climate: 'Warm and humid climate.',
    watering: 'Water regularly to maintain flooded conditions.',
    soil: 'Clay or silt soils that can hold water.',
    fertilizer: 'Apply urea-based fertilizers in stages.',
    pestControl: 'Use resistant varieties and crop rotation to control pests.',
    harvesting: 'Harvest when rice grains turn golden and dry.',
  },
  {
    id: 3,
    name: 'Corn',
    image: corn,
    growingTechnique: 'Needs full sun and rich, well-drained soil.',
    diseases: 'Northern corn leaf blight, Rootworm.',
    benefits: 'Versatile crop used for food and fuel.',
    climate: 'Warm climate with plenty of sunlight.',
    watering: 'Regular watering, especially during pollination.',
    soil: 'Well-drained loamy soil.',
    fertilizer: 'Apply nitrogen-rich fertilizers at planting and early growth stages.',
    pestControl: 'Use insecticides and crop rotation to control rootworms.',
    harvesting: 'Harvest when ears are full and kernels are firm.',
  },
  {
    id: 4,
    name: 'Ash Gourd',
    image: ashGourd,
    growingTechnique: 'Requires warm temperatures and well-drained soil.',
    diseases: 'Powdery mildew, Aphids.',
    benefits: 'Low in calories and high in water content.',
    climate: 'Tropical and subtropical climates.',
    watering: 'Keep soil consistently moist.',
    soil: 'Well-drained sandy or loamy soil.',
    fertilizer: 'Fertilize with balanced NPK fertilizer.',
    pestControl: 'Use insect traps and neem oil for pests.',
    harvesting: 'Harvest when fruit is firm and mature.',
  },
  {
    id: 5,
    name: 'Banana',
    image: banana,
    seedSelection: 'Choose healthy and disease-free suckers or tissue-cultured plants.',
    soilPreparation: 'Prepare well-drained, fertile soil rich in organic matter.',
    planting: 'Plant in well-drained soil with full sunlight.',
    waterManagement: 'Water regularly to keep soil moist.',
    fertilizer: 'Use high-potassium fertilizer.',
    diseases: 'Fusarium wilt, Black sigatoka.',
    pesticides: 'Use cultural practices to manage pests or apply appropriate pesticides.',
    harvesting: 'Harvest when the fruit is fully developed but still green.',
    benefits: 'High in potassium and dietary fiber.',
    climate: 'Tropical and subtropical climates.',
    soil: 'Fertile, well-drained soil rich in organic matter.',
  },
];

const CropRecommendations = () => {
  const [show, setShow] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (crop) => {
    setSelectedCrop(crop);
    setShow(true);
  };

  return (
    <div className="container">
      <Row className="align-items-center mb-5">
        {/* Heading "Crop Recommendations" */}
        <Col md={12} className="text-center">
          <div className="heading-container">
            <h1 className="display-4 stylish-heading">CROPS FOR YOU</h1>
          </div>
        </Col>
      </Row>
      
      <Row>
        {cropsData.map((crop) => (
          <Col md={4} key={crop.id} className="mb-3">
            <Card className="shadow border-0 rounded crop-card" onClick={() => handleShow(crop)}>
              <Card.Img
                variant="top"
                src={crop.image}
                className="crop-image"
                aria-label={`Click to view details for ${crop.name}`}
              />
              <Card.Body className="text-center">
                <Card.Title className="font-weight-bold">{crop.name}</Card.Title>
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
              <h5>Fertilizer:</h5>
              <p>{selectedCrop.fertilizer}</p>
              <h5>Diseases:</h5>
              <p>{selectedCrop.diseases}</p>
              <h5>Pesticides:</h5>
              <p>{selectedCrop.pesticides}</p>
              <h5>Harvesting:</h5>
              <p>{selectedCrop.harvesting}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <style>{`
       body {
          background-color: #cae4c5; /* Change to your desired background color */
          margin: 0; /* Remove default margin */
          padding: 0; /* Remove default padding */
        }
        .container {
          background-color: #cae4c5;
          padding: 20px;
          border-radius: 8px;
         /* box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); */
        }

      .stylish-heading {
    font-family: serif, Georgia;
    font-weight: bold;
    color: #2c3e50;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid black; /* Adjust the thickness and color as needed */
    padding-bottom: 10px; /* Optional: adds some space between the text and the border */
}
        .crop-card {
          transition: transform 0.2s;
          border-radius: 10px;
          cursor: pointer;
        }

        .crop-card:hover {
          transform: scale(1.05);
          box-shadow: 1px 20px 20px #008000;
        }

        .crop-image {
          height: 250px;
          object-fit: cover;
          border-radius: 10px 10px 0 0;
        }

        @media (max-width: 768px) {
          .crop-image {
            height: 200px;
          }

          .stylish-heading {
            font-size: 1.75rem;
          }
        }

        .modal-header {
          background-color: #007bff;
          color: white;
          border-bottom: 2px solid #0056b3;
        }

        .modal-title {
          font-size: 1.75rem;
        }
          .modal-body {
          background-color: #cae4c5;
          }

        h5 {
          font-weight: bold;
          color: #333;
        }

        p {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default CropRecommendations;
