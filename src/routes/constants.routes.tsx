import React from "react";
import PathConstants from "./constants.path";

const Home = React.lazy(() => import("../pages/Home/Home"));
const About = React.lazy(() => import("../pages/About/About"));
const Projects = React.lazy(() => import("../pages/Projects/Projects"));
const Contact = React.lazy(() => import("../pages/Contact/Contact"));

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.ABOUT, element: <About /> },
  { path: PathConstants.PROJECTS, element: <Projects /> },
  { path: PathConstants.CONTACT, element: <Contact /> },
];

export default routes;
