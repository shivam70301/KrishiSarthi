import React, { useState } from 'react';
import { Modal, Card, Row, Col, Form } from 'react-bootstrap';
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
    growingTechnique: 'Plant in well-drained soil with full sunlight.',
    diseases: 'Fusarium wilt, Black sigatoka.',
    benefits: 'High in potassium and dietary fiber.',
    climate: 'Tropical and subtropical climates.',
    watering: 'Water regularly to keep soil moist.',
    soil: 'Fertile, well-drained soil rich in organic matter.',
    fertilizer: 'Use high-potassium fertilizer.',
    pestControl: 'Use cultural practices to manage pests.',
    harvesting: 'Harvest when fruit is fully developed but still green.',
  },
];

const AllCrops = () => {
  const [show, setShow] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (crop) => {
    setSelectedCrop(crop);
    setShow(true);
  };

  const filteredCrops = cropsData.filter(crop =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Row className="align-items-center mb-5">
        {/* Heading "All Crops" */}
        <Col md={9} className="text-center"> {/* Centered heading */}
          <h1 className="display-4 stylish-heading">All Crops</h1>
        </Col>

        {/* Search Bar on the right */}
        <Col md={3} className="d-flex align-items-center justify-content-end">
          <Form.Group controlId="search" className="mb-0 search-bar">
            <Form.Control 
              type="text" 
              placeholder="Search crops" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </Form.Group>
        </Col>
      </Row>
      
      <Row>
        {filteredCrops.map((crop) => (
          <Col md={3} key={crop.id} className="mb-3">
            <Card className="shadow border-0 rounded crop-card" onClick={() => handleShow(crop)}>
              <Card.Img
                variant="top"
                src={crop.image}
                className="crop-image"
                aria-label={`Click to view details for ${crop.name}`}
              />
              <Card.Body>
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
              <h5>Soil Type:</h5>
              <p>{selectedCrop.soil}</p>
              <h5>Fertilizer Requirements:</h5>
              <p>{selectedCrop.fertilizer}</p>
              <h5>Pest Control:</h5>
              <p>{selectedCrop.pestControl}</p>
              <h5>Harvesting:</h5>
              <p>{selectedCrop.harvesting}</p>
            </div>
          </Modal.Body>
        </Modal>
      )}

      <style>{`
        .container {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }

        .stylish-heading {
          font-family: 'Georgia', serif;
          font-weight: bold;
          color: #2c3e50;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        }

        .search-bar {
          width: 100%;
        }

        .search-input {
          padding: 10px;
          font-size: 0.9rem;
          /* Blue background */
          color: white; /* White text */
          border: 2px solid #007bff; /* Blue border */
          border-radius: 5px;
          transition: border-color 0.3s; /* Transition for border color */
        }

        .search-input:hover {
          border-color: #0056b3; /* Darker blue on hover */
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
          height: 300px;
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

        h5 {
          font-weight: bold;
          color: #333;
        }

        p {
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default AllCrops;
