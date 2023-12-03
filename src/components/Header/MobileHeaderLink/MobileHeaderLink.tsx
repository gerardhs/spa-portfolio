import { FC } from "react";
import { Link } from "react-router-dom";

interface MobileHeaderLinkProps {
  href: string;
  title: string;
  onClose: () => void;
}

const MobileHeaderLink: FC<MobileHeaderLinkProps> = ({
  href,
  title,
  onClose,
}) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <Link
      to={href}
      className={`font-semibold p-2 duration-300 ease-in-out hover:bg-neutral-50`}
      onClick={handleClick}
    >
      <div
        className={`transition-all duration-300 ease-in-out hover:translate-x-2`}
      >
        {title}
      </div>
    </Link>
  );
};

export default MobileHeaderLink;
