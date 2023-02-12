import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import AboutUs from "../pages/About/AboutUs";
// import ContactUs from "../pages/ContactUs/ContactUs";
import JoinUs from "../pages/ContactUs/JoinUs";
import Home from "../pages/HomePages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import UserProfile from "../pages/UserProfile/UserProfile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:'/reset-password',
                element:<ResetPassword></ResetPassword>
            },
            {
                path:'/about',
                element:<AboutUs/>
            },
            {
                path:'/contact',
                element:<JoinUs></JoinUs>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"/dashboard/user-profile",
                element:<UserProfile></UserProfile>
            }
        ]
    }
]);

export default router ;