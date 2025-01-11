import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

// Importing layouts for company representative
import AdminLayout from "./layoutsgescompany/Admingescompany.js";
import AuthLayout from "./layoutsgescompany/Authgescompany.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admingescompany/*" element={<AdminLayout />} />
      <Route path="/authgescompany/*" element={<AuthLayout />} />
      <Route path="*" element={<Navigate to="/admingescompany/indexgescompany" replace />} />
    </Routes>
  </BrowserRouter>
);
