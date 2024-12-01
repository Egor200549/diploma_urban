import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader/Loader";
import Product from "./pages/Product/Product";
import Order from "./pages/Order/Order";

const router = createBrowserRouter([
    {
        path: '/diploma_urban',
        element: <Layout />,
        loader: Loader,
        children: [
            { index: true, element: <Home /> },
            { path: '/sneakers/:id', element: <Product /> },
            { path: 'order', element: <Order /> },
            { path: '*', element: <>404 страница не найдена</> }
        ]
    }
])

export default router;