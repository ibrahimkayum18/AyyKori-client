import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Page/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Route;
