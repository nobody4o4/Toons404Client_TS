import Admindashboardlayout from "@/layout/dashboard/Admin.dashboard.layout";
import AddNovelAdmin from "@/pages/admin/AddNovel.admin";
import EditChapterAdmin from "@/pages/admin/EditChapter.admin";
import AddChapterAdmin from "@/pages/admin/AddChapter.admin";
import DashBoard from "@/pages/admin/DashBoard";
import EditNovelAdmin from "@/pages/admin/EditNovel.admin";
import GenreAdmin from "@/pages/admin/Genre.admin";
import NovelAdmin from "@/pages/admin/Novel.admin";
import AdminNovelDetails from "@/pages/admin/NovelDetails.admin";
import SeriesAdmin from "@/pages/admin/Series.admin";
import AddSeries from "@/pages/admin/AddSeries.admin";
import SeriesDetails from "@/pages/admin/SeriesDetails.admin";
import EditSeriesAdmin from "@/pages/admin/EditSeries.admin";

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
        id: "addSeries",
        path: "/dashboard/admin/add-series",
        component: AddSeries,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "seriesDetails",
        path: "/dashboard/admin/series/:id",
        component: SeriesDetails,
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
        path: "/dashboard/admin/novel/:novelId/add-chapter",
        component: AddChapterAdmin,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "editchapter",
        path: "/dashboard/admin/novel/:id/edit-chapter/:chapterId",
        component: EditChapterAdmin,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "editNovel",
        path: "/dashboard/admin/edit/novel/:id",
        component: EditNovelAdmin,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "editSeries",
        path: "/dashboard/admin/edit/series/:id",
        component: EditSeriesAdmin,
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
