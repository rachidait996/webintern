
import Indexstu from "./viewsstu/indexstu.js";
import Profile from "./viewsstu/examples/Profile.js";

import ApplicationsPage from "./viewsstu/examples/ApplicationsPage.js";
import AcceptedApplicationsPage from "./viewsstu/examples/AcceptedApplicationsPage.js";

var routesstu = [
  {
    path: "/indexstu",
    name: "Internship Details",
    icon: "ni ni-tv-2 text-primary",
    component: <Indexstu />,
    layout: "/adminstu",
  },
  
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/adminstu",
  },
  
  {
    path: "/ApplicationsPage",
    name: "ApplicationsPage",
    icon: "ni ni-bullet-list-67 text-red",
    component: <ApplicationsPage />,
    layout: "/adminstu",
  },
  
  {
    path: "/AcceptedApplicationsPage",
    name: "AcceptedApplicationsPage",
    icon: "ni ni-bullet-list-67 text-red",
    component: <AcceptedApplicationsPage />,
    layout: "/adminstu",
  },
];
export default routesstu;
