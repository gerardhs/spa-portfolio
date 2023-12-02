import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { LOCALES, LOCAL_STORAGE_KEYS } from "../../../utils";
import { Transition } from "@headlessui/react";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const dropdownRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const buttonRef: RefObject<HTMLButtonElement> =
    useRef<HTMLButtonElement>(null);
  const [isDropdownOpen, setIsDropdownOpen]: [
    boolean,
    Dispatch<SetStateAction<boolean>>,
  ] = useState<boolean>(false);

  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
    localStorage.setItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE, language);
  };

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isDropdownOpen &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      } else if (
        buttonRef.current &&
        !isDropdownOpen &&
        buttonRef.current.contains(event.target as Node)
      ) {
        buttonRef.current.blur();
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef, buttonRef, isDropdownOpen]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="flex px-3 py-1.5 font-black border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={toggleDropdown}
      >
        <GlobeAltIcon className="h-4 w-4 me-1 mt-0.5" strokeWidth={1} />
        <span>{i18n.language.toLocaleUpperCase()}</span>
        <ChevronDownIcon
          className={`h-4 w-4 ml-2 mt-[0.2rem] transition-transform duration-500 ease-in-out transform ${
            isDropdownOpen
              ? "translate-y-[-0.1em] rotate-[-180deg]"
              : "rotate-0"
          }`}
        ></ChevronDownIcon>
      </button>

      <Transition
        show={isDropdownOpen}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          ref={dropdownRef}
          className={
            "z-10 font-black absolute translate-y-2  bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          }
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {i18n.language !== LOCALES.ENGLISH && (
              <li
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                onClick={() => {
                  changeLanguage(LOCALES.ENGLISH);
                  toggleDropdown();
                }}
              >
                {t("header.language.en")}
              </li>
            )}
            {i18n.language !== LOCALES.CASTELLANO && (
              <li
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                onClick={() => {
                  changeLanguage(LOCALES.CASTELLANO);
                  toggleDropdown();
                }}
              >
                {t("header.language.es")}
              </li>
            )}
            {i18n.language !== LOCALES.CATALA && (
              <li
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                onClick={() => {
                  changeLanguage(LOCALES.CATALA);
                  toggleDropdown();
                }}
              >
                {t("header.language.ca")}
              </li>
            )}
          </ul>
        </div>
      </Transition>
    </>
  );
};

export default LanguageSelector;
