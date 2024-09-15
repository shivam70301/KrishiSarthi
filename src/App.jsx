import React from "react";
import NavigationBar from "./components/Navbar/NavigationBar";
import LowerNavbar from "./components/Navbar/LowerNavbar";
import CropPrices from "./components/Body/CropPrices";
import MarketInsights from './components/Body/MarketInsights'
import About from "./components/Footer/About";
import WeatherForecast from "./components/Body/WeatherForecast";
function App() {
  return (
    <div>
      <NavigationBar />
      <LowerNavbar />
      <MarketInsights/>
      <WeatherForecast/>
      <CropPrices />
      <About/>
    </div>
  );
}

export default App;
