import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Layout } from "./components/Layout";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/projects" element={<Project />} />

          <Route path="/aboutme" element={<AboutMe />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
