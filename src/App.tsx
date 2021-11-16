import React, { FC, memo, useState } from "react";
import "./App.scss";

import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Topbar from "./components/Topbar/Topbar";
import Works from "./components/Works/Works";

const App: FC = memo(() => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
});

export default App;
