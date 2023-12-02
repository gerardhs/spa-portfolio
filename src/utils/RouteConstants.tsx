import React from "react";
import { PATH_CONSTANTS } from ".";

const Home = React.lazy(() => import("../pages/Home/Home"));
const About = React.lazy(() => import("../pages/About/About"));
const Projects = React.lazy(() => import("../pages/Projects/Projects"));
const Contact = React.lazy(() => import("../pages/Contact/Contact"));

const ROUTES = [
  { path: PATH_CONSTANTS.HOME, element: <Home /> },
  { path: PATH_CONSTANTS.ABOUT, element: <About /> },
  { path: PATH_CONSTANTS.PROJECTS, element: <Projects /> },
  { path: PATH_CONSTANTS.CONTACT, element: <Contact /> },
];

export default ROUTES;
