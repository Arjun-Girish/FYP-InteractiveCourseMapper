import { useRoutes } from "react-router-dom";
import Main from "../views/Main/Main";
import Search from "../views/search";
import NewCourseMap from "../views/NewCourse/NewCourseMap";
import Specialisation from "../components/specialisation/Specialisation";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/main", 
      element:<Main/>
    },

    {
      path: "/search/:id",
      element: <Search />,
    },

    {
      path: "/", 
      element:<NewCourseMap/>
    },

    {
      path: "/specialisation", 
      element:<Specialisation/>
    },

  ]);
  return routes;
};
export default Routes;
