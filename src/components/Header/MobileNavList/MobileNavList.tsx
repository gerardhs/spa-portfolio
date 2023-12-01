import { FC } from "react";
import { MobileHeaderLink } from "../..";

interface MobileHeaderLinkProps {
    onClose: () => void;
  }
  
  const MobileNavList: FC<MobileHeaderLinkProps> = ({ onClose }) => {
    return (
      <div className="border-y border-neutral-500 divide-y divide-neutral-500 overflow-x-hidden flex flex-col justify-center">
        <MobileHeaderLink title="Home" href="/" onClose={onClose} />
        <MobileHeaderLink title="About" href="/about" onClose={onClose} />
        <MobileHeaderLink title="Projects" href="/projects" onClose={onClose} />
        <MobileHeaderLink title="Contact" href="/contact" onClose={onClose} />
      </div>
    );
  };

  export default MobileNavList;