import { useRoutes } from "react-router-dom";
import Main from "../views/Main/Main";
import Search from "../views/search";
import LandingPage from "../views/Loading-Page/Landing-Page";
const Routes = () => {
  const routes = useRoutes([
    { path: "/main", element:<Main/>  },
    {
      path: "/search/:id",
      element: <Search />,
    },

    { path: "/", element:<LandingPage/>},



  ]);
  return routes;
};
export default Routes;
