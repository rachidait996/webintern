
import Indexgescompany from "./viewsgescompany/indexgescompany.js";
import Profile from "./viewsgescompany/examples/Profile.js";


import ManageInternshipOffers from "./viewsgescompany/examples/ManageInternshipOffers.js";
import ManageReceivedApplications from "./viewsgescompany/examples/ManageReceivedApplications.js";


var routesgescompany = [
  {
    path: "/indexgescompany",
    name: "Offres de dtage",
    icon: "ni ni-align-center text-blue",
    component: <Indexgescompany />,
    layout: "/admingescompany",
  },

  {
    path: "/ManageInternshipOffers",
    name: "Gestion des offres",
    icon: "ni ni-folder-17 text-red",
    component: <ManageInternshipOffers />,
    layout: "/admingescompany",
  },
  {
    path: "/ManageReceivedApplications",
    name: "Gestionn des applications",
    icon: "ni ni-cloud-download-95",
    component: <ManageReceivedApplications />,
    layout: "/admingescompany",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admingescompany",
  },

];
export default routesgescompany;
