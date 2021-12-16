import React from "react";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import Cv from "./Cv";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Hello />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
