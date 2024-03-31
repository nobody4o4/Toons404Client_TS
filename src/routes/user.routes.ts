import Chapter from "@/pages/Chapter";
import Home from "@/pages/Home";
import Novel from "@/pages/Novel";
import Register from "@/pages/Register";
import NotFound from "@/pages/error/NotFound";
import LoginForm from "@/pages/Login";
import HomeLayout from "@/layout/client/Home.Layout";
import { Fragment } from "react";
import UserProfile from "@/pages/UserProfile";
import EditUserProfile from "@/pages/EditUser";

export const userRoutes = [
    {
        id: "home",
        path: "/",
        component: Home, 
        hasHomeLayout: true,
        hasAdminLayout: false,
        layout: HomeLayout,
        requiredAuth: false,
    }, 
    {
        id: "userProfile"
        ,path: '/my-profile',
        key : 'userProfile',
        component: UserProfile,
        hasHomeLayout: true,
        hasAdminLayout: false,
        layout: HomeLayout,
        requiredAuth: true
    },
    {
        id: "EditUserProfile"
        ,path: '/edit-profile',
        key : 'editUserProfile',
        component: EditUserProfile, 
        hasHomeLayout: true,
        hasAdminLayout: false,
        layout: HomeLayout,
        requiredAuth: true
    },
    // {
    //     id: "userProfile"
    //     ,path: '/profile/:username',
    //     key : 'userProfile'
    //     ,component: UserProfile
    //     ,hasHomeLayout: true
    //     ,hasAdminLayout: false
    //     ,layout: HomeLayout
    //     ,requiredAuth: true

    // },
    {
        id: "register",
        path: "/register",
        component: Register,
        hasHomeLayout: true,
        hasAdminLayout: false,
        layout: HomeLayout,
        requiredAuth: false,
    },
    {
        id: "login",
        path: "/login",
        component: LoginForm,
        hasHomeLayout: true,
        hasAdminLayout: false,
        layout: HomeLayout,
        requiredAuth: false,
    },
    {
        id: "novel",
        path: "/novel/:id",
        component: Novel,
        hasHomeLayout: true,
        hasAdminLayout: false,
        layout: HomeLayout,
        requiredAuth: false,
    },
    {
        id: "chapter",
        path: "/novel/:id/:number",
        component: Chapter,
        hasHomeLayout: true,
        hasAdminLayout: false,
        layout: HomeLayout,
        requiredAuth: false,
        
    },
    {
        id: "404",
        path: "*",
        component: NotFound,
        hasHomeLayout: false,
        hasAdminLayout: false,
        layout: Fragment,
        requiredAuth: false,
    }
]