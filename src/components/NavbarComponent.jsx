import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../data/data";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [theme, setTheme] = useState("light");

  const changeBackgroundColor = () => {
    if (window.scrollY > 20) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  const handleButton = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="bg-white">
      <header
        className={
          changeColor
            ? "inset-x-0 top-0 z-50 fixed shadow dark:shadow-orange-500 bg-white ease-out transition duration-700 delay-200 dark:bg-black dark:text-white"
            : "inset-x-0 top-0 z-50 fixed bg-white dark:bg-black dark:text-white"
        }
      >
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-2xl font-extrabold text-orange-500 lg:ms-20">
                JUNX27
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.href}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold leading-6 text-black hover:text-white"
                    : "text-sm font-semibold leading-6 text-gray-900 dark:text-orange-500 px-4 py-2 hover:text-orange-600 dark:hover:text-white"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
            <NavLink to="https://github.com/Junx27" target="blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="mx-3 hover:text-orange-500 dark:hover:text-white dark:text-orange-500 text-2xl"
              />
            </NavLink>
            <button
              onClick={handleButton}
              className="dark:text-orange-500 text-2xl dark:hover:text-white hover:text-orange-500"
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-2xl font-extrabold text-orange-500">
                  JUNX27
                </span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 text-center">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.href}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold leading-6 hover:text-orange-600"
                          : "text-sm font-semibold leading-6 text-gray-900 px-4 py-2 hover:text-orange-600"
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="py-6">
                  <div className="flex justify-center items-center">
                    <NavLink to="https://github.com/Junx27" target="blank">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="mx-3 hover:text-orange-500 dark:hover:text-white dark:text-orange-500 text-2xl"
                      />{" "}
                      github
                    </NavLink>
                    <button
                      onClick={handleButton}
                      className="dark:text-orange-500 text-2xl dark:hover:text-white hover:text-orange-500 ps-5"
                    >
                      <FontAwesomeIcon icon={faMoon} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
