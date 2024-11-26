import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./components/login/login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/signup/signup.jsx";
import PaymentComponent from "./components/paymentComponent/paymentComponent.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/payment",
    element: <PaymentComponent />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
