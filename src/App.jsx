import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";

import "./styles/main.scss"; // Тут підключаємо стилі котрі мають глобальну видимість

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/products",
      element: <Products />,
    },
  ]);
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
