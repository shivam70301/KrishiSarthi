import React, { useState, useEffect } from "react";
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
    wheat: { price: 20, change: 10, image: wheat },
    Rice: { price: 20, change: 10, image: rice },
    Corn: { price: 20, change: 10, image: corn },
    Sugarcane: { price: 20, change: 10, image: sugarcane },
    Potato: { price: 20, change: 10, image: potato },
    Brinjal: { price: 20, change: 10, image: brinjal },
    Onions: { price: 20, change: 10, image: onion },
    Tomato: { price: 20, change: 10, image: tomato },
    Carrot: { price: 20, change: 10, image: carrot },
  });

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#f7f7f7",
        border: "1px solid #ddd",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px", // Added rounded corners
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem", // Larger heading size
          fontWeight: "bold",
          marginBottom: "20px", // Increased spacing
          color: "#333", // Darker text color
        }}
      >
        Crops & Vegetables Prices
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {Object.keys(cropPrices)
          .slice(0, showMore ? Object.keys(cropPrices).length : 6) // Show all or first 6
          .map((crop, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                border: "1px solid #ddd",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px", // Added rounded corners
                display: "flex", // Use flexbox for layout
                alignItems: "center", // Center align items vertically
              }}
            >
              <div style={{ marginRight: "20px" }}>
                <img
                  src={cropPrices[crop].image}
                  alt={crop}
                  style={{
                    maxWidth: "170px",
                    height: "auto",
                  }}
                />
                <h2 style={{ marginTop: 0, fontWeight: "bold" }}>
                  {crop.charAt(0).toUpperCase() + crop.slice(1)}
                </h2>
              </div>
              <div>
                <p style={{ marginBottom: "10px" }}>
                  <b>Price:</b>₹{cropPrices[crop].price}/kg
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <b>Change:</b> {cropPrices[crop].change > 0 ? "+" : "-"}
                  {Math.abs(cropPrices[crop].change)}₹
                </p>
              </div>
            </div>
          ))}
      </div>
      {showMore ? ( // Show "Show Less" button when more items are visible
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