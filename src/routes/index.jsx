import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Wildcard from "../pages/Wildcard.jsx"
import HomePage from "../pages/HomePage.jsx";
import FavoritesPage from "../pages/FavoritesPage";
import BookDetailPage from "../pages/BookDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      index: true,
      element: <HomePage />
    },
    {
      path: "favorites",
      element: <FavoritesPage />
    },
    {
      path: "book/:id",
      element: <BookDetailPage />
    },
    {
      path: "*",
      element: <Wildcard />
    }]
  }
])

export{ router }