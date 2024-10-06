import React, { useState, useEffect } from "react";
import axios from "axios";

const CropPrices = () => {
  const [crops, setCrops] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search input

  // Fetch crops based on today's date
  const fetchCrops = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8080/api/crops/scrape/today`); // Fetch today's data
      console.log("Response data:", res.data);
      setCrops(res.data);
    } catch (error) {
      console.error("Error fetching crop data", error);
      setCrops([]);
    }
    setLoading(false);
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchCrops();
  }, []);

  const handleViewMore = () => {
    setVisibleCount(showAll ? 5 : crops.length);
    setShowAll(!showAll);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter crops based on search term
  const filteredCrops = crops.filter(crop =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Today's Market Price</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a vegetable..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={styles.searchInput}
      />

      {loading ? (
        <p>Loading...</p>
      ) : filteredCrops.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Vegetables</th>
              <th style={styles.th}>Wholesale Price</th>
              <th style={styles.th}>Retail Price</th>
              <th style={styles.th}>Shopping Mall</th>
              <th style={styles.th}>Units</th>
            </tr>
          </thead>
          <tbody>
            {filteredCrops.slice(0, visibleCount).map((crop, index) => (
              <tr key={index} style={styles.row}>
                <td style={styles.td}><span style={styles.cropText}>{crop.name}</span></td>
                <td style={styles.td}>₹{crop.wholesale}</td>
                <td style={styles.td}>{crop.retail}</td>
                <td style={styles.td}>{crop.mall}</td>
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
      <button onClick={fetchCrops} style={styles.refreshBtn}>Refresh Data</button>
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
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    fontSize: "1rem",
    backgroundColor: "white", 
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
  cropText: {
    fontSize: "1.1rem",
    color: "#333",
  },
  viewMoreBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight:"2px",
  },
  viewLessBtn: {
    backgroundColor: "#dc3545",
    color: "#fff",
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight:"2px",
  },
  refreshBtn: {
    marginTop: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft:"2px",
  },
  searchInput: {
    width: "80%",
    maxWidth: "400px",
    padding: "10px",
    margin: "20px 0",
    border: "2px solid #333",
    borderRadius: "5px",
    fontSize: "1rem",
  }
};

export default CropPrices;
