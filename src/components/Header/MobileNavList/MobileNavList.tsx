import { FC } from "react";
import { MobileHeaderLink } from "../..";
import { t } from "i18next";
import { PathConstants } from "../../../routes";

interface MobileHeaderLinkProps {
  onClose: () => void;
}

const MobileNavList: FC<MobileHeaderLinkProps> = ({ onClose }) => {
  return (
    <div className="border-y border-neutral-500 divide-y divide-neutral-500 overflow-x-hidden flex flex-col justify-center">
      <MobileHeaderLink
        title={t("header.home")}
        href={PathConstants.HOME}
        onClose={onClose}
      />
      <MobileHeaderLink
        title={t("header.about")}
        href={PathConstants.ABOUT}
        onClose={onClose}
      />
      <MobileHeaderLink
        title={t("header.projects")}
        href={PathConstants.PROJECTS}
        onClose={onClose}
      />
      <MobileHeaderLink
        title={t("header.contact")}
        href={PathConstants.CONTACT}
        onClose={onClose}
      />
    </div>
  );
};

export default MobileNavList;
