import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import CardDetails from "../Pages/CardDetails";
import ProtectedRoute from "../Provider/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        index: true, 
        element: <Home />,
        loader: () => fetch("http://localhost:3000/plants").then(res => res.json())
      },
      { 
        path: 'plants',
        element: <Plants />,
        loader: () => fetch("http://localhost:3000/plants").then(res => res.json())
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