import React from "react";
import NavigationBar from "../Navbar/NavigationBar";
import CropPrices from "../Body/CropPrices";
import MarketInsights from "../Body/MarketInsights";
import About from "../Footer/About";
import WeatherForecast from "../Body/WeatherForecast";

function MainContent() {
  return (
    <div>
      
      <MarketInsights />
      <WeatherForecast />
      <CropPrices />
      <About />
    
    </div>
  );
}

export default MainContent;
