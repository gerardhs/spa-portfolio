import { useTranslation } from "react-i18next";
import { HomeGraphic } from "../../components/shared/graphics";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex-grow mx-auto max-w-screen-xl xl:p-0 p-2 ">
      <div className={`flex justify-between items-end`}>
        <div className="reveal md:w-2/5 w-1/2">
          Jenkins integration test
          <h2 className="font-medium xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-md">
            {t("pages.home.name")}
          </h2>
          <p className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg text-sm">
            {t("pages.home.role")}
          </p>
        </div>
        <div className="md:w-3/5 w-1/2">
          <HomeGraphic />
        </div>
      </div>
      <div className="reveal-underline md:h-4 h-[0.6rem] md:w-2/5 w-1/2"></div>
    </div>
  );
}
