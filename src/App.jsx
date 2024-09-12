import React from "react";
import NavigationBar from "./components/Navbar/NavigationBar";
import LowerNavbar from "./components/Navbar/LowerNavbar";
import CropPrices from "./components/Body/CropPrices";
function App() {
  return (
    <div>
      <NavigationBar />
      <LowerNavbar />
      <CropPrices />
    </div>
  );
}

export default App;
