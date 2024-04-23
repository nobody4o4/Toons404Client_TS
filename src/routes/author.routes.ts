// import  AuthorDashboardLayout from "@/layout/dashboard/Admin.dashboard.layout";
// import AddBookAdmin from "@/pages/author/Book/AddBook.author";
// import EditChapterAdmin from "@/pages/author/Chapter/EditChapter.author";
// import AddChapterAdmin from "@/pages/author/Chapter/AddChapter.author";
// import DashBoard from "@/pages/author/DashBoard";
// import EditBookAdmin from "@/pages/author/Book/EditBook.author";
// import GenreAdmin from "@/pages/author/Genre/Genre.author";
// import BookAdmin from "@/pages/author/Book/Book.author";
// import AdminBookDetails from "@/pages/author/Book/BookDetails.author";
// import SeriesAdmin from "@/pages/author/Series/Series.author";
// import AddSeries from "@/pages/author/Series/AddSeries.author";
// import SeriesDetails from "@/pages/author/Series/SeriesDetails.author";
// import EditSeriesAdmin from "@/pages/author/Series/EditSeries.author";
// import AddGenreAdmin from "@/pages/author/Genre/AddGenre.author";
// import EditGenreAdmin from "@/pages/author/Genre/EditGenre.author";
// import UserAdmin from "@/pages/author/User/User.author";
// import AdminUserDetails from "@/pages/author/User/UserDetails.author";
// import AddComicChapterAdmin from "@/pages/author/ComicChapter/AddComicChapter";
// import AuthorDashboardLayout from "@/layout/dashboard/Author.dashboard.layout";
import { lazy } from "react";

const  AuthorDashboardLayout = lazy(() => import("@/layout/dashboard/Author.dashboard.layout"));
const AddBookAdmin = lazy(() => import("@/pages/author/Book/AddBook.author"));
const EditChapterAdmin = lazy(() => import("@/pages/author/Chapter/EditChapter.author"));
const AddChapterAdmin = lazy(() => import("@/pages/author/Chapter/AddChapter.author"));
const DashBoard = lazy(() => import("@/pages/author/DashBoard.author"));
const EditBookAdmin = lazy(() => import("@/pages/author/Book/EditBook.author"));
const BookAdmin = lazy(() => import("@/pages/author/Book/Book.author"));
const AdminBookDetails = lazy(() => import("@/pages/author/Book/BookDetails.author"));
const AddComicChapterAdmin = lazy(() => import("@/pages/author/ComicChapter/AddComicChapter.author"))



export const authorRoutes = [
    {
        id: "dashboard",
        path: "/dashboard/author",
        component: DashBoard,
        hasHomeLayout: false,
        layout: AuthorDashboardLayout,
        requiredAuth: true,
        requireAuthor: true,
    },   
    {
        id: "book",
        path: "/dashboard/author/book",
        component: BookAdmin,
        hasHomeLayout: false,
        layout: AuthorDashboardLayout,
        requiredAuth: true,
        requireAuthor: true,
    },
    {
        id: "bookDetails",
        path: "/dashboard/author/book/:id",
        component: AdminBookDetails,
        hasHomeLayout: false,
        layout: AuthorDashboardLayout,
        requiredAuth: true,
        requireAuthor: true,
    },
    {
        id: "addchapter",
        path: "/dashboard/author/book/:bookId/add-chapter",
        component: AddChapterAdmin,
         
        layout:AuthorDashboardLayout,
        requiredAuth: true,
        requireAuthor: true,
    },
    {
        id: "addComicChapter",
        path: "/dashboard/author/book/:bookId/add-comic-chapter",
        component: AddComicChapterAdmin,
        layout: AuthorDashboardLayout,
        requiredAuth: true,
        requireAuthor: true,
    },
    {
        id: "editchapter",
        path: "/dashboard/author/book/:id/edit-chapter/:chapterId",
        component: EditChapterAdmin,
         
        layout: AuthorDashboardLayout,
        requiredAuth: true,
        requireAuthor: true,
    },
    {
        id: "editBook",
        path: "/dashboard/author/edit/book/:id",
        component: EditBookAdmin,
         
        layout: AuthorDashboardLayout,
        requiredAuth: true,
        requireAuthor: true,
    },
   
    {
        id: "addBook",
        path: "/dashboard/author/book/add",
        component: AddBookAdmin,
         
        layout: AuthorDashboardLayout,
        requiredAuth: true,
        requireAuthor: true,
    },
    {
        id: "chapter",
        path: "/dashboard/author/book/chapter",
        component: DashBoard,
         
        layout: AuthorDashboardLayout,
        requiredAuth: true,
        requireAuthor: true,
    },
    
];
