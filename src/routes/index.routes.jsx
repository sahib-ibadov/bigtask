

import Basket from "../page/Site/Basket/Basket";
import ChecOut from "../page/Site/CheckOut/ChecOut";
import Complate from "../page/Site/Complate/Complate";
import Contact from "../page/Site/Contact/Contact";
import Detail from "../page/Site/Detail/Detail";
import Home from "../page/Site/Home/Home";
import Order from "../page/Site/Order/Order";
import Shop from "../page/Site/Shop/Shop";
import SiteRoot from "../page/Site/SiteRoot";
import Wishlist from "../page/Site/Wishlist/Wishlist";
import Add from "../page/admin/Add/Add";
import Books from "../page/admin/Books/Books";
import Dashboard from "../page/admin/Dashboard/Dashboard";
import Orders from "../page/admin/Orders/Orders";
import AdminRoot from "../page/admin/adminRoot";

const ROUTES = [{
    path: '/',
    element: <SiteRoot />,
    children: [
        {
            path: '',
            element: <Home />


        }, {
            path: 'Basket',
            element: <Basket />
        }, {
            path: 'CheckOut',
            element: <ChecOut />
        }, {
            path: 'Complate',
            element: <Complate />
        }, {
            path: 'Contact',
            element: <Contact />
        }, {
            path: '/:id',
            element: <Detail />
        }, {
            path: 'Order',
            element: <Order />
        }, {
            path: 'Shop',
            element: <Shop />
        }, {
            path: 'Wishlist',
            element: <Wishlist />
        }]
}, {
    path: '/admin',
    element: <AdminRoot />,
    children: [{
        path: 'Books',
        element: <Books />
    }, {
        path: '',
        element: <Dashboard />
    }, {
        path: 'Orders',
        element: <Orders />
    },{
        path:'Add',
        element:<Add/>
    }]
}]

export default ROUTES