import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import OpenerPage from "./components/OpenerPage/OpenerPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<OpenerPage />} />
        <Route path="/resume" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
