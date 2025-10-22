import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup"; 
import Footer from "../Components/Footer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: ()=> fetch('../Plant.data.json')
        
      },
      {
        path: 'plants',
        element: <Plants />,
         loader: ()=> fetch('../Plant.data.json')
      },
      {
        path: 'myprofile',
        element: <MyProfile />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup', 
        element: <Signup />
      }
    ]
  },
]);