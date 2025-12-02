import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import CardDetails from "../Pages/CardDetails";
import ProtectedRoute from "../Provider/ProtectedRoute";
import MyBookings from "../Components/MyBookings";
import Error from "../Pages/Eroor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        index: true, 
        element: <Home />,
        loader: () => fetch("https://greennest-vercel.vercel.app/plants").then(res => res.json())
      },
      { 
        path: 'plants',
        element: <Plants />,
        loader: () => fetch("https://greennest-vercel.vercel.app/plants").then(res => res.json())
      },
      {
        path: 'myprofile',
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ) 
      },
      {
        path: 'Mybooking',
        element: (
          <ProtectedRoute>
            <MyBookings/>
          </ProtectedRoute>
        ) 
      },
      { 
        path: 'login',
        element: <Login />
      },
      { 
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'card-details/:id',
        element: (
            <CardDetails />

        ),
      },
      { 
        path: '*',
        element: <Error />
      }
    ]
  }
]);