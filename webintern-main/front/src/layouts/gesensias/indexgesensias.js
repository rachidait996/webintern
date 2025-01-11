
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import Admingesensias from "layoutsgesensias/Admingesensias.js";
import Authgesensias from "layoutsgesensias/Authgesensias.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admingesensias/*" element={<Admingesensias />} />
      <Route path="/authgesensias/*" element={<Authgesensias />} />
      <Route path="*" element={<Navigate to="/admingesensias/indexgesensias" replace />} />
    </Routes>
  </BrowserRouter>
);
