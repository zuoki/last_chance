import React from "react";
import { Routes, Route } from "react-router-dom";
import {LandingPage} from "./components/LandingPage/landingPage";
import {FormPage} from './Components/FormPage/FormPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<FormPage />} />
    </Routes>
  );
}

export default App;
