import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Home from './pages/home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root from './routes/Root'
import Login from './pages/login'
import Register from './pages/register'
import CategoryProducts from './pages/categoryproducts'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [{
      path: "/",
      element: <Home/>
    },
    {
      path: "/categoryproducts/:id",
      element: <CategoryProducts/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },

  ]
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
