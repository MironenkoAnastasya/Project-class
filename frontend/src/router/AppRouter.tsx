import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import RegisterPager from "../pages/RegisterPager";
import StatiPager from "../pages/StatiPager";
import ProductsPager from "../pages/ProductsPager";
import ArticlePage from "../pages/ArticlePage";
import ApplyPage from "../pages/ApplyPage";
import LoginPager from "../pages/LoginPager";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import Class from "../pages/Class";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/register',
                element: <RegisterPager />
            },

            {
                path: '/stati',
                element: <StatiPager />
            },

            {
            path: '/products',
            element: <ProductsPager />
            },

            {
                path: '/articles/:id',
                element: <ArticlePage />
            },

            {
                path: '/apply',
                element: <ApplyPage />
            },

            {
                path: 'login',
                element: <LoginPager />
            },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/profile',
                        element: <Profile />
                    }
                ]
            },
            {
                path: 'class',
                element: <Class />
            }
        ]
    }
])

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter