/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "Mejorar a Pro",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Mi perfil",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Buscar",
    icon: "nc-icon nc-zoom-split",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Mis ordenes",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Recomendados",
    icon: "nc-icon nc-bulb-63",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Mi carrito",
    icon: "nc-icon nc-cart-simple",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Anunciarme",
    icon: "nc-icon nc-notification-70",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
