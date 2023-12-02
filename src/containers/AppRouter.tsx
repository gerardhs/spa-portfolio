import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Pages from "../pages";
import { PATH_CONSTANTS } from "../utils";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH_CONSTANTS.HOME} Component={Pages.Home} />
        <Route path={PATH_CONSTANTS.ABOUT} Component={Pages.About} />
        <Route path={PATH_CONSTANTS.PROJECTS} Component={Pages.Projects} />
        <Route path={PATH_CONSTANTS.CONTACT} Component={Pages.Contact} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
