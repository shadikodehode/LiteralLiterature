import { createBrowserRouter } from "react-router"
import App from "../App.jsx"
import Wildcard from "../pages/Wildcard.jsx"
import HomePage from "../pages/HomePage.jsx"
import FavoritesPage from "../pages/FavoritesPage.jsx"
import BookDetailPage from "../pages/BookDetailsPage.jsx"
import BookListPage from "../pages/BookListPage.jsx"

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
      path: "list",
      element: <BookListPage />
    },
    {
      path: "*",
      element: <Wildcard />
    }]
  }
])

export{ router }