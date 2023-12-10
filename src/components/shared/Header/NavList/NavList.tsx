import { HeaderLink } from "../..";
import { useTranslation } from "react-i18next";
import { PATH_CONSTANTS } from "../../../../utils";

export default function NavList() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
      <HeaderLink title={t("header.labels.home")} href={PATH_CONSTANTS.HOME} />
      <HeaderLink
        title={t("header.labels.about")}
        href={PATH_CONSTANTS.ABOUT}
      />
      <HeaderLink
        title={t("header.labels.projects")}
        href={PATH_CONSTANTS.PROJECTS}
      />
      <HeaderLink
        title={t("header.labels.contact")}
        href={PATH_CONSTANTS.CONTACT}
      />
    </div>
  );
}
