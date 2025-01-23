import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Registration from "../pages/Registration";
import AllMovies from "../pages/AllMovies";
import PrivateRoute from "./PrivateRoute";
import AddMovies from "../pages/AddMovies";
import MovieDetails from "../pages/MovieDetails";
import FavoriteMovies from "../pages/FavoriteMovies";
import ErrorPage from "../components/ErrorPage";






export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "/registration",
                element: <Registration />,
            },
            {
                path: "/allmovies",
                element: <PrivateRoute>
                    <AllMovies />
                </PrivateRoute>,
            },
            {
                path: "/addmovies",
                element: <PrivateRoute>
                    <AddMovies />
                </PrivateRoute>,
            },
            {
                path: "/movie/details/:id",
                element: <PrivateRoute>
                    <MovieDetails />
                </PrivateRoute>,
            },
            {
                path: "/fevorite",
                element: <PrivateRoute>
                    <FavoriteMovies />
                </PrivateRoute>,
            },
        ],
    },
]);