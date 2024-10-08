import React, { useState, useEffect } from 'react';
import { Modal, Card, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample data for crops with more detailed information for each district
const cropsData = {
  Pune: [
    {
      name: 'Wheat',
      image: 'path_to_wheat_image', // Replace with actual image path
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
      name: 'Corn',
      image: 'path_to_corn_image', // Replace with actual image path
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
  ],
  Nashik: [
    {
      name: 'Rice',
      image: 'path_to_rice_image', // Replace with actual image path
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
      name: 'Banana',
      image: 'path_to_banana_image', // Replace with actual image path
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
  ],
};

const Crop_Recommendations = () => {
  const [show, setShow] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [districtCrops, setDistrictCrops] = useState([]);
  const [district, setDistrict] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (crop) => {
    setSelectedCrop(crop);
    setShow(true);
  };

  // Function to fetch crops based on district from localStorage
  const fetchCropsByDistrict = () => {
    const storedDistrict = localStorage.getItem('maharashtraDistricts');
    if (storedDistrict && cropsData[storedDistrict]) {
      setDistrictCrops(cropsData[storedDistrict]);
      setDistrict(storedDistrict);
    } else {
      setDistrictCrops([]); // Set to empty if no data for the district
    }
  };

  // useEffect to set the interval for fetching crops
  useEffect(() => {
    fetchCropsByDistrict(); // Initial fetch

    const interval = setInterval(() => {
      fetchCropsByDistrict();
    }, 100); // Set interval to fetch every 100ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="container-fluid" style={{ backgroundColor: '#cae4c5', minHeight: '100vh', padding: '20px' }}>
      <Row className="align-items-center mb-5">
        <Col md={12} className="text-center">
          <div className="heading-container">
            <h1 className="display-4 stylish-heading">CROPS FOR {district.toUpperCase()}</h1>
          </div>
        </Col>
      </Row>

      <Row>
        {districtCrops.length > 0 ? (
          <Col md={12} className="mb-4">
            <Row>
              {districtCrops.map((crop) => (
                <Col md={4} key={crop.name}>
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
          </Col>
        ) : (
          <Col md={12} className="text-center">
            <div className="no-crops-message">
              <h3 className="font-weight-bold">No crops available for the selected district.</h3>
              <p>It seems we don't have any data for this district yet.</p>
              <Button variant="outline-success" onClick={() => fetchCropsByDistrict()}>
                Refresh
              </Button>
            </div>
          </Col>
        )}
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
              <p>{selectedCrop.seedSelection || 'N/A'}</p>
              <h5>Soil Preparation:</h5>
              <p>{selectedCrop.soilPreparation || 'N/A'}</p>
              <h5>Planting:</h5>
              <p>{selectedCrop.planting || 'N/A'}</p>
              <h5>Water Management:</h5>
              <p>{selectedCrop.waterManagement || 'N/A'}</p>
              <h5>Fertilizer:</h5>
              <p>{selectedCrop.fertilizer || 'N/A'}</p>
              <h5>Diseases:</h5>
              <p>{selectedCrop.diseases || 'N/A'}</p>
              <h5>Pesticides:</h5>
              <p>{selectedCrop.pesticides || 'N/A'}</p>
              <h5>Harvesting:</h5>
              <p>{selectedCrop.harvesting || 'N/A'}</p>
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
          padding: 20px;
          border-radius: 8px;
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
        .no-crops-message {
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          margin-top: 20px;
        }
        .no-crops-message h3 {
          color: #d9534f;
        }
        .no-crops-message p {
          color: #5a5a5a;
        }
      `}</style>
    </div>
  );
};

export default Crop_Recommendations;
