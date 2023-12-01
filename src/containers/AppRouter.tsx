import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Pages from "../pages";
import { PathConstants } from "../routes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathConstants.HOME} Component={Pages.Home} />
        <Route path={PathConstants.ABOUT} Component={Pages.About} />
        <Route path={PathConstants.PROJECTS} Component={Pages.Projects} />
        <Route path={PathConstants.CONTACT} Component={Pages.Contact} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
