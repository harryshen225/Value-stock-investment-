
import Buttons from "./views/components/Buttons.jsx";
import Charts from "./views/Charts.jsx";
import Dashboard from "./views/Dashboard.jsx";
// import ExtendedForms from "./views/forms/ExtendedForms.jsx";
import ExtendedTables from "./views/tables/ExtendedTables.jsx";
import FullScreenMap from "./views/maps/FullScreenMap.jsx";
import GoogleMaps from "./views/maps/GoogleMaps.jsx";
import GridSystem from "./views/components/GridSystem.jsx";
import Icons from "./views/components/Icons.jsx";
import Notifications from "./views/components/Notifications.jsx";
import Panels from "./views/components/Panels.jsx";
import ReactTables from "./views/tables/ReactTables.jsx";
import RegularForms from "./views/forms/RegularForms.jsx";
import RegularTables from "./views/tables/RegularTables.jsx";
import SweetAlert from "./views/components/SweetAlert.jsx";
import Timeline from "./views/pages/Timeline.jsx";
import Typography from "./views/components/Typography.jsx";
import UserProfile from "./views/pages/UserProfile.jsx";
import ValidationForms from "./views/forms/ValidationForms.jsx";
import VectorMap from "./views/maps/VectorMap.jsx";
import Widgets from "./views/Widgets.jsx";
import Wizard from "./views/forms/Wizard.jsx";
import StockSearch from './pages/StockSearch';
import Watchlist from './pages/Watchlist'


const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    icon: "nc-icon nc-book-bookmark",
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Stocks",
    icon: "nc-icon nc-layout-11",
    state: "componentsCollapse",
    views: [
      {
        path: "/stocksearch",
        name: "Stock Search",
        mini: "S",
        component: StockSearch,
        layout: "/admin"
      },
      {
        path: "/watchlist",
        name: "Watch List",
        mini: "W",
        component: Watchlist,
        layout: "/admin"
      }
    ]
  }
];

export default routes;
