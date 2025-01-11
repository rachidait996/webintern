// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage"; // Import MainPage component
import CompanyLogin from "./CompanyLogin"; // Import CompanyLogin component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/espace-entreprise" element={<CompanyLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
