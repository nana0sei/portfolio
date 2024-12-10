import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ArtPage from "./pages/ArtPage";
import DevPage from "./pages/DevPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "dev-projects", element: <DevPage /> },
      { path: "art", element: <ArtPage /> },
    ],
  },
]);

export default router;
