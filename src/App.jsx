// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import AllCrops from "./components/Navbar/AllCrops";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/crops" element={<AllCrops />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
