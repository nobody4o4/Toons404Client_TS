import Admindashboardlayout from "@/layout/dashboard/Admin.dashboard.layout";
import AddBookAdmin from "@/pages/admin/Book/AddBook.admin";
import EditChapterAdmin from "@/pages/admin/Chapter/EditChapter.admin";
import AddChapterAdmin from "@/pages/admin/Chapter/AddChapter.admin";
import DashBoard from "@/pages/admin/DashBoard";
import EditBookAdmin from "@/pages/admin/Book/EditBook.admin";
import GenreAdmin from "@/pages/admin/Genre/Genre.admin";
import BookAdmin from "@/pages/admin/Book/Book.admin";
import AdminBookDetails from "@/pages/admin/Book/BookDetails.admin";
import SeriesAdmin from "@/pages/admin/Series/Series.admin";
import AddSeries from "@/pages/admin/Series/AddSeries.admin";
import SeriesDetails from "@/pages/admin/Series/SeriesDetails.admin";
import EditSeriesAdmin from "@/pages/admin/Series/EditSeries.admin";
import AddGenreAdmin from "@/pages/admin/Genre/AddGenre.admin";
import EditGenreAdmin from "@/pages/admin/Genre/EditGenre.admin";
import UserAdmin from "@/pages/admin/User/User.admin";
import AdminUserDetails from "@/pages/admin/User/UserDetails.admin";
import AddComicChapterAdmin from "@/pages/admin/ComicChapter/AddComicChapter";

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
    {
        id: "addGenre",
        path: "/dashboard/admin/genre/add",
        component: AddGenreAdmin,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
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
        path: "/dashboard/admin/series/add",
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
        id: "book",
        path: "/dashboard/admin/book",
        component: BookAdmin,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "bookDetails",
        path: "/dashboard/admin/book/:id",
        component: AdminBookDetails,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "addchapter",
        path: "/dashboard/admin/book/:bookId/add-chapter",
        component: AddChapterAdmin,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "addComicChapter",
        path: "/dashboard/admin/book/:bookId/add-comic-chapter",
        component: AddComicChapterAdmin,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "editchapter",
        path: "/dashboard/admin/book/:id/edit-chapter/:chapterId",
        component: EditChapterAdmin,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "editBook",
        path: "/dashboard/admin/edit/book/:id",
        component: EditBookAdmin,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "editSeries",
        path: "/dashboard/admin/edit/series/:id",
        component: EditSeriesAdmin,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "editGenre",
        path: "/dashboard/admin/edit/genre/:id",
        component: EditGenreAdmin,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "addBook",
        path: "/dashboard/admin/book/add",
        component: AddBookAdmin,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "chapter",
        path: "/dashboard/admin/book/chapter",
        component: DashBoard,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,
    },
    {
        id: "user",
        path: "/dashboard/admin/user",
        component: UserAdmin,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true,  
    },
    {
        id: "user",
        path: "/dashboard/admin/user/details/:id",
        component: AdminUserDetails,
        hasHomeLayout: false,
        hasAdminLayout: true,
        layout:Admindashboardlayout,
        requiredAuth: true, 
    },
];
