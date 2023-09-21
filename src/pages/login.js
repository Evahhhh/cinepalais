import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const queryParameters = new URLSearchParams(window.location.search);
  const type = queryParameters.get("type");

  if (type === "login") {
    var sentence = "Connexion";
    var btnText = "Se connecter";
    var text = "Vous n'avez pas de compte ? S'inscrire";
    var textRedirect = "/login?type=signup";
  } else {
    var sentence = "Inscription";
    var btnText = "S'inscrire";
    var text = "Vous avez déjà un compte ? Se connecter";
    var textRedirect = "/login?type=login";
  }

  return (
    <>
      <div className="md:columns-2 h-screen gap-10">
        <div className="hidden sm:block w-full h-screen">
          <img
            className="object-cover h-full w-full overflow-hidden"
            src="/assets/popcorn.jpg"
            alt="Pop corn"
          />
        </div>

        <div className="p-10 w-full h-screen mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {sentence}
          </h2>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-black"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="block w-full rounded-lg border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-black"
                >
                  Mot de passe
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="block w-full rounded-lg border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700"
              >
                {btnText}
              </button>
            </div>
          </form>
          <Link
            className="flex w-full justify-center text-black-300 hover:bg-black hover:text-white my-3 rounded-lg px-3 py-2 text-sm font-medium"
            to="/"
          >
            Annuler
          </Link>

          <p className="mt-10 text-center text-sm text-gray-500">
            <a
              href={textRedirect}
              className="font-semibold leading-6 text-black hover:text-gray-700"
            >
              {text}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
