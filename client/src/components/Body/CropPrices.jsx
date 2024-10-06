import React, { useState, useEffect } from "react";
import axios from "axios";

const CropPrices = () => {
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [crops, setCrops] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [showAll, setShowAll] = useState(false);
  const [selectedDate, setSelectedDate] = useState(getTodayDate());

  // Fetch crops based on the selected date
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/crops/scrape/${selectedDate}`);
        console.log("Response data:", res.data);
        setCrops(res.data);
      } catch (error) {
        console.error("Error fetching crop data", error);
        setCrops([]);
      }
    };
    fetchCrops();
  }, [selectedDate]);

  const handleViewMore = () => {
    setVisibleCount(showAll ? 5 : crops.length);
    setShowAll(!showAll);
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
          max={getTodayDate()}
          style={styles.dateInput}
        />
      </div>

      {crops.length === 0 ? (
        <p>No data available for the selected date.</p>
      ) : (
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
            {crops.slice(0, visibleCount).map((crop, index) => (
              <tr key={index} style={styles.row}>
                <td style={styles.td}>
                  <div style={styles.cropCell}>
                    <img src={crop.img || "default-image-url.jpg"} alt={crop.name} style={styles.cropImage} />
                    <span style={styles.cropText}>{crop.name}</span>
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
      )}

      <button
        onClick={handleViewMore}
        style={showAll ? styles.viewLessBtn : styles.viewMoreBtn}
      >
        {showAll ? "View Less" : "View More"}
      </button>
    </div>
  );
};

// Styles for the component
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
    backgroundColor: "white", // Set the table background color to white
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
  },
  cropCell: {
    display: "flex",
    alignItems: "center",
  },
  cropImage: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
    borderRadius: "5px",
  },
  cropText: {
    fontSize: "1.1rem",
    color: "#333",
  },
  viewMoreBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  viewLessBtn: {
    backgroundColor: "#dc3545",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CropPrices;
