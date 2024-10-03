
import React, { useState } from 'react';
import { Modal, Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images from the assets folder
import wheat from "../../../assets/wheat.jpg";
import rice from "../../../assets/rice.jpg";  
import corn from "../../../assets/corn.jpg";
import ashGourd from "../../../assets/ashGourd.jpg";
import banana from "../../../assets/banana.jpg";
// import barley from "../../../assets/barley.jpg";
// import beetroot from "../../../assets/beetroot.jpg";
// import bellPepper from "../../../assets/bell_pepper.jpg";
// import bitterGourd from "../../../assets/bitter_gourd.jpg";
// import bougainvillea from "../../../assets/bougainvillea.jpg";
// import cabbage from "../../../assets/cabbage.jpg";
// import brinjal from "../../../assets/brinjal.jpg";
// import carrot from "../../../assets/carrot.jpg";
// import cashew from "../../../assets/cashew.jpg";
// import chickpeas from "../../../assets/chickpeas.jpg";
// import cinnamon from "../../../assets/cinnamon.jpg";
// import coconut from "../../../assets/coconut.jpg";
// import coriander from "../../../assets/coriander.jpg";
// import cucumber from "../../../assets/cucumber.jpg";
// import curryLeaves from "../../../assets/curry_leaves.jpg";
// import drumstick from "../../../assets/drumstick.jpg";
// import fennel from "../../../assets/fennel.jpg";
// import fenugreek from "../../../assets/fenugreek.jpg";
// import garlic from "../../../assets/garlic.jpg";
// import ginger from "../../../assets/ginger.jpg";
// import grapes from "../../../assets/grapes.jpg";
// import greenChili from "../../../assets/green_chili.jpg";
// import greenPeas from "../../../assets/green_peas.jpg";
// import groundnut from "../../../assets/groundnut.jpg";
// import hibiscus from "../../../assets/hibiscus.jpg";
// import ivyGourd from "../../../assets/ivy_gourd.jpg";

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
  // {
  //   id: 6,
  //   name: 'Barley',
  //   image: barley,
  //   growingTechnique: 'Grows well in cool, moist climates.',
  //   diseases: 'Barley yellow dwarf, Net blotch.',
  //   benefits: 'Rich in fiber and nutrients.',
  //   climate: 'Temperate climates with cool summers.',
  //   watering: 'Water moderately during dry spells.',
  //   soil: 'Well-drained sandy loam.',
  //   fertilizer: 'Apply nitrogen fertilizer at sowing.',
  //   pestControl: 'Use crop rotation and resistant varieties.',
  //   harvesting: 'Harvest when grains are firm and golden brown.',
  // },
  // {
  //   id: 7,
  //   name: 'Beetroot',
  //   image: beetroot,
  //   growingTechnique: 'Plant in loose, well-drained soil with plenty of sunlight.',
  //   diseases: 'Leaf spot, Cavity spot.',
  //   benefits: 'High in vitamins and antioxidants.',
  //   climate: 'Cool-season crop; grows well in moderate climates.',
  //   watering: 'Water regularly to maintain moisture.',
  //   soil: 'Loamy soil with good drainage.',
  //   fertilizer: 'Use balanced fertilizer to promote growth.',
  //   pestControl: 'Use organic methods to control pests.',
  //   harvesting: 'Harvest when roots are firm and well-sized.',
  // },
  // {
  //   id: 8,
  //   name: 'Bell Pepper',
  //   image: bellPepper,
  //   growingTechnique: 'Requires warm temperatures and plenty of sunlight.',
  //   diseases: 'Blossom end rot, Powdery mildew.',
  //   benefits: 'Rich in vitamins A and C.',
  //   climate: 'Warm, sunny climates for optimal growth.',
  //   watering: 'Water regularly, especially during dry periods.',
  //   soil: 'Fertile, well-drained soil with organic matter.',
  //   fertilizer: 'Use balanced fertilizer during the growing season.',
  //   pestControl: 'Monitor for aphids and whiteflies; use insecticidal soap if necessary.',
  //   harvesting: 'Harvest when fruits are firm and fully colored.',
  // },
  // {
  //   id: 9,
  //   name: 'Bitter Gourd',
  //   image: bitterGourd,
  //   growingTechnique: 'Needs warm temperatures and well-drained soil.',
  //   diseases: 'Powdery mildew, Bacterial wilt.',
  //   benefits: 'High in vitamins and antioxidants; helps regulate blood sugar.',
  //   climate: 'Tropical and subtropical climates.',
  //   watering: 'Keep soil consistently moist but not waterlogged.',
  //   soil: 'Well-drained sandy or loamy soil.',
  //   fertilizer: 'Use balanced fertilizer rich in potassium.',
  //   pestControl: 'Use neem oil and traps for pests.',
  //   harvesting: 'Harvest when fruits are small and green.',
  // },
  // {
  //   id: 10,
  //   name: 'Bougainvillea',
  //   image: bougainvillea,
  //   growingTechnique: 'Thrives in well-drained soil and full sun.',
  //   diseases: 'Bougainvillea leaf spot, Root rot.',
  //   benefits: 'Beautiful ornamental plant; attracts pollinators.',
  //   climate: 'Tropical and subtropical climates.',
  //   watering: 'Water deeply but infrequently.',
  //   soil: 'Well-drained sandy or loamy soil.',
  //   fertilizer: 'Use a balanced fertilizer to promote blooming.',
  //   pestControl: 'Monitor for pests like aphids and spider mites.',
  //   harvesting: 'Prune for shape and to promote blooming.',
  // },
  // {
  //   id: 11,
  //   name: 'Brassica (Cabbage)',
  //   image: cabbage,
  //   growingTechnique: 'Prefers cool weather and well-drained soil.',
  //   diseases: 'Cabbage worms, Downy mildew.',
  //   benefits: 'Rich in vitamins C and K.',
  //   climate: 'Cool-season crop; thrives in moderate temperatures.',
  //   watering: 'Water regularly to keep soil moist.',
  //   soil: 'Loamy, rich soil with good drainage.',
  //   fertilizer: 'Use nitrogen-rich fertilizer during growth.',
  //   pestControl: 'Use row covers to deter pests.',
  //   harvesting: 'Harvest when heads are firm and dense.',
  // },
  // {
  //   id: 12,
  //   name: 'Brinjal (Eggplant)',
  //   image: brinjal,
  //   growingTechnique: 'Needs warm temperatures and plenty of sunlight.',
  //   diseases: 'Fusarium wilt, Aphids.',
  //   benefits: 'Low in calories, high in fiber.',
  //   climate: 'Warm, sunny climates for optimal growth.',
  //   watering: 'Water regularly, especially during dry spells.',
  //   soil: 'Fertile, well-drained soil with organic matter.',
  //   fertilizer: 'Use balanced fertilizer during the growing season.',
  //   pestControl: 'Monitor for pests and use organic insecticides as needed.',
  //   harvesting: 'Harvest when fruits are glossy and firm.',
  // },
  // {
  //   id: 13,
  //   name: 'Carrot',
  //   image: carrot,
  //   growingTechnique: 'Requires loose, well-drained soil and full sun.',
  //   diseases: 'Carrot rust fly, Leaf blight.',
  //   benefits: 'Rich in beta-carotene and antioxidants.',
  //   climate: 'Cool-season crop; grows well in moderate climates.',
  //   watering: 'Water regularly to maintain moisture.',
  //   soil: 'Well-drained sandy or loamy soil.',
  //   fertilizer: 'Use low-nitrogen fertilizer to promote root growth.',
  //   pestControl: 'Use floating row covers to deter pests.',
  //   harvesting: 'Harvest when roots are firm and vibrant in color.',
  // },
  // {
  //   id: 14,
  //   name: 'Cashew',
  //   image: cashew,
  //   growingTechnique: 'Needs well-drained soil and full sun.',
  //   diseases: 'Anthracnose, Root rot.',
  //   benefits: 'Nutrient-rich nuts and fruit.',
  //   climate: 'Tropical and subtropical climates.',
  //   watering: 'Water regularly, especially during dry spells.',
  //   soil: 'Well-drained sandy or loamy soil.',
  //   fertilizer: 'Use balanced fertilizer during growth.',
  //   pestControl: 'Monitor for pests like weevils and treat as needed.',
  //   harvesting: 'Harvest when cashew apples are ripe and nuts are mature.',
  // },
  // {
  //   id: 15,
  //   name: 'Chickpeas',
  //   image: chickpeas,
  //   growingTechnique: 'Requires well-drained soil and full sun.',
  //   diseases: 'Ascochyta blight, Root rot.',
  //   benefits: 'High in protein and fiber.',
  //   climate: 'Warm climates; grows well in dry conditions.',
  //   watering: 'Water moderately; avoid waterlogging.',
  //   soil: 'Sandy or loamy soil with good drainage.',
  //   fertilizer: 'Use low-nitrogen fertilizer to promote growth.',
  //   pestControl: 'Use crop rotation to manage pests.',
  //   harvesting: 'Harvest when pods are dry and firm.',
  // },
  // {
  //   id: 16,
  //   name: 'Cinnamon',
  //   image: cinnamon,
  //   growingTechnique: 'Requires warm, humid conditions and rich soil.',
  //   diseases: 'Leaf spot, Root rot.',
  //   benefits: 'Rich in antioxidants and anti-inflammatory properties.',
  //   climate: 'Tropical climates.',
  //   watering: 'Keep soil consistently moist but not waterlogged.',
  //   soil: 'Fertile, well-drained soil rich in organic matter.',
  //   fertilizer: 'Use balanced fertilizer to promote growth.',
  //   pestControl: 'Monitor for pests and use organic methods as needed.',
  //   harvesting: 'Harvest bark when trees are about two years old.',
  // },
  // {
  //   id: 17,
  //   name: 'Coconut',
  //   image: coconut,
  //   growingTechnique: 'Thrives in sandy, well-drained soil and full sun.',
  //   diseases: 'Coconut leaf blight, Root rot.',
  //   benefits: 'Rich in healthy fats and electrolytes.',
  //   climate: 'Tropical climates.',
  //   watering: 'Water regularly, especially in dry seasons.',
  //   soil: 'Sandy, well-drained soil.',
  //   fertilizer: 'Use balanced fertilizer with micronutrients.',
  //   pestControl: 'Monitor for pests like coconut weevils.',
  //   harvesting: 'Harvest when coconuts are mature and brown.',
  // },
  // {
  //   id: 18,
  //   name: 'Coriander (Dhania)',
  //   image: coriander,
  //   growingTechnique: 'Needs well-drained soil and full sun.',
  //   diseases: 'Cilantro leaf spot, Aphids.',
  //   benefits: 'Rich in vitamins and minerals; used as an herb.',
  //   climate: 'Cool-season crop; grows well in moderate climates.',
  //   watering: 'Water regularly to keep soil moist.',
  //   soil: 'Loamy, well-drained soil.',
  //   fertilizer: 'Use balanced fertilizer during growth.',
  //   pestControl: 'Use organic pesticides for pest management.',
  //   harvesting: 'Harvest when leaves are vibrant and full-sized.',
  // },
  // {
  //   id: 19,
  //   name: 'Cucumber',
  //   image: cucumber,
  //   growingTechnique: 'Needs warm temperatures and plenty of sunlight.',
  //   diseases: 'Powdery mildew, Cucumber beetles.',
  //   benefits: 'Low in calories, high in hydration.',
  //   climate: 'Warm, sunny climates for optimal growth.',
  //   watering: 'Water regularly, especially during dry periods.',
  //   soil: 'Fertile, well-drained soil with organic matter.',
  //   fertilizer: 'Use balanced fertilizer during the growing season.',
  //   pestControl: 'Monitor for pests and use organic insecticides as needed.',
  //   harvesting: 'Harvest when cucumbers are firm and before they turn yellow.',
  // },
  // {
  //   id: 20,
  //   name: 'Curry Leaves',
  //   image: curryLeaves,
  //   growingTechnique: 'Requires well-drained soil and full sun.',
  //   diseases: 'Leaf spot, Whiteflies.',
  //   benefits: 'Rich in antioxidants and vitamins; used in cooking.',
  //   climate: 'Tropical climates.',
  //   watering: 'Water regularly to keep soil moist.',
  //   soil: 'Well-drained sandy or loamy soil.',
  //   fertilizer: 'Use balanced fertilizer during growth.',
  //   pestControl: 'Monitor for pests and treat as necessary.',
  //   harvesting: 'Harvest leaves when mature and vibrant.',
  // },
  // {
  //   id: 21,
  //   name: 'Drumstick (Moringa)',
  //   image: drumstick,
  //   growingTechnique: 'Needs well-drained soil and full sun.',
  //   diseases: 'Leaf spot, Root rot.',
  //   benefits: 'Highly nutritious leaves; rich in vitamins and minerals.',
  //   climate: 'Tropical and subtropical climates.',
  //   watering: 'Water regularly to keep soil moist.',
  //   soil: 'Well-drained sandy or loamy soil.',
  //   fertilizer: 'Use balanced fertilizer to promote growth.',
  //   pestControl: 'Monitor for pests and use organic methods as needed.',
  //   harvesting: 'Harvest leaves when young and tender.',
  // },
  // {
  //   id: 22,
  //   name: 'Fennel',
  //   image: fennel,
  //   growingTechnique: 'Prefers well-drained soil and full sun.',
  //   diseases: 'Fennel aphid, Root rot.',
  //   benefits: 'High in fiber and antioxidants; used in cooking.',
  //   climate: 'Cool-season crop; grows well in moderate climates.',
  //   watering: 'Water regularly to keep soil moist.',
  //   soil: 'Loamy, well-drained soil.',
  //   fertilizer: 'Use balanced fertilizer during growth.',
  //   pestControl: 'Monitor for pests and treat as necessary.',
  //   harvesting: 'Harvest when bulbs are firm and well-developed.',
  // },
  // {
  //   id: 23,
  //   name: 'Fenugreek (Methi)',
  //   image: fenugreek,
  //   growingTechnique: 'Needs well-drained soil and full sun.',
  //   diseases: 'Leaf spot, Root rot.',
  //   benefits: 'Rich in iron and vitamins; used as a herb.',
  //   climate: 'Warm climates.',
  //   watering: 'Water moderately; avoid waterlogging.',
  //   soil: 'Sandy or loamy soil with good drainage.',
  //   fertilizer: 'Use low-nitrogen fertilizer to promote growth.',
  //   pestControl: 'Use organic methods to control pests.',
  //   harvesting: 'Harvest when leaves are vibrant and full-sized.',
  // },
  // {
  //   id: 24,
  //   name: 'Garlic',
  //   image: garlic,
  //   growingTechnique: 'Needs well-drained soil and full sun.',
  //   diseases: 'White rot, Downy mildew.',
  //   benefits: 'Rich in allicin and antioxidants; boosts immunity.',
  //   climate: 'Temperate climates; prefers cool weather.',
  //   watering: 'Water regularly, especially during dry spells.',
  //   soil: 'Loamy, well-drained soil rich in organic matter.',
  //   fertilizer: 'Use balanced fertilizer during growth.',
  //   pestControl: 'Monitor for pests and use organic methods as needed.',
  //   harvesting: 'Harvest when leaves start to yellow and die back.',
  // },
  // {
  //   id: 25,
  //   name: 'Ginger',
  //   image: ginger,
  //   growingTechnique: 'Needs warm temperatures and rich, well-drained soil.',
  //   diseases: 'Rhizome rot, Leaf spot.',
  //   benefits: 'Rich in antioxidants and anti-inflammatory properties.',
  //   climate: 'Tropical and subtropical climates.',
  //   watering: 'Keep soil consistently moist but not waterlogged.',
  //   soil: 'Well-drained sandy or loamy soil.',
  //   fertilizer: 'Use balanced fertilizer during growth.',
  //   pestControl: 'Monitor for pests and treat as necessary.',
  //   harvesting: 'Harvest when rhizomes are mature and firm.',
  // },
  // {
  //   id: 26,
  //   name: 'Grapes',
  //   image: grapes,
  //   growingTechnique: 'Needs well-drained soil and full sun.',
  //   diseases: 'Powdery mildew, Downy mildew.',
  //   benefits: 'Rich in vitamins and antioxidants; used for wine production.',
  //   climate: 'Warm climates; prefers sunny areas.',
  //   watering: 'Water regularly, especially during dry spells.',
  //   soil: 'Loamy, well-drained soil rich in organic matter.',
  //   fertilizer: 'Use balanced fertilizer during growth.',
  //   pestControl: 'Monitor for pests and treat as necessary.',
  //   harvesting: 'Harvest when grapes are plump and sweet.',
  // },
  // {
  //   id: 27,
  //   name: 'Green Chili',
  //   image: greenChili,
  //   growingTechnique: 'Needs warm temperatures and plenty of sunlight.',
  //   diseases: 'Aphids, Spider mites.',
  //   benefits: 'Rich in vitamins and adds spice to dishes.',
  //   climate: 'Warm, sunny climates for optimal growth.',
  //   watering: 'Water regularly to maintain moisture.',
  //   soil: 'Well-drained sandy or loamy soil.',
  //   fertilizer: 'Use balanced fertilizer during growth.',
  //   pestControl: 'Monitor for pests and use organic insecticides as needed.',
  //   harvesting: 'Harvest when fruits are firm and vibrant.',
  // },
  // {
  //   id: 28,
  //   name: 'Green Peas',
  //   image: greenPeas,
  //   growingTechnique: 'Requires well-drained soil and full sun.',
  //   diseases: 'Powdery mildew, Root rot.',
  //   benefits: 'High in protein and vitamins; used in cooking.',
  //   climate: 'Cool-season crop; grows well in moderate climates.',
  //   watering: 'Water regularly to keep soil moist.',
  //   soil: 'Loamy, well-drained soil.',
  //   fertilizer: 'Use low-nitrogen fertilizer to promote growth.',
  //   pestControl: 'Use crop rotation to manage pests.',
  //   harvesting: 'Harvest when pods are firm and peas are plump.',
  // },
  // {
  //   id: 29,
  //   name: 'Groundnut (Peanut)',
  //   image: groundnut,
  //   growingTechnique: 'Needs warm temperatures and well-drained soil.',
  //   diseases: 'Aflatoxin, Root rot.',
  //   benefits: 'Rich in protein and healthy fats.',
  //   climate: 'Warm, sunny climates for optimal growth.',
  //   watering: 'Water moderately to keep soil moist.',
  //   soil: 'Well-drained sandy or loamy soil.',
  //   fertilizer: 'Use low-nitrogen fertilizer to promote growth.',
  //   pestControl: 'Use crop rotation to manage pests.',
  //   harvesting: 'Harvest when pods are mature and dry.',
  // },
  // {
  //   id: 30,
  //   name: 'Hibiscus',
  //   image: hibiscus,
  //   growingTechnique: 'Requires well-drained soil and full sun.',
  //   diseases: 'Leaf spot, Aphids.',
  //   benefits: 'Rich in antioxidants; used in beverages and cooking.',
  //   climate: 'Warm, sunny climates for optimal growth.',
  //   watering: 'Water regularly to keep soil moist.',
  //   soil: 'Loamy, well-drained soil.',
  //   fertilizer: 'Use balanced fertilizer during growth.',
  //   pestControl: 'Monitor for pests and treat as necessary.',
  //   harvesting: 'Harvest flowers when they are vibrant and fully open.',
  // },
  // {
  //   id: 31,
  //   name: 'Ivy Gourd',
  //   image: ivyGourd,
  //   growingTechnique: 'Needs warm temperatures and well-drained soil.',
  //   diseases: 'Powdery mildew, Aphids.',
  //   benefits: 'Rich in vitamins; used in salads and cooking.',
  //   climate: 'Tropical and subtropical climates.',
  //   watering: 'Water regularly to keep soil moist.',
  //   soil: 'Well-drained sandy or loamy soil.',
  //   fertilizer: 'Use balanced fertilizer during growth.',
  //   pestControl: 'Monitor for pests and treat as necessary.',
  //   harvesting: 'Harvest when fruits are firm and green.',
  // },
  // Add more crops as needed
];

