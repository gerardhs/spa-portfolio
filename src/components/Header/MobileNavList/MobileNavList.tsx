import { FC } from "react";
import { MobileHeaderLink } from "../..";
import { t } from "i18next";

interface MobileHeaderLinkProps {
  onClose: () => void;
}

const MobileNavList: FC<MobileHeaderLinkProps> = ({ onClose }) => {
  return (
    <div className="border-y border-neutral-500 divide-y divide-neutral-500 overflow-x-hidden flex flex-col justify-center">
      <MobileHeaderLink title={t('header.home')} href="/" onClose={onClose} />
      <MobileHeaderLink title={t('header.about')} href="/about" onClose={onClose} />
      <MobileHeaderLink title={t('header.projects')} href="/projects" onClose={onClose} />
      <MobileHeaderLink title={t('header.contact')} href="/contact" onClose={onClose} />
    </div>
  );
};

export default MobileNavList;
