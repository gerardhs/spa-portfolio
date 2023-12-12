import { useTranslation } from "react-i18next";
import { PATH_CONSTANTS, SOCIALS } from "../../../utils";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full">
      <div className="p-2 w-full mx-auto max-w-screen-2xl flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between">
        <span className="text-sm  text-gray-700 sm:text-center dark:text-gray-400">
          {t("footer.copyright")}
        </span>
        <ul className="flex flex-wrap items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              to={PATH_CONSTANTS.HOME}
              className="underline hover:no-underline hover:text-gray-900 m-4"
            >
              {t("footer.labels.home")}
            </Link>
          </li>
          <li>
            <Link
              to={PATH_CONSTANTS.ABOUT}
              className="underline hover:no-underline hover:text-gray-900 m-4"
            >
              {t("footer.labels.about")}
            </Link>
          </li>
          <li>
            <Link
              to={PATH_CONSTANTS.PROJECTS}
              className="underline hover:no-underline hover:text-gray-900 m-4"
            >
              {t("footer.labels.projects")}
            </Link>
          </li>
          <li>
            <Link
              to={PATH_CONSTANTS.CONTACT}
              className="underline hover:no-underline hover:text-gray-900 m-4"
            >
              {t("footer.labels.contact")}
            </Link>
          </li>
          <li>
            <Link
              to={PATH_CONSTANTS.PRIVACY}
              className="underline hover:no-underline hover:text-gray-900 m-4"
            >
              {t("footer.labels.privacy")}
            </Link>
          </li>
          <li className="flex items-center gap-6 m-4">
            <Link
              to={SOCIALS.GITHUB}
              className="p-1 rounded hover:text-gray-900"
              aria-label={t("links.github")}
            >
              {/* <!-- Github --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
            <Link
              to={SOCIALS.LINKEDIN}
              className="p-1 rounded hover:text-gray-900"
              aria-label={t("links.linkedin")}
            >
              {/* <!-- Linkedin --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
