import React, { useState, useEffect } from 'react';
import { Modal, Card, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 

const AllCrops = () => {
  const [cropsData, setCropsData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (crop) => {
    setSelectedCrop(crop);
    setShow(true);
  };

  // Fetch crop data from the backend
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/allCrops'); // Update this URL if needed
        setCropsData(response.data);
      } catch (error) {
        console.error('Error fetching crops data:', error);
      }
    };

    fetchCrops();
  }, []);

  const filteredCrops = cropsData.filter(crop =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Row className="align-items-center mb-3"> {/* Reduced margin below heading */}
        {/* Heading "All Crops" */}
        <Col md={12} className="text-center">
          <h1 className="display-4 stylish-heading">All Crops</h1>
        </Col>
      </Row>

      {/* Sticky Search Bar below the heading */}
      <Row className="mb-4 sticky-search-bar"> {/* Added sticky class */}
        <Col md={12} className="d-flex justify-content-center">
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
          <Col md={3} key={crop._id} className="mb-3"> {/* Use _id from MongoDB */}
            <Card className="shadow border-0 rounded crop-card text-center" onClick={() => handleShow(crop)}>
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
              {/* Close Button at the end of the modal body */}
              <div className="text-center mt-4">
                <Button variant="danger" onClick={handleClose}>
                  Close
                </Button>
              </div>
            </div>
          </Modal.Body>
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
          // border-radius: 8px;
          // box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
       .stylish-heading {
  font-family: serif, Georgia; /* You can change this to another font if desired */
  font-weight: bold;
  color: #2c3e50;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  border: 6px solid white; /* Add white border */
  padding: 10px; /* Add padding for spacing */
  border-top-left-radius: 30px; /* Circular top left corner */
  border-top-right-radius: 30px; /* Circular top right corner */
  border-bottom-left-radius: 0; /* Straight bottom left corner */
  border-bottom-right-radius: 0; /* Straight bottom right corner */
  display: inline-block; /* Make the border wrap around the text */
  width: 80%; /* Set width to 80% of the parent container */
  max-width: 600px; /* Set a max width to limit size */
  margin: 0 auto; /* Center the heading with no extra margin above or below */
  text-transform: uppercase;
}


        .sticky-search-bar {
          position: sticky;
          top: 0; /* Stick to the top of the viewport */
          background-color: #cae4c5; /* Match the container background */
          z-index: 10; /* Ensure it stays above other elements */
          padding: 10px 0; /* Optional: padding for aesthetics */
        }

        .search-bar {
          width: 30%; /* Reduce the width of the search bar further */
        }

        .search-input {
          padding: 8px; /* Adjust padding for a smaller search bar */
          font-size: 0.9rem;
          color: white;
          border: 2px solid #007bff;
          border-radius: 25px; /* Circular edges for the search bar */
          transition: border-color 0.3s;
        }

        .search-input:hover {
          border-color: #0056b3;
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

          .search-bar {
            width: 70%; /* Make the search bar wider on smaller screens */
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

        .btn-danger {
          background-color: #dc3545;
          border-color: #dc3545;
        }

        .btn-danger:hover {
          background-color: #c82333;
          border-color: #bd2130;
        }
      `}</style>
    </div>
  );
};

export default AllCrops;
