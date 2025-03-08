import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import TopLine from "./components/TopLine";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <TopLine />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
