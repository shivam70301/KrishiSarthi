import React from "react";
import NavigationBar from "../Navbar/NavigationBar";
import LowerNavbar from "../Navbar/LowerNavbar";
import CropPrices from "../Body/CropPrices";
import MarketInsights from "../Body/MarketInsights";
import About from "../Footer/About";
import WeatherForecast from "../Body/WeatherForecast";
import ChatBot from "../ChatBot/ChatBot";

function MainContent() {
  return (
    <div>
      
      <MarketInsights />
      <WeatherForecast />
      <CropPrices />
      <About />
      <ChatBot />
    </div>
  );
}

export default MainContent;
