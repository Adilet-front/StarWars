import { CategoryPage } from "../pages/CategoryPage";
import { Detaillooking } from "../pages/Detaillooking";
import { FailPage } from "../pages/FailPage";
import { FavoritePage } from "../pages/FavoritePage";
import { HomePages } from "../pages/HomePages";
import { NotFound } from "../pages/NotFound";
import { PeoplePage } from "../pages/PeoplePage";
import { SearchPage } from "../pages/SearchPage";

export const routes = [
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/favorite",
    element: <FavoritePage />,
  },
  {
    path: "/people",
    element: <PeoplePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
  {
    path: "fail",
    element: <FailPage />,
  },
  {
    path: "watch/:id",
    element: <Detaillooking/>
  }
];
