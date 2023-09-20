import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <>
      <Nav />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Contactez-nous !
      </h2>
      <div className="grid max-w-5xl w-11/12 m-auto mt-10 grid-cols-3 mb-20">
        <div>
          <h3 className="text-lg font-bold mb-5 tracking-tight text-gray-900">
            Comment pouvons-nous vous aider ?
          </h3>
          <ul className="list-none ml-0 flex flex-col ">
            <li className="mb-2">
              <span className="font-bold">Tel:</span> 0546987452
            </li>
            <li className="mb-2">
              <span className="font-bold">Mail:</span> cinepalais@mail.com
            </li>
            <li className="mb-2">
              <span className="font-bold">Adresse:</span> 15 rue du palais
              897458 palais
            </li>
          </ul>
        </div>
        <div class="flex items-center justify-center pl-12 col-span-2">
          <div class="mx-auto w-full max-w-[550px]">
            <form action="https://formbold.com/s/FORM_ID" method="POST">
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
                  placeholder="Last Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
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
                  placeholder="First Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
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
                  placeholder="Write your message"
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button class="hover:shadow-form rounded bg-black w-full hover:bg-gray-700 hover:text-white rounded-full py-3 px-8 text-base font-semibold text-white outline-none">
                  Submit
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
