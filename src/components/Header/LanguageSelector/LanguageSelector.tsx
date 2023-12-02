import { useTranslation } from "react-i18next";

const LanguageSelector = () => {

  const { t, i18n } = useTranslation();

 
 const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('selectedLanguage', language);
 };

 return (
    <div>
      <label htmlFor="language">Choose a language:</label>
      <select id="language" value={localStorage.getItem('selectedLanguage') || 'en'} onChange={(e) =>  changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="ca">Catalan</option>
      </select>
    </div>
 );
};

export default LanguageSelector;