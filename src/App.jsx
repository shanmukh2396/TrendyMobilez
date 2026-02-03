// src/App.jsx
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Card from "./components/Card"; // your product list page
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";

// Import all individual product pages
import {
  VivoX200,
  VivoX200Pro,
  VivoV40Pro,
  VivoT35G,
  VivoY200e,
  VivoS19,
  OppoReno12Pro,
  OppoFindX8,
  OppoReno115G,
  OppoA3Pro,
  OppoF27ProPlus,
  OppoK12x,
  IQOO13,
  IQOONeo10,
  IQOOZ9Turbo,
  IQOO12,
  IQOONeo9Pro,
  IQOOZ9sPro,
  SamsungGalaxyS25Ultra,
  SamsungGalaxyS25,
  SamsungGalaxyA56,
  SamsungGalaxyM55,
  SamsungGalaxyF55,
  SamsungGalaxyA35,
  RealmeGT7Pro,
  Realme14ProPlus,
  RealmeNarzo80Pro,
  RealmeP3Ultra,
  Realme13Plus5G,
  RealmeC75,
} from "./components/MyProducts"; // ← file where you defined all ProductPage components

import "./styles/Bgc.css";

function App() {
  return (
    <>
      <div className="app-container">
        <NavBar />
        <Carousel />

        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Card />} /> {/* product list */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          
          {/* Individual product detail pages */}
          <Route path="/vivo-x200" element={<VivoX200 />} />
          <Route path="/vivo-x200-pro" element={<VivoX200Pro />} />
          <Route path="/vivo-v40-pro" element={<VivoV40Pro />} />
          <Route path="/vivo-t3-5g" element={<VivoT35G />} />
          <Route path="/vivo-y200e" element={<VivoY200e />} />
          <Route path="/vivo-s19" element={<VivoS19 />} />
          <Route path="/oppo-reno12-pro" element={<OppoReno12Pro />} />
          <Route path="/oppo-find-x8" element={<OppoFindX8 />} />
          <Route path="/oppo-reno11-5g" element={<OppoReno115G />} />
          <Route path="/oppo-a3-pro" element={<OppoA3Pro />} />
          <Route path="/oppo-f27-pro-plus" element={<OppoF27ProPlus />} />
          <Route path="/oppo-k12x" element={<OppoK12x />} />
          <Route path="/iqoo-13" element={<IQOO13 />} />
          <Route path="/iqoo-neo10" element={<IQOONeo10 />} />
          <Route path="/iqoo-z9-turbo" element={<IQOOZ9Turbo />} />
          <Route path="/iqoo-12" element={<IQOO12 />} />
          <Route path="/iqoo-neo9-pro" element={<IQOONeo9Pro />} />
          <Route path="/iqoo-z9s-pro" element={<IQOOZ9sPro />} />
          <Route
            path="/samsung-galaxy-s25-ultra"
            element={<SamsungGalaxyS25Ultra />}
          />
          <Route path="/samsung-galaxy-s25" element={<SamsungGalaxyS25 />} />
          <Route path="/samsung-galaxy-a56" element={<SamsungGalaxyA56 />} />
          <Route path="/samsung-galaxy-m55" element={<SamsungGalaxyM55 />} />
          <Route path="/samsung-galaxy-f55" element={<SamsungGalaxyF55 />} />
          <Route path="/samsung-galaxy-a35" element={<SamsungGalaxyA35 />} />
          <Route path="/realme-gt7-pro" element={<RealmeGT7Pro />} />
          <Route path="/realme-14-pro-plus" element={<Realme14ProPlus />} />
          <Route path="/realme-narzo-80-pro" element={<RealmeNarzo80Pro />} />
          <Route path="/realme-p3-ultra" element={<RealmeP3Ultra />} />
          <Route path="/realme-13-plus-5g" element={<Realme13Plus5G />} />
          <Route path="/realme-c75" element={<RealmeC75 />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
