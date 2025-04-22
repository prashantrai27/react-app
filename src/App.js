import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntDetails from "./components/RestrauntDetails";

const About = lazy(() => import("./components/About"));
const rootHeader = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      // below in about we are performing lazy loading using lazy and Suspense from react.
      {
        path: "/about",
        element: (
          <Suspense fallback="It's getting loaded. Please wait..">
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunts/:resId",
        element: <RestrauntDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

rootHeader.render(<RouterProvider router={appRouter} />);
