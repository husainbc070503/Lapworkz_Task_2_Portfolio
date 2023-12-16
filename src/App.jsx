import { ThemeProvider, createTheme } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: { main: "#31304D" },
      secondary: { main: "#FF5B22" },
    },
    typography: {
      fontFamily: "Poltawski Nowy",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      <ScrollTop />
    </ThemeProvider>
  );
};

export default App;
