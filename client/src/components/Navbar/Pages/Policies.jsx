import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from react-bootstrap

const Policies = () => {
  const [schemes, setSchemes] = useState([]); // State to hold the fetched policies
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedScheme, setSelectedScheme] = useState(null); // State to hold the selected scheme for details

  // Fetch policies from backend API on component mount
  useEffect(() => {
    fetch('http://localhost:8080/api/policies') // Replace with your actual backend URL
      .then((response) => response.json())
      .then((data) => setSchemes(data))
      .catch((error) => console.error('Error fetching policies:', error));
  }, []);

  // Function to open the modal and set the selected scheme
  const handleShowModal = (scheme) => {
    setSelectedScheme(scheme);
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedScheme(null); // Reset selected scheme
  };

  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-4 font-weight-bold main-heading">
          Government Schemes for Farmers
        </h1>
        <p className="lead sub-heading">
          Discover various schemes launched by the Indian Government to support farmers and enhance agricultural productivity.
        </p>
      </header>

      <div className="row gy-4">
        {schemes.map((scheme) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={scheme._id}>
            <div className="card h-100 shadow border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title card-heading">
                  {scheme.title}
                </h5>
                <p className="card-text text-muted">{scheme.description}</p>

                <div className="mt-auto d-flex justify-content-between">
                  <button
                    className="btn btn-view-more mt-3"
                    onClick={() => handleShowModal(scheme)} // Open modal with selected scheme
                  >
                    View More
                  </button>
                  <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal to display scheme details */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton className="text-center">
          <Modal.Title className="w-100" style={{ color: '#28a745', textAlign: 'center' }}>
            {selectedScheme?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedScheme && (
            <>
              <p className="font-weight-bold">Objectives:</p>
              <p>{selectedScheme.objectives}</p>
              <p className="font-weight-bold">Eligibility:</p>
              <p>{selectedScheme.eligibility}</p>
              <p className="font-weight-bold">Benefits:</p>
              <p>{selectedScheme.benefits}</p>
              <p className="font-weight-bold">Details:</p>
              <p>{selectedScheme.details}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {/* Visit Website button */}
          {selectedScheme && (
            <a 
              href={selectedScheme.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-success" // Green button
            >
              Visit Website
            </a>
          )}
        </Modal.Footer>
      </Modal>

      {/* Custom CSS styles */}
      <style jsx>{`
        header {
          margin-bottom: 40px;
        }

        body {
          background-color: #cae4c5; /* Change to your desired background color */
          margin: 0; /* Remove default margin */
          padding: 0; /* Remove default padding */
        }

        .main-heading {
          color: #2c3e50; /* Change to your desired color for the heading */
        }

        .sub-heading {
          color: darkblack; /* Change to your desired color for the subheading */
        }

        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
        }

        .card-body {
          min-height: 250px; /* Ensures all card bodies have a minimum height */
          display: flex;
          flex-direction: column; /* Ensures content stacks vertically */
        }

        .card-title {
          font-size: 1.5rem; /* Increased font size for the title */
          color: darkblack;
          font-weight: bold;
          padding-bottom: 10px; /* Adds space between the title and border */
          border-bottom: 2px solid #34495e; /* Adds a bottom border to the title */
          text-align: center; /* Center-align the title */
        }

        .font-weight-bold {
          font-weight: bold;
        }

        .btn-view-more {
          background-color: #28a745; /* Custom green color */
          border-color: #28a745;
          color: white;
        }

        .btn-view-more:hover {
          background-color: #218838; /* Darker green on hover */
          border-color: #1e7e34;
        }

        .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
        }

        .btn-success {
          background-color: #28a745; /* Green color for the Visit Website button */
          border-color: #28a745;
        }

        .btn-success:hover {
          background-color: #218838; /* Darker green on hover */
          border-color: #1e7e34;
        }
      `}</style>
    </div>
  );
};

export default Policies;
