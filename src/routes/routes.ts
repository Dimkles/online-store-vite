import AdminPanel from "../pages/adminPanel/AdminPanel";
import Catalog from "../pages/catalog/Catalog";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
export const PublickRoutes = [
    { path: '/', element: Home },
    { path: '/catalog', element: Catalog },
    { path: '*', element: NotFound },
]

export const PrivateRoutes = [
    { path: '/', element: Home },
    { path: '/catalog', element: Catalog },
    { path: '*', element: NotFound },
]

export const AdminRoutes = [
    { path: '/', element: Home },
    { path: '/catalog', element: Catalog },
    { path: '/adminPanel', element: AdminPanel },
    { path: '*', element: NotFound },

]