import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import CreateTask from "../components/CreateTask";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path:'/dashboard',
            element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
            path: '/createTask',
            element: <CreateTask></CreateTask>
        }
      ]
    },
  ]);