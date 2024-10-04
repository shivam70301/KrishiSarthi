import React, { useState, useEffect } from "react";

const cropData = [
  {
    name: "Onion Big",
    wholesale: 46,
    retail: "53 - 58",
    mall: "55 - 76",
    unit: "1kg",
    img: "https://via.placeholder.com/50", // Replace with the actual URL for Onion Big image
  },
  {
    name: "Onion Small",
    wholesale: 50,
    retail: "58 - 64",
    mall: "60 - 83",
    unit: "1kg",
    img: "https://via.placeholder.com/50", // Replace with the actual URL for Onion Small image
  },
  {
    name: "Tomato",
    wholesale: 36,
    retail: "41 - 46",
    mall: "43 - 59",
    unit: "1kg",
    img: "https://via.placeholder.com/50", // Replace with the actual URL for Tomato image
  },
  {
    name: "Green Chilli",
    wholesale: 47,
    retail: "54 - 60",
    mall: "56 - 78",
    unit: "1kg",
    img: "https://via.placeholder.com/50", // Replace with the actual URL for Green Chilli image
  },
  // Add more crops as needed...
];

const CropPrices = () => {
  // Get today's date in the format YYYY-MM-DD
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [visibleCount, setVisibleCount] = useState(5);
  const [showAll, setShowAll] = useState(false);
  const [selectedDate, setSelectedDate] = useState(getTodayDate); // Default to today's date

  const handleViewMore = () => {
    if (showAll) {
      setVisibleCount(5); // Reset to the initial number when "View Less" is clicked
    } else {
      setVisibleCount(cropData.length); // Show all crops when "View More" is clicked
    }
    setShowAll(!showAll); // Toggle the button text
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Market Prices</h1>

      <div style={styles.dateSelector}>
        <label htmlFor="date" style={styles.label}>Select Date: </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          max={getTodayDate()} // Restrict to today's date or earlier
          style={styles.dateInput}
        />
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Crop</th>
            <th style={styles.th}>Wholesale Price</th>
            <th style={styles.th}>Retail Price</th>
            <th style={styles.th}>Shopping Mall</th>
            <th style={styles.th}>Units</th>
          </tr>
        </thead>
        <tbody>
          {cropData.slice(0, visibleCount).map((crop, index) => (
            <tr key={index} style={styles.row}>
              <td style={styles.td}>
                <div style={styles.cropCell}>
                  <img src={crop.img} alt={crop.name} style={styles.cropImage} />
                  <span>{crop.name}</span>
                </div>
              </td>
              <td style={styles.td}>₹{crop.wholesale}</td>
              <td style={styles.td}>₹{crop.retail}</td>
              <td style={styles.td}>₹{crop.mall}</td>
              <td style={styles.td}>{crop.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleViewMore}
        style={showAll ? styles.viewLessBtn : styles.viewMoreBtn}
      >
        {showAll ? "View Less" : "View More"}
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "4rem",
    marginBottom: "30px",
    color: "#fff",
    backgroundColor: "#28a745",
    padding: "20px",
    borderRadius: "20px",
    display: "inline-block",
    animation: "fadeIn 1s",
    width: "80%",
    maxWidth: "800px",
  },
  dateSelector: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "1.2rem",
    marginRight: "10px",
  },
  dateInput: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
    transition: "border-color 0.3s ease",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    fontSize: "1rem",
  },
  th: {
    backgroundColor: "#C1E899",
    color: "#333",
    padding: "10px",
    textAlign: "center",
    fontWeight: "bold",
    border: "2px solid #333",
  },
  td: {
    border: "2px solid #333",
    padding: "10px",
    textAlign: "center",
    transition: "background-color 0.3s ease",
    fontWeight: "bold",
    wordWrap: "break-word",
  },
  row: {
    transition: "background-color 0.3s",
  },
  cropCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
  },
  cropImage: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
    flexShrink: 0,
  },
  viewMoreBtn: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  viewLessBtn: {
    padding: "10px 20px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  
  "@media (max-width: 600px)": {
    td: {
      display: "block",
      width: "100%",
      textAlign: "left",
    },
    th: {
      display: "none",
    },
    cropCell: {
      display: "block",
      textAlign: "center",
    },
    cropImage: {
      margin: "0 auto 10px",
    },
  },
};

export default CropPrices;
