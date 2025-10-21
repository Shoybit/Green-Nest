import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import Eroor from "../Pages/Eroor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'plants',
        element: <Plants />
      },
      {
        path: 'myprofile', 
        element: <MyProfile />
      },
      {
        path: '*', 
        element: <Eroor />
      },
    ]
  },
]);