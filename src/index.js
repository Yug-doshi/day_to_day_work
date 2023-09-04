import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Resume from "./All_Task/Resume/Resume.jsx"
import Home from "./All_Task/home";
import RegistrationForm from "./All_Task/Registration_Form_With_usestate/RegistrationForm"
import User_api from "./All_Task/Fetch_From_Api_using_use_effect/user_api"
import BusinessCard from "./All_Task/Business_Card/Business_card";
import Notes from "./All_Task/Firebase_With_React/Component/Notes"
import E_commerce from "./All_Task/E_commerce/E_commerce";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/registration_form",
    element: <RegistrationForm />,
  },
  {
    path: "/fetch_user",
    element: <User_api />,
  },
  {
    path:"/BusinessCard",
    element:<BusinessCard/>
  },
  {
    path:"/registration",
    element:<Notes/>
  },
  {
    path:"/E_commerce",
    element:<E_commerce/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
