import React from 'react'; 
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import Main from '../../Layout/Main';
import Appoientment from '../../Pages/Appoientment/Appoientment';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/LogIn/Login';
import Signup from '../../Pages/SignUp/Signup';

const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
              path:'/appoientment',
              element:<Appoientment></Appoientment>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/signup',
              element:<Signup></Signup>
            }
          ]
        },
      ]);
      
    return (
        <RouterProvider router={router} />
    );
};

export default Router;