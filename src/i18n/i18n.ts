import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en.json";
import translationES from "./es.json";

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Idioma por defecto.
  fallbackLng: "es",
  interpolation: {
    escapeValue: false, // React ya hace el escape de los valores.
  },
});

export default i18n;
