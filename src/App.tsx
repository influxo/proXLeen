import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import "./App.css";
// import AboutUs from "./pages/AboutUs";
// import OurServices from "./pages/OurServices";
// import { Footer } from "./components/Footer";
// import { FaArrowUp } from "react-icons/fa";
// import Contact from "./pages/Contact";
// import SingleService from "./pages/SingleService";

const App: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/services/:slug" element={<SingleService />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router> */}

      {/* <button
        onClick={handleScrollTop}
        className="fixed bottom-4 right-4 bg-[#FF9800] text-white py-3 px-5 rounded-md hover:-translate-y-1 duration-300 hidden md:block"
      >
        <FaArrowUp />
      </button> */}
    </div>
  );
};

export default App;
