import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaLeaf, FaWater, FaVials } from 'react-icons/fa';
import { ProgressBar } from 'react-bootstrap';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const SoilInformation = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');

  useEffect(() => {
    const checkLocalStorage = () => {
      const district = localStorage.getItem('maharashtraDistricts');
      if (district && district !== selectedDistrict) {
        setSelectedDistrict(district);
      }
    };

    // Initial fetch
    checkLocalStorage();

    const interval = setInterval(checkLocalStorage, 100); // Check every 100ms

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [selectedDistrict]);

  const soilData = [
    {
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
      waterRetention: "High",
      texture: "Fine",
      soilTestResults: [
        { parameter: "pH", result: "6.8", optimalRange: "6.0 - 7.0", recommendation: "No amendment required" },
        { parameter: "EC", result: "0.9 dS/m", optimalRange: "< 1.5 dS/m", recommendation: "No action needed" },
        { parameter: "Organic Matter", result: "3.5%", optimalRange: "> 2%", recommendation: "Sufficient" },
        { parameter: "Nitrogen (N)", result: "20 ppm", optimalRange: "20-40 ppm", recommendation: "Apply N fertilizer" },
        { parameter: "Phosphorus (P)", result: "18 ppm", optimalRange: "15-30 ppm", recommendation: "Adequate" },
        { parameter: "Potassium (K)", result: "200 ppm", optimalRange: "150-300 ppm", recommendation: "No additional K required" },
        { parameter: "Calcium (Ca)", result: "1500 ppm", optimalRange: "1000-2000 ppm", recommendation: "No amendment needed" },
        { parameter: "Magnesium (Mg)", result: "100 ppm", optimalRange: "50-150 ppm", recommendation: "Adequate" },
        { parameter: "Zinc (Zn)", result: "2.0 ppm", optimalRange: "1.0-3.0 ppm", recommendation: "Sufficient" },
        { parameter: "CEC", result: "18 meq/100g", optimalRange: "10-25 meq/100g", recommendation: "Good nutrient-holding capacity" }
      ],
      bestPractices: [
        "Conduct soil tests regularly.",
        "Utilize crop rotation to maintain soil fertility.",
        "Apply organic matter to enhance soil structure.",
        "Implement proper irrigation methods to conserve water."
      ]
    },
    {
      region: "Pune",
      soilType: "Red Soil",
      pH: "6.0 - 7.0",
      fertility: "Moderate",
      moistureLevel: "50%",
      soilDepth: "80cm",
      electricalConductivity: "1.0 dS/m",
      nutrients: {
        nitrogen: 60,
        phosphorus: 55,
        potassium: 70,
        organicMatter: "2.8%",
      },
      micronutrients: {
        zinc: "2.0 mg/kg",
        iron: "5.0 mg/kg",
        manganese: "1.5 mg/kg",
      },
      waterRetention: "Moderate",
      texture: "Coarse",
      soilTestResults: [
        { parameter: "pH", result: "6.5", optimalRange: "6.0 - 7.0", recommendation: "No amendment required" },
        { parameter: "EC", result: "1.0 dS/m", optimalRange: "< 1.5 dS/m", recommendation: "No action needed" },
        { parameter: "Organic Matter", result: "2.8%", optimalRange: "> 2%", recommendation: "Sufficient" },
        { parameter: "Nitrogen (N)", result: "25 ppm", optimalRange: "20-40 ppm", recommendation: "Apply N fertilizer" },
        { parameter: "Phosphorus (P)", result: "20 ppm", optimalRange: "15-30 ppm", recommendation: "Adequate" },
        { parameter: "Potassium (K)", result: "180 ppm", optimalRange: "150-300 ppm", recommendation: "No additional K required" },
        { parameter: "Calcium (Ca)", result: "1200 ppm", optimalRange: "1000-2000 ppm", recommendation: "No amendment needed" },
        { parameter: "Magnesium (Mg)", result: "90 ppm", optimalRange: "50-150 ppm", recommendation: "Adequate" },
        { parameter: "Zinc (Zn)", result: "1.5 ppm", optimalRange: "1.0-3.0 ppm", recommendation: "Sufficient" },
        { parameter: "CEC", result: "15 meq/100g", optimalRange: "10-25 meq/100g", recommendation: "Good nutrient-holding capacity" }
      ],
      bestPractices: [
        "Maintain proper soil moisture levels.",
        "Incorporate green manures to improve soil health.",
        "Use cover crops to prevent erosion.",
        "Test soil before applying fertilizers."
      ]
    }
  ];

  const filteredSoilData = soilData.filter(soilInfo => soilInfo.region === selectedDistrict);

  return (
    <div className="container mt-5">
      {filteredSoilData.length > 0 ? (
        filteredSoilData.map((soilInfo, index) => (
          <div className="card shadow-lg mb-4" key={index}>
            <div className="card-header bg-success text-white text-center">
              <h2>Soil Information for {soilInfo.region}</h2>
            </div>
            <div className="card-body">
              {/* General Soil Information */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <h5><strong>Soil Type:</strong> <FaLeaf /></h5>
                  <p>{soilInfo.soilType}</p>
                </div>
                <div className="col-md-6">
                  <h5><strong>pH Level:</strong> <FaVials /></h5>
                  <p>{soilInfo.pH}</p>
                </div>
              </div>

              {/* Additional Soil Information */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <h5><strong>Fertility:</strong></h5>
                  <p>{soilInfo.fertility}</p>
                </div>
                <div className="col-md-6">
                  <h5><strong>Moisture Level:</strong></h5>
                  <p>{soilInfo.moistureLevel}</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <h5><strong>Soil Depth:</strong></h5>
                  <p>{soilInfo.soilDepth}</p>
                </div>
                <div className="col-md-6">
                  <h5><strong>Electrical Conductivity:</strong></h5>
                  <p>{soilInfo.electricalConductivity}</p>
                </div>
              </div>

              {/* Nutrient Details */}
              <h5><strong>Nutrients:</strong></h5>
              <ul className="list-group mb-4">
                <li className="list-group-item">Nitrogen: {soilInfo.nutrients.nitrogen} ppm</li>
                <li className="list-group-item">Phosphorus: {soilInfo.nutrients.phosphorus} ppm</li>
                <li className="list-group-item">Potassium: {soilInfo.nutrients.potassium} ppm</li>
                <li className="list-group-item">Organic Matter: {soilInfo.nutrients.organicMatter}</li>
              </ul>

              {/* Progress Bars for Nutrients */}
              <h5><strong>Nutrient Levels:</strong></h5>
              <ProgressBar now={soilInfo.nutrients.nitrogen} label={`Nitrogen: ${soilInfo.nutrients.nitrogen} ppm`} max={100} className="mb-3" variant="success" />
              <ProgressBar now={soilInfo.nutrients.phosphorus} label={`Phosphorus: ${soilInfo.nutrients.phosphorus} ppm`} max={100} className="mb-3" variant="warning" />
              <ProgressBar now={soilInfo.nutrients.potassium} label={`Potassium: ${soilInfo.nutrients.potassium} ppm`} max={100} className="mb-3" variant="info" />

              {/* Soil Test Results Table */}
              <h5 className="mt-4"><strong>Soil Test Results:</strong></h5>
              <table className="table table-bordered table-striped mt-2">
                <thead className="thead-dark">
                  <tr>
                    <th>Parameter</th>
                    <th>Result</th>
                    <th>Optimal Range</th>
                    <th>Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {soilInfo.soilTestResults.map((test, index) => (
                    <tr key={index}>
                      <td>{test.parameter}</td>
                      <td>{test.result}</td>
                      <td>{test.optimalRange}</td>
                      <td>{test.recommendation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Best Practices */}
              <h5 className="mt-4"><strong>Best Practices:</strong></h5>
              <ul>
                {soilInfo.bestPractices.map((practice, index) => (
                  <li key={index}><FaCheckCircle className="text-success" /> {practice}</li>
                ))}
              </ul>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-warning text-center">
          <h5>No soil information available for the selected district.</h5>
        </div>
      )}
    </div>
  );
};

export default SoilInformation;
