import { useTranslation } from "react-i18next";
import { WindowGraphic } from "../../components/shared/graphics";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex-grow mx-auto max-w-screen-xl">
      <div className="flex justify-between items-end border-b-8 border-black">
        <div>
          <h2 className="font-medium text-6xl">{t("pages.home.name")}</h2>
          <p className="text-4xl">{t("pages.home.role")}</p>
        </div>
        <div>
          <WindowGraphic />
        </div>
      </div>
    </div>
  );
}
