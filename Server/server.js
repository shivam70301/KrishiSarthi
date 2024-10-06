const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Define routes
app.use("/api/crops", require("./routes/CropRoutes"));
// Add your other routes as needed
app.use("/api/AllCrops", require("./routes/AllCropsRoutes"));
app.use("/api/K_Gyan", require("./routes/K_GyanRoutes"));
app.use("/api/Policies", require("./routes/PoliciesRoutes"));
app.use("/api/Pesticides", require("./routes/PesticidesRoutes"));
app.use("/api/Fair_Events", require("./routes/Fair_EventsRoutes"));
app.use("/api/Notifications", require("./routes/NotificationsRoutes"));
app.use("/api/Feedback", require("./routes/FeedbackRoutes"));

// Define the port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`.bgGreen.white);
});
