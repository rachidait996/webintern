// routes.js
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import EspaceEtudiantAuth from 'layouts/auth/EspaceEtudiantAuth';
import StudentLogin from "views/examples/StudentLogin.js";
import MainPage from "layouts/MainPage.js";
import CompanyLogin from "views/examples/CompanyLogin.js";
import Indexgescompany from "layouts/companyRepresentative/viewsgescompany/indexgescompany";
import Indexstu from "layouts/student/viewsstu/indexstu";
import StudentsManagement from "layouts/gesensias/viewsgesensias/indexgesensias";
import GestionnairesEnsiasManagement from "layouts/adminm/viewsm/indexm";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/company-login",
    name: "Company Login",
    icon: "ni ni-building text-primary",
    component: <CompanyLogin />,
    layout: "/espace-entreprise",
  },
  {
    path: "/indexgescompany",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Indexgescompany />,
    layout: "/admingescompany",
  },
  {
    path: "/indexstu",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Indexstu />,
    layout: "/adminstu",
  },
  {
    path: "/indexgensias",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <StudentsManagement />,
    layout: "/admingessias",
  },
  {
    path: "/indexm",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <GestionnairesEnsiasManagement />,
    layout: "/adminm",
  }
];

export default routes;