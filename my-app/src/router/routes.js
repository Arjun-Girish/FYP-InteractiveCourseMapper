import { useRoutes } from "react-router-dom";
import Main from "../views/Main/Main";
import Search from "../views/search";
const Routes = () => {
  const routes = useRoutes([
    { path: "/main", element:<Main/>  },
    {
      path: "/search/:id",
      element: <Search />,
    },
  ]);
  return routes;
};
export default Routes;
