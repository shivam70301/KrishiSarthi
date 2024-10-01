import React, { useState } from "react";
import wheat from "../../assets/wheat.png";
import rice from "../../assets/rice.png";
import corn from "../../assets/corn.png";
import sugarcane from "../../assets/sugarcane.png";
import potato from "../../assets/potato.png";
import brinjal from "../../assets/brinjal.png";
import onion from "../../assets/onion.png";
import tomato from "../../assets/tomato.png";
import carrot from "../../assets/carrot.png";

function CropPrices() {
  const [cropPrices, setCropPrices] = useState({
    wheat: { price: 40, previousPrice: 25, image: wheat },
    rice: { price: 18, previousPrice: 20, image: rice },
    corn: { price: 22, previousPrice: 21, image: corn },
    sugarcane: { price: 25, previousPrice: 20, image: sugarcane },
    potato: { price: 19, previousPrice: 18, image: potato },
    brinjal: { price: 21, previousPrice: 19, image: brinjal },
    onion: { price: 23, previousPrice: 20, image: onion },
    tomato: { price: 17, previousPrice: 16, image: tomato },
    carrot: { price: 26, previousPrice: 24, image: carrot },
  });

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  // Function to calculate price change based on previous and current prices
  const calculatePriceChanges = () => {
    const updatedPrices = { ...cropPrices };

    Object.keys(updatedPrices).forEach((crop) => {
      const currentPrice = updatedPrices[crop].price;
      const previousPrice = updatedPrices[crop].previousPrice;

      updatedPrices[crop].change = currentPrice - previousPrice; // Calculate change
    });

    setCropPrices(updatedPrices);
  };

  // Calculate price changes when the component renders
  React.useEffect(() => {
    calculatePriceChanges();
  }, []);

  return (
    <div className="crop-prices-container">
      <style>
        {`
          .crop-prices-container {
            max-width: 1200px;
            margin: 40px auto;
            padding: 20px;
            background: linear-gradient(135deg, #a8d5ba 0%, #e2f3e3 100%); /* Agriculture-themed gradient */
            border-radius: 10px;
            animation: fadeIn 0.5s ease-in-out;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
          }

          .title {
            text-align: center;
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 20px;
            color: #333;
            animation: fadeInDown 0.5s ease-in-out;
          }

          .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .crop-card {
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            opacity: 0;
            animation: fadeInUp 0.5s ease-in-out forwards;
          }

          .crop-card:hover {
            transform: translateY(-10px) rotate(2deg);
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
          }

          .crop-image {
            width: 150px;
            height: 150px;
            object-fit: cover;
            margin-bottom: 10px;
            transition: transform 0.3s ease;
          }

          .crop-card:hover .crop-image {
            transform: scale(1.1) rotate(5deg);
          }

          .crop-name {
            margin: 10px 0;
            font-weight: bold;
          }

          .price,
          .price-change {
            margin-bottom: 10px;
          }

          .toggle-button {
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            background-color: #4caf50;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }

          .toggle-button:hover {
            background-color: #45a049;
            transform: scale(1.05);
          }

          /* Animation keyframes */
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <h1 className="title">Crops & Vegetables Prices</h1>
      <div className="grid-container">
        {Object.keys(cropPrices)
          .slice(0, showMore ? Object.keys(cropPrices).length : 8)
          .map((crop, index) => (
            <div key={index} className="crop-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <img
                src={cropPrices[crop].image}
                alt={crop}
                className="crop-image"
              />
              <h2 className="crop-name">
                {crop.charAt(0).toUpperCase() + crop.slice(1)}
              </h2>
              <p className="price">
                <b>Price:</b> ₹{cropPrices[crop].price}/kg
              </p>
              <p className="price-change">
                <b>Change:</b>{" "}
                {cropPrices[crop].change > 0 ? "+" : "-"}
                {Math.abs(cropPrices[crop].change)}₹
              </p>
            </div>
          ))}
      </div>
      <button className="toggle-button" onClick={handleShowMore}>
        {showMore ? "Show Less" : "View All"}
      </button>
    </div>
  );
}

export default CropPrices;
