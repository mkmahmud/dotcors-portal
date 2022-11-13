import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import Main from '../../Layout/Main';

const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children:[
            {
                path:'/',
                element:<>Home</>
            }
          ]
        },
      ]);
      
    return (
        <RouterProvider router={router} />
    );
};

export default Router;