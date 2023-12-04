import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import MobileNavList from "../MobileNavList/MobileNavList";
import NavList from "../NavList/NavList";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";
export default function AppNavbar() {
  const { t } = useTranslation();

  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 1024 && setOpenNav(false);

  const handleMobileHeaderLinkClick = () => {
    setOpenNav(false);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="my-auto mx-auto max-w-screen-2xl px-3 py-6">
      <div className="flex items-center justify-between">
        <Link
          to=""
          className="mr-2 font-semibold text-xl cursor-pointer py-1.5"
        >
          {t("header.name")}
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          <NavList />
          <div className="mr-2">
            <LanguageSelector />
          </div>
        </div>
        <div className="lg:hidden">
          <button
            className="ml-auto h-12 w-12 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent "
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-12 w-12" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-12 w-12" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>
      {openNav && (
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            openNav ? "block" : "hidden"
          }`}
        >
          <div className="max-h-64 overflow-y-auto flex flex-col gap-2">
            <MobileNavList onClose={handleMobileHeaderLinkClick} />
            <div className="flex justify-end"></div>
          </div>
        </div>
      )}
    </nav>
  );
}
