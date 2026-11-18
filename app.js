import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/components/header";
import Body from "./src/components/Body";
import { RouterProvider,Outlet } from "react-router";
import About from "./src/components/About";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter } from "react-router-dom";
const AppLayout=() => {
  return (
    <div className="App">   
        <Header />
        <Outlet />
    </div>
    );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path:"/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <ContactUs />

      },
      {
        path: "/",
        element: <Body />
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ]
  },
 ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
  
