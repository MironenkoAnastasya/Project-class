import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import RegisterPager from "../pages/RegisterPager";
import StatiPager from "../pages/StatiPager";
import ProductsPager from "../pages/ProductsPager";

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
            }
        ]
    }
])

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter