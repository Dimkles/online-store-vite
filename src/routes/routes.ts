import AdminPanel from "../pages/adminPanel/AdminPanel";
import Catalog from "../pages/catalog/Catalog";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
export const PublickRoutes = [
    { path: '/', element: Home, name: 'Главная' },
    { path: '/catalog', element: Catalog, name: 'Каталог' },
    { path: '*', element: NotFound, name: '404' },
]

export const PrivateRoutes = [
    { path: '/', element: Home, name: 'Главная' },
    { path: '/catalog', element: Catalog, name: 'Каталог' },
    { path: '*', element: NotFound, name: '404' },
]

export const AdminRoutes = [
    { path: '/', element: Home, name: 'Главная' },
    { path: '/catalog', element: Catalog, name: 'Каталог' },
    { path: '/adminPanel', element: AdminPanel, name: 'Админ панель' },
    { path: '*', element: NotFound, name: '404' },

]