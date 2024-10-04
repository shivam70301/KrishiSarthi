import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Policies = () => {
  const [schemes, setSchemes] = useState([]);  // State to hold the fetched policies
  const [expandedScheme, setExpandedScheme] = useState(null); // State to track expanded scheme

  // Fetch policies from backend API on component mount
  useEffect(() => {
    fetch('http://localhost:8080/api/policies') // Replace with your actual backend URL
      .then((response) => response.json())
      .then((data) => setSchemes(data))
      .catch((error) => console.error('Error fetching policies:', error));
  }, []);

  // Function to toggle the visibility of additional information
  const toggleSchemeDetails = (id) => {
    if (expandedScheme === id) {
      setExpandedScheme(null); // Collapse if already expanded
    } else {
      setExpandedScheme(id); // Expand the selected scheme
    }
  };

  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-4 font-weight-bold text-primary">Government Schemes for Farmers</h1>
        <p className="lead text-muted">
          Discover various schemes launched by the Indian Government to support farmers and enhance agricultural productivity.
        </p>
      </header>

      <div className="row gy-4">
        {schemes.map((scheme) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={scheme._id}>
            <div className="card h-100 shadow border-0">
              <div className="card-body text-center">
                <h5 className="card-title" style={{ fontWeight: '600', color: '#34495e' }}>
                  {scheme.title}
                </h5>
                <p className="card-text text-muted">{scheme.description}</p>

                {/* Toggle additional information */}
                {expandedScheme === scheme._id && (
                  <>
                    <p className="font-weight-bold">Objectives:</p>
                    <p>{scheme.objectives}</p>
                    <p className="font-weight-bold">Eligibility:</p>
                    <p>{scheme.eligibility}</p>
                    <p className="font-weight-bold">Benefits:</p>
                    <p>{scheme.benefits}</p>
                    <p className="font-weight-bold">Details:</p>
                    <p>{scheme.details}</p>
                  </>
                )}

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-secondary mt-3"
                    onClick={() => toggleSchemeDetails(scheme._id)}
                  >
                    {expandedScheme === scheme._id ? 'Show Less' : 'View More'}
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

      {/* Custom CSS styles */}
      <style jsx>{`
        header {
          margin-bottom: 40px;
        }

        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
        }

        .card-title {
          color: #34495e;
        }

        .font-weight-bold {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Policies;
