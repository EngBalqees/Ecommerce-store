import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Home from './pages/home/home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root from './routes/Root'
import Login from './pages/login/login'
import Register from './pages/register/register'
import CategoryProducts from './pages/categoprod/categoryproducts'
import Products from './pages/products/products'
import ProductOverlay from './pages/product/product'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/products/products",
      element: <Products />
    },

    {
      path: "/categoryproducts/:id",
      element: <CategoryProducts />
    },
    {
      path: "/product/:id",
      element: <ProductOverlay/>
    },
    {
      path: "/login/login",
      element: <Login />
    },
    {
      path: "/register/register",
      element: <Register />
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
