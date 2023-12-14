import { useTranslation } from "react-i18next";
import { HomeGraphic } from "../../components/shared/graphics";
import { useEffect, useState } from "react";

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    // Update the width of div2 to be the same as div1
    let one: any = document.getElementById("reveal-div");
    let two: any = document.getElementById("underline-div");
    let style: any = window.getComputedStyle(one);
    let wdt = style.getPropertyValue("width");
    two.style.width = wdt;
  }, []);

  return (
    <div className="flex-grow mx-auto max-w-screen-xl xl:p-0 p-2 ">
      <div className={`flex justify-between items-end`}>
        <div id="reveal-div" className="reveal">
          <h2 className="font-medium xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl text-md w-full">
            <span></span>
            {t("pages.home.name")}
          </h2>
          <p className="xl:text-4xl lg:text-2xl md:text-xl sm:text-lg text-sm">
            {t("pages.home.role")}
          </p>
        </div>
        <div>
          <HomeGraphic />
        </div>
      </div>
      <div
        id="underline-div"
        className="reveal-underline md:h-4 h-[0.6rem]"
      ></div>
    </div>
  );
}
