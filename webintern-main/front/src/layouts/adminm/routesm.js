
import GestionnairesEnsiasManagement from "./viewsm/indexm.js";
import GestionnairesEntreprisesManagement from "./viewsm/examples/GestionnairesEntreprisesManagement.js";

var routesm = [
  {
    path: "/indexm",
    name: " Comptes des gestionnaires de l'ensias ",
    icon: "ni ni-tv-2 text-primary",
    component: <GestionnairesEnsiasManagement />,
    layout: "/adminm",
  },
  {
    path: "/comp",
    name: " Comptes des gestionnaires des entreprises ",
    icon: "ni ni-tv-2 text-primary",
    component: <GestionnairesEntreprisesManagement />,
    layout: "/adminm",
  },
  
  
];
export default routesm;
