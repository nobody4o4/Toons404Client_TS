import Chapter from "@/pages/Chapter";
import Home from "@/pages/Home";
import Novel from "@/pages/Novel";
import Register from "@/pages/Register";
import NotFound from "@/pages/error/NotFound";
import LoginForm from "@/pages/Login";
import HomeLayout from "@/layout/client/Home.Layout";
import { Fragment } from "react";
import MyProfile from "@/pages/profile/MyProfile";
import EditUserProfile from "@/pages/profile/EditUser";
import Subscribtion from "@/pages/Subscription";
import CongratsForSub from "@/pages/SuccessSubscribtion";
import Test from "@/pages/Test";
import ReadingList from "@/pages/profile/ReadingList";
import Feed from "@/pages/forum/feed";
import Series from "@/pages/Series";
import SeriesHome from "@/pages/Series.home";
import UserProfile from "@/pages/profile/Userprofile";
import Loading from "@/pages/Loading";
import InternalError from "@/pages/error/InternalError";

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
        id: "home",
        path: "/test",
        component: Test, 
        hasHomeLayout: true,
        hasAdminLayout: false,
        layout: HomeLayout,
        requiredAuth: false,
    }, 
    {
        id: "subscribtion",
        path: "/subscribtion",
        component: Subscribtion, 
        hasHomeLayout: true,
        hasAdminLayout: false,
        layout: HomeLayout,
        requiredAuth: false,
    }, 
    {
        id: "subscribtion",
        path: "/subscribtion/success",
        component: CongratsForSub, 
        hasHomeLayout: true,
        hasAdminLayout: false,
        layout: HomeLayout,
        requiredAuth: true,
    }, 
    {
        id: "myProfile"
        ,path: '/my-profile',
        key : 'userProfile',
        component: MyProfile,
        hasHomeLayout: true,
        hasAdminLayout: false,
        layout: HomeLayout,
        requiredAuth: true
    },
    {
        id: "userProfile"
        ,path: '/profile/:username',
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
    {
        id: "readingList"
        ,path: '/reading-list',
        key : 'redingList',
        component: ReadingList, 
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
        id: "seriesHome",
        path: "/series",
        component: SeriesHome,
        hasHomeLayout: true,
        layout: HomeLayout,
        
    },
    {
        id: "series",
        path: "/series/:id",
        component: Series,
        hasHomeLayout: true,
        layout: HomeLayout,

    },
    {
        id: "chapter",
        path: "/novel/:id/:number",
        component: Chapter,
        hasHomeLayout: true,
        hasAdminLayout: false,
        layout: HomeLayout,
        requiredAuth: true,
    },
    {
        id: "feed",
        path: "/feed",
        component: Feed,
        hasHomeLayout: true,
        hasAdminLayout: false,
        layout: HomeLayout,
        requiredAuth: false,
        
    },
    {
        id: "loading",
        path: "/load",
        component: Loading,
        hasHomeLayout: true,
        hasAdminLayout: false,
        layout: HomeLayout,
        requiredAuth: false,
        
    },
    {
        id: "error",
        path: "/ie",
        component: InternalError,
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

