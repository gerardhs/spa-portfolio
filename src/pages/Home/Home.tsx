import { useTranslation } from "react-i18next";
import { HomeGraphic } from "../../components/shared/graphics";
import { MutableRefObject, useLayoutEffect, useRef } from "react";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex-grow mx-auto max-w-screen-xl xl:p-0 p-2 ">
      <div className={`flex justify-between items-end`}>
        <div className="reveal w-2/5">
          <h2 className="font-medium xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl text-md">
            {t("pages.home.name")}
          </h2>
          <p className="xl:text-4xl lg:text-2xl md:text-xl sm:text-lg text-sm">
            {t("pages.home.role")}
          </p>
        </div>
        <div className="w-3/5">
          <HomeGraphic />
        </div>
      </div>
      <div className="reveal-underline md:h-4 h-[0.6rem] w-2/5"></div>
    </div>
  );
}
