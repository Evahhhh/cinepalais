import React from "react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "A propos", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Footer = () => {
  return (
    <footer className="border-gray-100 border-t h-1.5 ">
        <div className="flex justify-center pd-6px">
          <div className="absolute left-6 pt-2">
              <img
                className="h-16 w-auto hidden md:block"
                src="/assets/logo.png"
                alt="CinéPalais"
              />
          </div>
          <div>
            {navigation.map((item) => (
              <Link to={item.href}>
                <button
                  key={item.name}
                  className={classNames(
                    "text-black-300",
                    "rounded-full px-3 py-2 text-sm font-medium"
                  )}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      <div className="flex space-x-4 justify-center align-center text-xs md:text-base md:pb-0 pb-2">
        <p>Mentions légales</p>
        <p>© 2023 CinéPalais</p>
        <p>Politique de confidentialité</p>
      </div>
    </footer>
  );
};
export default Footer;
