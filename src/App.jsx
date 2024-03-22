import React from "react";
import "./App.css";
import Starto from "./Starto";
import Group from "./Group";
import Engineering from "./Engineering";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Group />} />
        <Route path="stratolift" element={<Starto />} />
        <Route path="stablearc-engineering" element={<Engineering />} />
        {/* <Route path="faqs" element={<Faqs />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
