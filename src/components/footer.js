import React from "react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Accueil", href: "/home" },
  { name: "A propos", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Footer = () => {
  return (
    <div className="border-gray-100 border-t">
      <div className="mx-8">
        <p>CinéPalais</p>
        <div>
          {navigation.map((item) => (
            <Link to={item.href}>
              <button
                key={item.name}
                className={classNames(
                  "text-black-300",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 mx- justify-center ">
        <p>Mentions légales</p>
        <p>© 2023 CinéPalais</p>
        <p>Politique de confidentialité</p>
      </div>
    </div>
  );
};
export default Footer;
