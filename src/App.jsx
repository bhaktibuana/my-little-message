import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.scss";
import HomePage from "./pages/homePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
