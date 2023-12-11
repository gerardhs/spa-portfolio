import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderLinkProps {
  href: string;
  title: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ href, title }) => {
  const location = useLocation();
  const isActive = location.pathname.substring(1) === href;

  return (
    <Link
      to={href}
      className={`text-center font-medium transition-all duration-500 ease-in-out 
      relative before:content-[''] before:absolute before:block before:w-full before:h-[0.075rem] 
      before:bottom-0 before:left-0 before:bg-black
      before:scale-x-0 before:origin-top-left before:hover:scale-x-100 
      before:transition-all before:ease-in-out before:duration-500 ${
        isActive ? "before:scale-x-100" : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
