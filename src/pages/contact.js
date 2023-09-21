import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  return (
    <>
      <Nav />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Contactez-nous !
      </h2>
      <div className="md:grid max-w-5xl w-11/12 m-auto mt-10 md:grid-cols-3 pb-20 mb-0 flex  flex-col-reverse">
        <div className="ml-10 md:ml-0 mb-0 pb-20">
          {/* coordonnée restaurant */}
          <h3 className="text-lg font-bold mb-5 tracking-tight text-gray-900  mt-20 md:mt-0">
            Comment pouvons-nous vous aider ?
          </h3>
          <ul className="list-none ml-0 flex flex-col">
            <li className="mb-2">
              <span className="font-bold"><FontAwesomeIcon icon={faPhone} /></span>  0546987452
            </li>
            <li className="mb-2">
              <span className="font-bold"><FontAwesomeIcon icon={faEnvelope} /></span>  cinepalais@mail.com
            </li>
            <li className="mb-2">
              <span className="font-bold"><FontAwesomeIcon icon={faLocationDot} /></span>  15 rue du palais
              897458 palais
            </li>
          </ul>
        </div>
        {/* formulaire de contact */}
        <div class="flex items-center justify-center pl-12 col-span-2">
          <div class="mx-auto w-full max-w-[550px]">
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              {/* nom */}
              <div class="mb-5">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nom"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              {/* prénom */}
              <div class="mb-5">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Prénom"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              {/* email */}
              <div class="mb-5">
                <label
                  for="email"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Adresse Mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              {/* textarea */}
              <div class="mb-5">
                <label
                  for="message"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Ecrire votre message ici..."
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              {/* button envoyer non fonctionnel */}
              <div>
                <button class="hover:shadow-form rounded bg-black w-full hover:bg-gray-700 hover:text-white rounded-full py-3 px-8 text-base font-semibold text-white outline-none">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
