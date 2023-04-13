import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Container/Home";
import Footer from "./Pages/Footer/Footer";
// import Smooth from "./Components/Smmoth/Smooth";
// import Home from "./Pages/Conatiner/Home";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Smooth /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/link" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
