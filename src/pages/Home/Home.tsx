import { useTranslation } from "react-i18next";
import { WindowGraphic } from "../../components/shared/graphics";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex-grow mx-auto max-w-screen-xl xl:p-0 p-2 ">
      <div className={`flex justify-between items-end`}>
        <div>
          <h2 className="font-medium xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl text-xl w-full">
            {t("pages.home.name")}
          </h2>
          <p className="xl:text-4xl lg:text-2xl md:text-lg">
            {t("pages.home.role")}
          </p>
        </div>
        <div>
          <WindowGraphic />
        </div>
      </div>
      <div className="w-full lg:h-4 h-3 bg-black animate-[underline_1s_linear] origin-top-left"></div>
    </div>
  );
}
