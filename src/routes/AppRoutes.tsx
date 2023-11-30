import { Route, Routes } from "react-router-dom";
import * as Pages from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Pages.Home} />
      <Route path="/about" Component={Pages.About} />
      <Route path="/projects" Component={Pages.Projects} />
      <Route path="/contact" Component={Pages.Contact} />
    </Routes>
  );
};

export default AppRoutes;
