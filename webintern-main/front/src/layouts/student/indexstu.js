
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import Adminstu from "layoutsstu/Adminstu.js";
import Authstu from "layoutsstu/Authstu.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/adminstu/*" element={<Adminstu />} />
      <Route path="/authstu/*" element={<Authstu />} />
      <Route path="*" element={<Navigate to="/adminstu/indexstu" replace />} />
    </Routes>
  </BrowserRouter>
);
