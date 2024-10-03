import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Policies = () => {
  const schemes = [
    {
      id: 1,
      title: 'PM-KISAN',
      description: 'Direct income support to farmers with small and marginal land holdings.',
      objectives: 'To provide financial support to farmers for sustenance and livelihood.',
      eligibility: 'All small and marginal farmers holding up to 2 hectares of land.',
      benefits: '₹6,000 annually provided in three equal installments directly to the farmers’ bank accounts.',
      details: 'This scheme aims to ensure a basic income support for farmers to improve their economic conditions and ensure food security.',
      link: 'https://pmkisan.gov.in/',
    },
    {
      id: 2,
      title: 'Soil Health Card Scheme',
      description: 'Promotes sustainable farming through soil health assessment and nutrient management.',
      objectives: 'To promote nutrient management in farming and increase productivity through sustainable practices.',
      eligibility: 'Farmers can apply for soil health cards through local agriculture departments.',
      benefits: 'Farmers receive a detailed report on soil health and personalized recommendations for fertilizers and crops.',
      details: 'The scheme helps farmers understand their soil health and make informed decisions to enhance productivity.',
      link: 'https://www.india.gov.in/soil-health-card-scheme',
    },
    {
      id: 3,
      title: 'Pradhan Mantri Fasal Bima Yojana',
      description: 'Crop insurance scheme to provide financial support to farmers affected by natural calamities.',
      objectives: 'To mitigate the risk of crop loss due to natural disasters and provide financial security to farmers.',
      eligibility: 'Farmers cultivating notified crops can enroll for the scheme.',
      benefits: 'Coverage for various natural calamities, pests, and diseases, ensuring financial stability in case of loss.',
      details: 'Farmers can avail of the benefits of this scheme to safeguard their livelihoods against unexpected events.',
      link: 'https://pmfby.gov.in/',
    },
    {
      id: 4,
      title: 'National Agriculture Market (e-NAM)',
      description: 'An online trading platform for agricultural commodities to enhance farmers’ income.',
      objectives: 'To create a unified national market for agricultural commodities through e-trading.',
      eligibility: 'Any registered farmer can participate in e-NAM and sell their produce online.',
      benefits: 'Access to wider markets, better price realization, and reduction of intermediaries.',
      details: 'e-NAM helps farmers directly connect with buyers, ensuring fair prices and enhancing profitability.',
      link: 'https://enam.gov.in/',
    },
    {
      id: 5,
      title: 'Kisan Credit Card Scheme',
      description: 'Provides farmers with credit facilities to meet their agricultural needs.',
      objectives: 'To provide timely and adequate credit support to farmers for agricultural and other related activities.',
      eligibility: 'Farmers with landholdings and who are involved in agricultural activities.',
      benefits: 'Access to loans at low-interest rates, enabling farmers to invest in farming and other allied activities.',
      details: 'This scheme aims to empower farmers with easy access to credit, reducing their dependency on informal sources of finance.',
      link: 'https://www.nabard.org/',
    },
    // Add more schemes as needed
  ];

  // State to track which scheme's details are visible
  const [expandedScheme, setExpandedScheme] = useState(null);

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
          <div className="col-lg-4 col-md-6 col-sm-12" key={scheme.id}>
            <div className="card h-100 shadow border-0">
              <div className="card-body text-center">
                <h5 className="card-title" style={{ fontWeight: '600', color: '#34495e' }}>
                  {scheme.title}
                </h5>
                <p className="card-text text-muted">{scheme.description}</p>

                {/* Toggle additional information */}
                {expandedScheme === scheme.id && (
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
                    onClick={() => toggleSchemeDetails(scheme.id)}
                  >
                    {expandedScheme === scheme.id ? 'Show Less' : 'View More'}
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
