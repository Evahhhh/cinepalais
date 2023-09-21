import { React } from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "A propos", href: "/about" },
  { name: "Contact", href: "/contact" },
  { id:"icon", name: <FontAwesomeIcon icon={faCartShopping} />, href: "/cart" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="mt-5 bg-light-800 border-gray-100 border-b">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className={classNames("relative inline-flex items-center justify-center rounded-lg",
                " p-2 text-gray-400 hover:bg-gray-700 hover:text-white",
                " focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white")}>
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Ouvrir le menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-20 w-20"
                    src="/assets/logo.png"
                    alt="CinéPalais"
                  />
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link to={item.href}>
                        <button
                          key={item.name}
                          className={classNames(
                            item.id 
                              ? " hover:text-gray-700 "
                              : "hover:bg-black hover:text-white",
                            "text-black-300 my-5 cursor-pointer",
                            "rounded-full px-3 py-2 text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col-reverse -top-11 md:flex-row absolute md:gap-5 inset-y-0 right-0 justify-center md:items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <Link to="/login?type=login">
                  <button
                    className={classNames(
                      "text-black-300 md:hover:bg-black md:hover:text-white hover:text-gray-700",
                      "rounded-full px-3 md:py-2 text-sm font-medium"
                    )}
                  >
                    Connexion
                  </button>
                </Link>

                <Link to="/login?type=signup">
                  <button
                    className={classNames(
                      "text-white bg-black hover:bg-gray-700 mt-3 md:mt-0",
                      "rounded-full px-3 py-1 text-sm font-medium"
                    )}
                  >
                    Inscription
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    "text-black-300",
                    item.id 
                      ? " hover:text-gray-700 "
                      : "hover:bg-black hover:text-white",
                    "block rounded-lg px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}