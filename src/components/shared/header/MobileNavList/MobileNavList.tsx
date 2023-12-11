import { FC } from "react";
import { MobileHeaderLink } from "../..";
import { useTranslation } from "react-i18next";
import { PATH_CONSTANTS } from "../../../../utils";

interface MobileHeaderLinkProps {
  onClose: () => void;
}

const MobileNavList: FC<MobileHeaderLinkProps> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="border-y border-neutral-500 divide-y divide-neutral-500 overflow-x-hidden flex flex-col justify-center">
      <MobileHeaderLink
        title={t("header.labels.home")}
        href={PATH_CONSTANTS.HOME}
        onClose={onClose}
      />
      <MobileHeaderLink
        title={t("header.labels.about")}
        href={PATH_CONSTANTS.ABOUT}
        onClose={onClose}
      />
      <MobileHeaderLink
        title={t("header.labels.projects")}
        href={PATH_CONSTANTS.PROJECTS}
        onClose={onClose}
      />
      <MobileHeaderLink
        title={t("header.labels.contact")}
        href={PATH_CONSTANTS.CONTACT}
        onClose={onClose}
      />
    </div>
  );
};

export default MobileNavList;
