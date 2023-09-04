import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Resume from "./All_Task/Resume/Resume.jsx"
import Home from "./All_Task/home";
import RegistrationForm from "./All_Task/Registration_Form_With_usestate/RegistrationForm"
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/resume",
    element:<Resume/>
  },
  {
    path:"/registration_form",
    element:<RegistrationForm/>
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
