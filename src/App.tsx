import React, { FC, memo, useState } from "react";

import "./App.scss";

import { Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";

const App: FC = memo(() => {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = (): void => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <NavBar navToggle={navToggle} setNavToggle={setNavToggle} />
      </div>
      <div className="nav-btn" onClick={navClick} role="presentation">
        <div className="lines-1" />
        <div className="lines-2" />
        <div className="lines-3" />
      </div>
      <div className="main-content">
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
});

export default App;
