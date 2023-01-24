import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "../pages/home/Home";
import { About } from "../pages/about/About";
import { Service } from "../pages/service/Service";
import { ContactUs } from "../pages/contactUs/ContactUs";
import { Portfolio } from "../pages/portfolio/Portfolio";
import { StartProjectPage } from "../pages/startProjectPage/StartProjectPage";
import WorksPage from "../pages/works/WorksPage";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home theme={theme} />} />
          <Route path='/portfolio' element={<Portfolio theme={theme} />} />
          <Route path='/about' element={<About theme={theme} />} />
          <Route path='/services' element={<Service theme={theme} />} />
          <Route path='/contactUs' element={<ContactUs theme={theme} />} />
          <Route
            path='/startproject'
            element={<StartProjectPage theme={theme} />}
          />
          <Route path='/works' element={<WorksPage theme={theme} />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
};
