import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";
import RootLayout from "../components/layout/RootLayout";
import NotFound from "../pages/NotFound";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "shop",
        Component: Shop,
      },
      {
        path: "product/:id",
        Component: ProductDetails,
        loader: ({ params }) => {
          return params.id; // static design e dummy
        },
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "checkout",
        Component: Checkout,
        action: async ({ request }) => {
          const formData = await request.formData();
          return Object.fromEntries(formData);
        },
      },
      {
        path: "success",
        Component: OrderSuccess,
      },
    ],
  },
]);

export default AppRoutes;
