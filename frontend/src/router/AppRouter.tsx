import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import RegisterPager from "../pages/RegisterPager";
import StatiPager from "../pages/StatiPager";
import ProductsPager from "../pages/ProductsPager";
import ArticlePage from "../pages/ArticlePage";

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
            }
        ]
    }
])

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter