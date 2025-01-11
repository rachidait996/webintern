import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Importing styles
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

// Importing layouts
import AdminLayout from "layouts/Admin.js";
import MainPage from "layouts/MainPage.js";
import EspaceEntrepriseAuth from "layouts/auth/EspaceEntrepriseAuth.js";
import Indexgescompany from "layouts/companyRepresentative/viewsgescompany/indexgescompany.js";
import Admingescompany from "layouts/companyRepresentative/layoutsgescompany/Admingescompany";
import Adminstu from "layouts/student/layoutsstu/Adminstu";
import Indexstu from "layouts/student/viewsstu/indexstu";
import EspaceEtudiantAuth from "layouts/auth/EspaceEtudiantAuth";
import EspacegesensiasAuth from "layouts/auth/EspacegesensiasAuth";
import StudentsManagement from "layouts/gesensias/viewsgesensias/indexgesensias";
import Admingesensias from "layouts/gesensias/layoutsgesensias/Admingesensias";
import EspaceAdminAuth from "layouts/auth/EspaceaAdminAuth";
import Adminm from "layouts/adminm/layoutsm/Adminm";
import GestionnairesEnsiasManagement from "layouts/adminm/viewsm/indexm";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      {/* Main Landing Page */}
      <Route path="/" element={<MainPage />} />
      
      {/* Admin Dashboard */}
      <Route path="/admin/*" element={<AdminLayout />} />
      
      {/* Espace Entreprise */}
      <Route path="/espace-entreprise/*" element={<EspaceEntrepriseAuth />} />
      
      <Route path="/adminentreprise/*" element={<Indexgescompany />} />

      <Route path="/admingescompany/*" element={<Admingescompany />} />

      <Route path="/adminstu/*" element={<Adminstu/>} />

      <Route path="/adminetu/*" element={<Indexstu />} />
      <Route path="/espace-etudiant/*" element={<EspaceEtudiantAuth />} />
      <Route path="/espace-gestionnaire-ensias*" element={<EspacegesensiasAuth />} />
      <Route path="/indexgesensias/*" element={<StudentsManagement />} />

      <Route path="/admingesensias/*" element={<Admingesensias/>} />
      
      <Route path="/espace-admin/*" element={<EspaceAdminAuth/>} />
      <Route path="/adminm/*" element={<Adminm/>} />
      <Route path="/indexm/*" element={<GestionnairesEnsiasManagement />} />

    </Routes>
  </BrowserRouter>
);
