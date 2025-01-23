import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Registration from "../pages/Registration";
import AllMovies from "../pages/AllMovies";
import PrivateRoute from "./PrivateRoute";
import AddMovies from "../pages/AddMovies";






export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
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
        ],
    },
]);