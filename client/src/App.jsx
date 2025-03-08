import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import { useState } from "react";
import Stock from "./pages/Stock";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: isAuthenticated ? <LandingPage /> : <Navigate to="/login" />,
        },
        {
          path: "/login",
          element: <Login setIsAuthenticated={setIsAuthenticated} />,
        },
        {
          path: "/reports",
          element: isAuthenticated ? <Reports /> : <Navigate to="/login" />,
        },
        {
          path: "/stock",
          element: isAuthenticated ? <Stock /> : <Navigate to="/login" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
