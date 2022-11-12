import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Reviews from "../Pages/Reviews/Reviews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]

    }
])


export default router ;