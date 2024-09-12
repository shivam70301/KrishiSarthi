import React from "react";
import NavigationBar from "./components/Navbar/NavigationBar";
import LowerNavbar from "./components/Navbar/LowerNavbar";
import CropPrices from "./components/Body/CropPrices";
import MarketInsights from './components/Body/MarketInsights'
function App() {
  return (
    <div>
      <NavigationBar />
      <LowerNavbar />
      <MarketInsights/>
      <CropPrices />
    </div>
  );
}

export default App;
