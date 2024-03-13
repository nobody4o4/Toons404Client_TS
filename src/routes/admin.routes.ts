import Admindashboardlayout from "@/layout/dashboard/Admin.dashboard.layout";
// import AddGenreAdmin from "@/pages/admin/addGenre.admin";
import DashBoard from "@/pages/admin/dashBoard";
import GenreAdmin from "@/pages/admin/genre.admin";

export const adminRoutes = [
    {
        id: "dashboard",
        path: "/dashboard/admin",
        component: DashBoard,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "genre",
        path: "/dashboard/admin/genre",
        component: GenreAdmin,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    // {
    //     id: "addGenre",
    //     path: "/dashboard/admin/genre/add",
    //     component: AddGenreAdmin,
    //     hasHomeLayout: false,
    //     hasAdminLayout: true,
    //     layout:Admindashboardlayout,
    //     requiredAuth: true,
    // },
    {
        id: "series",
        path: "/dashboard/admin/series",
        component: DashBoard,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,

        requiredAuth: true,
    },
    {
        id: "novel",
        path: "/dashboard/admin/novel",
        component: DashBoard,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,

        requiredAuth: true,
    },
    {
        id: "chapter",
        path: "/dashboard/admin/novel/chapter",
        component: DashBoard,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,

        requiredAuth: true,
    },
    {
        id: "user",
        path: "/dashboard/admin/user",
        component: DashBoard,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true, 
    },
];
