import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Home/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import AddToy from "../Pages/AddToy/AddToy";
import Errorpage from "../Pages/Errorpage/Errorpage";


const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<Errorpage></Errorpage>,
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'blog',
            element: <Blogs></Blogs>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'singup',
            element: <SingUp></SingUp>
        },
        {
            path: 'addtoy',
            element: <AddToy></AddToy>
        }
      ]
    },
  ]);

  export default router;