import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLeaf, FaCheckCircle } from 'react-icons/fa';

const SoilInformation = () => {
  const soilInfo = {
    region: "Ahmednagar",
    soilType: "Black Soil",
    pH: "6.5 - 7.5",
    fertility: "High",
    moistureLevel: "60%",
    soilDepth: "100cm",
    electricalConductivity: "1.2 dS/m",
    nutrients: {
      nitrogen: 80,
      phosphorus: 60,
      potassium: 75,
      organicMatter: "3.5%",
    },
    micronutrients: {
      zinc: "1.5 mg/kg",
      iron: "4.0 mg/kg",
      manganese: "1.8 mg/kg",
    },
    suitableCrops: [
      {
        name: "Cotton",
        sunlight: "Full Sun",
        water: "Moderate",
        temperature: "20-30°C",
        practices: "Crop rotation, proper pest management."
      },
      {
        name: "Wheat",
        sunlight: "Full Sun",
        water: "Moderate",
        temperature: "10-25°C",
        practices: "Soil tillage, use of organic fertilizers."
      },
      {
        name: "Sugarcane",
        sunlight: "Full Sun",
        water: "High",
        temperature: "20-30°C",
        practices: "Regular irrigation, intercropping."
      },
      {
        name: "Groundnut",
        sunlight: "Full Sun",
        water: "Moderate",
        temperature: "25-35°C",
        practices: "Use of organic mulch, weed control."
      },
    ],
    waterRetention: "High",
    texture: "Fine",
    drainage: "Good",
    bestPractices: [
      "Conduct soil tests regularly.",
      "Utilize crop rotation to maintain soil fertility.",
      "Apply organic matter to enhance soil structure.",
      "Implement proper irrigation methods to conserve water."
    ]
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-success text-white text-center">
          <h2>Soil Information for {soilInfo.region}</h2>
        </div>
        <div className="card-body">
          {/* General Soil Information */}
          <div className="row mb-4">
            <div className="col-md-6">
              <h5>Soil Type:</h5>
              <p>{soilInfo.soilType}</p>
            </div>
            <div className="col-md-6">
              <h5>pH Level:</h5>
              <p>{soilInfo.pH}</p>
            </div>
          </div>

          {/* Soil Properties */}
          <div className="row mb-4">
            <div className="col-md-4">
              <h5>Moisture Level:</h5>
              <p>{soilInfo.moistureLevel}</p>
            </div>
            <div className="col-md-4">
              <h5>Soil Depth:</h5>
              <p>{soilInfo.soilDepth}</p>
            </div>
            <div className="col-md-4">
              <h5>Electrical Conductivity:</h5>
              <p>{soilInfo.electricalConductivity}</p>
            </div>
          </div>

          {/* Macro Nutrients with Progress Bars */}
          <div className="mb-4">
            <h5>Macro Nutrients:</h5>
            <div className="progress mb-2">
              <div className="progress-bar bg-info" role="progressbar" style={{ width: `${soilInfo.nutrients.nitrogen}%` }}>
                Nitrogen: {soilInfo.nutrients.nitrogen}%
              </div>
            </div>
            <div className="progress mb-2">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: `${soilInfo.nutrients.phosphorus}%` }}>
                Phosphorus: {soilInfo.nutrients.phosphorus}%
              </div>
            </div>
            <div className="progress mb-2">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: `${soilInfo.nutrients.potassium}%` }}>
                Potassium: {soilInfo.nutrients.potassium}%
              </div>
            </div>
            <h5>Organic Matter:</h5>
            <p>{soilInfo.nutrients.organicMatter}</p>
          </div>

          {/* Micronutrients */}
          <div className="mb-4">
            <h5>Micronutrients:</h5>
            <table className="table table-bordered table-striped">
              <thead className="thead-light">
                <tr>
                  <th>Zinc (Zn)</th>
                  <th>Iron (Fe)</th>
                  <th>Manganese (Mn)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{soilInfo.micronutrients.zinc}</td>
                  <td>{soilInfo.micronutrients.iron}</td>
                  <td>{soilInfo.micronutrients.manganese}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Texture and Drainage */}
          <div className="row mb-4">
            <div className="col-md-6">
              <h5>Soil Texture:</h5>
              <p>{soilInfo.texture}</p>
            </div>
            <div className="col-md-6">
              <h5>Drainage:</h5>
              <p>{soilInfo.drainage}</p>
            </div>
          </div>

          {/* Suitable Crops */}
          <div className="mb-4">
            <h5><FaLeaf /> Suitable Crops:</h5>
            <div className="row">
              {soilInfo.suitableCrops.map((crop, index) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="card border-primary hover-shadow">
                    <div className="card-body">
                      <h6 className="card-title">{crop.name}</h6>
                      <ul className="list-unstyled">
                        <li><strong>Sunlight:</strong> {crop.sunlight}</li>
                        <li><strong>Water:</strong> {crop.water}</li>
                        <li><strong>Temperature:</strong> {crop.temperature}</li>
                        <li><strong>Best Practices:</strong> {crop.practices}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Best Agricultural Practices */}
          <div className="mb-4">
            <h5><FaCheckCircle /> Best Agricultural Practices:</h5>
            <ul className="list-group">
              {soilInfo.bestPractices.map((practice, index) => (
                <li key={index} className="list-group-item list-group-item-action hover-effect">
                  {practice}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          border-radius: 15px;
          transition: transform 0.2s;
        }
        .hover-shadow:hover {
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          transform: translateY(-5px);
        }
        h2 {
          font-weight: bold;
        }
        h5 {
          font-weight: 600;
        }
        .progress-bar {
          font-size: 14px;
          padding: 2px 0;
        }
        .table {
          margin-top: 1rem;
        }
        .table-striped tbody tr:nth-of-type(odd) {
          background-color: #f2f2f2;
        }
        .list-group-item {
          background-color: #f8f9fa;
          transition: background-color 0.3s, transform 0.2s;
        }
        .hover-effect:hover {
          background-color: #e2e6ea;
          transform: scale(1.02);
        }
        .list-group-item:first-child {
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        .list-group-item:last-child {
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }
        .card.border-primary {
          border-color: #007bff !important;
        }
        .card-title {
          color: #007bff;
        }
      `}</style>
    </div>
  );
};

export default SoilInformation;
