import React from "react";

export default function Login() {
  const queryParameters = new URLSearchParams(window.location.search);
  const type = queryParameters.get("type");

  if (type === "login") {
    var sentence = "Connexion";
    var btnText = "Se connecter";
    var text = "Vous n'avez pas de compte ? S'inscrire";
    var textRedirect = "/login?type=signup"
  } else {
    var sentence = "Inscription";
    var btnText = "S'inscrire";
    var text = "Vous avez déjà un compte ? Se connecter";
    var textRedirect = "/login?type=login"
  }

  return (
    <>
      <div class="columns-2 h-screen gap-10">
        <div class="w-full h-screen">
          <img
            class="object-cover h-full w-full overflow-hidden"
            src="/assets/popcorn.jpg"
            alt="Pop corn"
          />
        </div>

        <div class="w-full h-screen mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {sentence}
          </h2>
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-black"
              >
                Email
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-lg border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-black"
                >
                  Mot de passe
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-lg border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-lg bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {btnText}
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            <a
              href={textRedirect}
              class="font-semibold leading-6 text-black hover:text-gray-700"
            >
              {text}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
