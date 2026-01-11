import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { router } from "./routes/index.tsx";
 import { Provider } from "react-redux";
import { store } from "./store/Index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>

    <RouterProvider router={router} />
    <ToastContainer theme="light" position="top-right" autoClose={2000} />
    </Provider>
    {/* <App /> */}
  </StrictMode>
);
