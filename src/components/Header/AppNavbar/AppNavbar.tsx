import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import MobileNavList from "../MobileNavList/MobileNavList";
import NavList from "../NavList/NavList";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

export default function AppNavbar() {
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
          to="/"
          className="mr-4 font-black hover:text-tertiary cursor-pointer py-1.5"
        >
          Gerard
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          <div>
            <LanguageSelector />
          </div>
          <NavList />
        </div>
        <button
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </button>
      </div>
      {openNav && (
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            openNav ? "block" : "hidden"
          }`}
        >
          <div className="max-h-64 overflow-y-auto">
            <MobileNavList onClose={handleMobileHeaderLinkClick} />
          </div>
        </div>
      )}
    </nav>
  );
}
