import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { Loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder";
import Order, {loader as orderLoader} from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/Error";

const router = createBrowserRouter([

  {
    element: <AppLayout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader:menuLoader,
        errorElement: <NotFound/>
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder/>,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order/>,
        loader: orderLoader,
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
