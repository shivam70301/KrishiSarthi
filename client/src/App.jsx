import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import All_Crops from "./components/Navbar/Pages/All_Crops";
import Soil_Information from "./components/Navbar/Pages/Soil_Information";
import Crop_Recommendation from "./components/Navbar/Pages/Crop_Recommendation";
import K_Gyan from "./components/Navbar/Pages/K_Gyan";
import Policies from "./components/Navbar/Pages/Policies";
import Pesticides from "./components/Navbar/Pages/Pesticides";
import Fair_Events from "./components/Navbar/Pages/Fair_Events";
import Watchlist from "./components/Navbar/Pages/Watchlist";
import Notification from "./components/Navbar/Pages/Notification";
import Profile from "./components/Navbar/Pages/Profile";
import GoogleTranslate from "./components/Navbar/GoogleTranslate";
import Lower_Navbar from "./components/Navbar/LowerNavbar";
import NavigationBar from "./components/Navbar/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <BrowserRouter>
    <NavigationBar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/All_Crops" element={<All_Crops />} />
        <Route path="/Soil_Information" element={<Soil_Information />} />
        <Route path="/Crop_Recommendation" element={<Crop_Recommendation />} />
        <Route path="/K_Gyan" element={<K_Gyan />} />
        <Route path="/Policies" element={<Policies />} />
        <Route path="/Pesticides" element={<Pesticides />} />
        <Route path="/Fair_Events" element={<Fair_Events />} />
        <Route path="/Watchlist" element={<Watchlist />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <GoogleTranslate />
    </BrowserRouter>
  );
}

export default App;
