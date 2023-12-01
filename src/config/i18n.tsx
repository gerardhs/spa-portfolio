import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationCAT from "../locales/cat/translation.json";
import translationCAS from "../locales/cas/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  cat: {
    translation: translationCAT,
  },
  cas: {
    translation: translationCAS,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18next;