const AllCrops = () => {
  const [show, setShow] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (crop) => {
    setSelectedCrop(crop);
    setShow(true);
  };

  return (
    <div className="container">
      <h1 className="text-center my-5 display-4 stylish-heading">All Crops</h1>
      <Row>
        {cropsData.map((crop) => (
          <Col md={4} key={crop.id} className="mb-4">
            <Card className="shadow border-0 rounded crop-card">
              <Card.Img
                variant="top"
                src={crop.image}
                className="crop-image"
              />
              <Card.Body>
                <Card.Title className="font-weight-bold">{crop.name}</Card.Title>
                <Button 
                  variant="primary" 
                  onClick={() => handleShow(crop)} 
                  className="mt-3" 
                  aria-label={`View details for ${crop.name}`}
                >
                  View Details
                </Button>
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
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
     
      <style>{`
        .container {
          background-color: #f8f9fa; /* Light background for better contrast */
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }

        .stylish-heading {
          font-family: 'Georgia', serif; /* Stylish font */
          font-weight: bold;
          color: #2c3e50; /* Darker color for better contrast */
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); /* Subtle text shadow */
        }

        .crop-card {
          transition: transform 0.2s; /* Smooth hover effect */
          border-radius: 10px; /* Round card corners */
        }

        .crop-card:hover {
          transform: scale(1.05); /* Slightly enlarge the card on hover */
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Card shadow on hover */
        }

        .crop-image {
          height: 300px; /* Adjusted height for better proportion */
          object-fit: cover; /* Maintain aspect ratio */
          border-radius: 10px 10px 0 0; /* Round top corners */
        }

        .modal-header {
          background-color: #007bff; /* Bootstrap primary color */
          color: white;
          border-bottom: 2px solid #0056b3; /* Bottom border for distinction */
        }

        .modal-title {
          font-size: 1.75rem; /* Adjust title size in modal */
        }

        h5 {
          font-weight: bold; /* Bold headings for clarity */
          color: #333; /* Darker color for readability */
        }

        p {
          color: #555; /* Grey text for better contrast */
        }

        @media (max-width: 768px) {
          .crop-image {
            height: 200px; /* Smaller image height for mobile */
          }

          .modal-title {
            font-size: 1.5rem; /* Smaller title size on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default AllCrops;
