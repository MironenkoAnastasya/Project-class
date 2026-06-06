import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import RegisterPager from "../pages/RegisterPager";
 
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
            }
        ]
    }
])

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter