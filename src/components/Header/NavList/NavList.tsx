import { t } from "i18next";
import { HeaderLink } from "../..";
import { PathConstants } from "../../../routes";

export default function NavList() {
  return (
    <div className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
      <HeaderLink title={t("header.home")} href={PathConstants.HOME} />
      <HeaderLink title={t("header.about")} href={PathConstants.ABOUT} />
      <HeaderLink title={t("header.projects")} href={PathConstants.PROJECTS} />
      <HeaderLink title={t("header.contact")} href={PathConstants.CONTACT} />
    </div>
  );
}
