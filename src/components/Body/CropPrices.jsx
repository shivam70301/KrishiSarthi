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
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#f7f7f7",
        border: "1px solid #ddd",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Crops & Vegetables Prices
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive grid layout
          gap: "20px",
        }}
      >
        {Object.keys(cropPrices)
          .slice(0, showMore ? Object.keys(cropPrices).length : 8)
          .map((crop, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                border: "1px solid #ddd",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img
                src={cropPrices[crop].image}
                alt={crop}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
              <h2 style={{ margin: "10px 0", fontWeight: "bold" }}>
                {crop.charAt(0).toUpperCase() + crop.slice(1)}
              </h2>
              <p style={{ marginBottom: "10px" }}>
                <b>Price:</b> ₹{cropPrices[crop].price}/kg
              </p>
              <p>
                <b>Change:</b> {cropPrices[crop].change > 0 ? "+" : "-"}
                {Math.abs(cropPrices[crop].change)}₹
              </p>
            </div>
          ))}
      </div>
      {showMore ? (
        <button
          style={{
            display: "block",
            margin: "20px auto",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleShowMore}
        >
          Show Less
        </button>
      ) : (
        <button
          style={{
            display: "block",
            margin: "20px auto",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleShowMore}
        >
          View All
        </button>
      )}
    </div>
  );
}

export default CropPrices;
