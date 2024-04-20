import { FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <div className=" max-w-screen-xla flex w-full flex-col border-t-2 border-gray-300 bg-white px-4 py-4 dark:bg-gray-900 sm:px-6 lg:px-32">
      <div className="flex flex-col items-center gap-4 rounded-lg bg-primary p-6 shadow-lg sm:flex-row sm:justify-between">
        <strong className="text-xl text-white sm:text-xl">
          Make Your Next Career Move!
        </strong>
        <a
          className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-primary hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
          href="#"
        >
          <span className="text-sm font-medium"> Let's Get Started </span>

          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8  sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            About Us
          </p>

          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Company History
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Meet the Team
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Employee Handbook
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            Our Services
          </p>

          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Web Development
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Web Design
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Marketing
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Google Ads
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            Resources
          </p>

          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Online Guides
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Conference Notes
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Forum
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Downloads
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Upcoming Events
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            Helpful Links
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                FAQs
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <ul className="flex justify-center gap-6 sm:justify-end">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-primary transition hover:text-secondary"
            >
              <span className="sr-only">Facebook</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-primary transition hover:text-secondary"
            >
              <span className="sr-only">Instagram</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-primary transition hover:text-secondary"
            >
              <span className="sr-only">Twitter</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-primary transition hover:text-secondary"
            >
              <span className="sr-only">GitHub</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-primary transition hover:text-secondary"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
          </li>
        </ul>

        <div className="mt-10 sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-primary sm:justify-start"></div>

          <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
