import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import ContactUs from "../components/contactUs";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Nav />
      <h2 className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10">
        A propos de nous
      </h2>
      <div className="mx-auto max-w-2xl py-5 sm:py-10 lg:max-w-7xl">
        <div className="w-4/5 mx-auto grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2 xl:gap-x-10">
          <img
            src="/assets/restaurant.png"
            className="h-64 object-cover w-full"
            alt="restaurant"
          />
          <p className="flex justify-center text-justify items-center">
            Bienvenue dans l'univers enchanteur de CinéPalais, où la magie du
            cinéma prend vie à travers la cuisine. Situé au cœur de Vannes,
            notre restaurant vous propose une expérience gastronomique unique en
            son genre. Imaginez déguster les plats iconiques des films qui ont
            marqué votre vie, le tout dans le confort de votre chez-vous ou à
            emporter pour une soirée cinéma inoubliable. Chez CinéPalais, nous
            croyons que chaque plat raconte une histoire, et nous avons hâte de
            vous emmener pour un voyage culinaire à travers l'écran argenté.
          </p>
          <p className="hidden lg:flex justify-center text-justify items-center pt-5">
            Chez CinéPalais, nous sommes bien plus qu'un restaurant, nous sommes
            les gardiens des saveurs cinématographiques. Notre équipe passionnée
            met tout en œuvre pour recréer avec amour et créativité les plats
            emblématiques de vos films préférés. Que vous rêviez de goûter à la
            Ratatouille qui a conquis le palais de Paris, ou de vous délecter de
            la pâte à tartiner qui a envoûté l'imaginaire de tant de
            générations, CinéPalais vous offre une expérience gustative digne
            des plus grands écrans. Rejoignez-nous pour un festin qui transcende
            les frontières du temps et de l'espace, et laissez-nous vous emmener
            dans un voyage où la nourriture devient la star de votre propre film
            culinaire.
          </p>
          <img
            src="/assets/plats.png"
            className="h-64 object-cover w-full pt-5"
            alt="plats"
          />

          <p className="flex lg:hidden justify-center text-justify items-center pt-5">
            Chez CinéPalais, nous sommes bien plus qu'un restaurant, nous sommes
            les gardiens des saveurs cinématographiques. Notre équipe passionnée
            met tout en œuvre pour recréer avec amour et créativité les plats
            emblématiques de vos films préférés. Que vous rêviez de goûter à la
            Ratatouille qui a conquis le palais de Paris, ou de vous délecter de
            la pâte à tartiner qui a envoûté l'imaginaire de tant de
            générations, CinéPalais vous offre une expérience gustative digne
            des plus grands écrans. Rejoignez-nous pour un festin qui transcende
            les frontières du temps et de l'espace, et laissez-nous vous emmener
            dans un voyage où la nourriture devient la star de votre propre film
            culinaire.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42997.97445181152!2d-2.789650748225687!3d47.65774203866663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48101e84c37de291%3A0xb9f358307b233d13!2sVannes!5e0!3m2!1sfr!2sfr!4v1695212372632!5m2!1sfr!2sfr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-4/5 h-96 max-w-5xl m-auto"
        ></iframe>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}
