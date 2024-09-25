import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";

export const routes = [
  {
    link: "/",
    title: "Home",
    element: <Home />,
    isNavLink: true,
  },
  {
    link: "/about",
    title: "About",
    element: <About />,
    isNavLink: true,
  },
  {
    link: "/search/:filmID",
    title: "Search",
    element: <Search />,
    isNavLink: false,
  },
];
