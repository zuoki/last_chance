import React from "react";
import { Routes, Route } from "react-router-dom";
import {LandingPage} from "./components/LandingPage/landingPage";
import {FormPage} from './Components/FormPage/FormPage';
import {Home} from './Components/HomePage/Home'
import Card from "./Components/Card/Card";
import DetailPage from "./Components/DetailPage/detail";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/FormPage" element={<FormPage />} />
      <Route path="/Card" element={<Card />} />
      <Route path="/DetailPage/:id" element={<DetailPage />} />
    </Routes>
    </>
  );
}

export default App;
