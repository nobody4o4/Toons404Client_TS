import NovelDetails from "@/components/Novel/NovelDetails";
import Admindashboardlayout from "@/layout/dashboard/Admin.dashboard.layout";
import AddNovelAdmin from "@/pages/admin/AddNovel.admin";
import AddChapterAdmin from "@/pages/admin/addChapter.admin";
// import AddGenreAdmin from "@/pages/admin/addGenre.admin";
import DashBoard from "@/pages/admin/dashBoard";
import editNovelAdmin from "@/pages/admin/editNovel.admin";
import GenreAdmin from "@/pages/admin/genre.admin";
import NovelAdmin from "@/pages/admin/novel.admin";
import AdminNovelDetails from "@/pages/admin/novelDetails.admin";
import SeriesAdmin from "@/pages/admin/series.admin";

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
        component: SeriesAdmin,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "novel",
        path: "/dashboard/admin/novel",
        component: NovelAdmin,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,

        requiredAuth: true,
    },
    {
        id: "novelDetails",
        path: "/dashboard/admin/novel/:id",
        component: AdminNovelDetails,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,

        requiredAuth: true,
    },
    {
        id: "addchapter",
        path: "/dashboard/admin/novel/:id/add-chapter",
        component: AddChapterAdmin,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,

        requiredAuth: true,
    },
    {
        id: "editNovel",
        path: "/dashboard/admin/edit/novel/:id",
        component: editNovelAdmin,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,

        requiredAuth: true,
    },
    {
        id: "addNovel",
        path: "/dashboard/admin/novel/add",
        component: AddNovelAdmin,
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
