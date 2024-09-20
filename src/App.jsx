// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import AllCrops from "./components/Navbar/AllCrops";
// import 'bootstrap/dist/css/bootstrap.min.css';

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
