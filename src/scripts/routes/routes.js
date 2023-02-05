/* eslint-disable quotes */
import NowPlaying from "../views/pages/now-playing";
import Upcoming from "../views/pages/upcoming";
import Detail from "../views/pages/detail";
import Like from "../views/pages/like";
import Homepage from "../views/pages/homepage";
import List from "../views/pages/list";
import Trending from "../views/pages/trending";
import Populer from "../views/pages/populer";
import Latest from "../views/pages/latest";

const routes = {
  "/": Homepage, // default page
  "/movies": List,
  "/nowplaying-movies": NowPlaying,
  "/upcoming-movies": Upcoming,
  "/detail/:id": Detail,
  "/trending-movies": Trending,
  "/populer-movies": Populer,
  "/latest-movies": Latest,
  "/bookmark": Like,
};

export default routes;
