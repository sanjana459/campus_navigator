import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./routes/Root/Root";
import SettingsPage from "./routes/SettingsPage/SettingsPage";
import HomePage from "./routes/HomePage/HomePage";
import BuildingPage from "./routes/BuildingPage/BuildingPage";
import ChatPage from "./routes/ChatPage/ChatPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "chat",
        element: <ChatPage />,
      },
      {
        path: "building/:id",
        element: <BuildingPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

export default Router;
