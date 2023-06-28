import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DetailSurat from "./pages/DetailSurat";
import SuratList from "./pages/SuratList";
import DetailTafsir from "./pages/DetailTafsir";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/suratlist",
    element: <SuratList />,
  },
  {
    path: "/detailsurat/:nomor",
    element: <DetailSurat />,
  },
  {
    path: "/detailsurat/tafsir/:nomor",
    element: <DetailTafsir />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
