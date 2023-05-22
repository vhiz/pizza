import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./controllers/navbar/Navbar";
import Footer from "./controllers/footer/Footer";
import { Suspense, lazy } from "react";
import "./app.scss";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";

const Home = lazy(() => import("./pages/home/Home"));

export default function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense
              fallback={
                <div className="load">
                  <img src="/img/loading.gif" alt="" />
                </div>
              }
            >
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/product/:id",
          element: (
            <Suspense
              fallback={
                <div className="load">
                  <img src="/img/loading.gif" alt="" />
                </div>
              }
            >
              <Product />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense
              fallback={
                <div className="load">
                  <img src="/img/loading.gif" alt="" />
                </div>
              }
            >
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "/order/:id",
          element: (
            <Suspense
              fallback={
                <div className="load">
                  <img src="/img/loading.gif" alt="" />
                </div>
              }
            >
              <Order />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
