import { useRoutes } from "react-router-dom";
import Home from "../views/Home";
import Search from "../views/search";
const GetRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/search/:id",
      element: <Search />,
    },
  ]);
  return routes;
};
export default GetRoutes;
