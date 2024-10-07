import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle } from 'react-icons/fa';

const SoilInformation = () => {
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

  return (
    <div className="container mt-5 hover-shadow">
      {soilData.map((soilInfo, index) => (
        <div className="card shadow-lg mb-4" key={index}>
          <div className="card-header bg-success text-white text-center">
            <h2>Soil Information for {soilInfo.region}</h2>
          </div>
          <div className="card-body">
            {/* General Soil Information */}
            <div className="row mb-4">
              <div className="col-md-6">
                <h5><strong>Soil Type:</strong></h5>
                <p>{soilInfo.soilType}</p>
              </div>
              <div className="col-md-6">
                <h5><strong>pH Level:</strong></h5>
                <p>{soilInfo.pH}</p>
              </div>
            </div>

            {/* Soil Properties in two columns */}
            <div className="row mb-4">
              <div className="col-md-6">
                <h5><strong>Moisture Level:</strong></h5>
                <p>{soilInfo.moistureLevel}</p>
              </div>
              <div className="col-md-6">
                <h5><strong>Soil Depth:</strong></h5>
                <p>{soilInfo.soilDepth}</p>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <h5><strong>Electrical Conductivity:</strong></h5>
                <p>{soilInfo.electricalConductivity}</p>
              </div>
              <div className="col-md-6">
                <h5><strong>Soil Texture:</strong></h5>
                <p>{soilInfo.texture}</p>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <h5><strong>Fertility:</strong></h5>
                <p>{soilInfo.fertility}</p>
              </div>
              <div className="col-md-6">
                <h5><strong>Organic Matter:</strong></h5>
                <p>{soilInfo.nutrients.organicMatter}</p>
              </div>
            </div>

            {/* Macro Nutrients with Progress Bars */}
            <div className="mb-4">
              <h5><strong>Macro Nutrients:</strong></h5>
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
            </div>

            {/* Micronutrients Displayed in a Different Way */}
            <div className="mb-4">
              <h5><strong>Micronutrients:</strong></h5>
              <div className="row">
                <div className="col-md-4">
                  <div className="card text-center">
                    <div className="card-body">
                      <h6><strong>Zinc (Zn):</strong></h6>
                      <p>{soilInfo.micronutrients.zinc}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center">
                    <div className="card-body">
                      <h6><strong>Iron (Fe):</strong></h6>
                      <p>{soilInfo.micronutrients.iron}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center">
                    <div className="card-body">
                      <h6><strong>Manganese (Mn):</strong></h6>
                      <p>{soilInfo.micronutrients.manganese}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soil Test Results with Highlight and Hover Effect */}
            <div className="mb-4">
              <h5><strong>Soil Test Results:</strong></h5>
              <table className="table table-bordered table-striped">
                <thead className="thead-light">
                  <tr>
                    <th>Parameter</th>
                    <th>Test Result</th>
                    <th>Optimal Range</th>
                    <th>Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {soilInfo.soilTestResults.map((test, index) => {
                    const isOptimal = test.result >= parseFloat(test.optimalRange.split(' ')[0]) && test.result <= parseFloat(test.optimalRange.split(' ')[2]);
                    return (
                      <tr key={index} className={`hover-effect ${isOptimal ? 'optimal' : 'out-of-range'}`}>
                        <td><strong>{test.parameter}</strong></td>
                        <td>{test.result}</td>
                        <td>{test.optimalRange}</td>
                        <td>{test.recommendation}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Best Agricultural Practices */}
            <div className="mb-4">
              <h5><FaCheckCircle /> <strong>Best Agricultural Practices:</strong></h5>
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
      ))}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500&display=swap');
        body {
          font-family: 'Quicksand', sans-serif;
          background-color: #cae4c5;
          margin: 0;
          padding: 0;
        }
        .card {
          border-radius: 15px;
          transition: transform 0.2s;
        }
        .hover-shadow:hover {
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          transform: translateY(-5px);
        }
        h2, h5 {
          font-weight: bold;
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
        .optimal {
          background-color: #c8e6c9;
        }
        .out-of-range {
          background-color: #ffccbc;
        }
      `}</style>
    </div>
  );
};

export default SoilInformation;
