import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <>
      <Nav />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Contactez-nous !
      </h2>
      <div className="columns-2 gap-10">
        <div className="inline-block ml-20 mt-10">
          <h3 class="text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            Comment pouvons-nous vous aider ?
          </h3>
          <ul className="list-disc mt-10">
            <li>Numéro de téléphone</li>
            <li>Adresse mail</li>
            <li>Adresse où nous trouver</li>
          </ul>
        </div>
        <div className="mr-20 mt-10">
            
        </div>
      </div>
      <Footer />
    </>
  );
}
