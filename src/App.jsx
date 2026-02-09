
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='dark:bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Hero theme={theme} />
        </div>
        <About theme={theme} />
        <Experience theme={theme} />
        <Tech theme={theme} />
        <Works theme={theme} />
        <div className='relative z-0'>
          <Contact theme={theme} />
          {theme === "dark" && <StarsCanvas />}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
