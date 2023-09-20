import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import ContactUs from "../components/contactUs";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Nav />
        <h2 className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          A propos de nous
        </h2>
        <div className="w-4/5 max-w-5xl m-auto grid grid-rows-2 grid-flow-col gap-20 text-justify">
        
            <img src="/assets/filmRoll.jpg"
            alt="film roll"
            />
            <p className="flex justify-center items-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.</p>
        
            <p className="flex justify-center items-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.</p>
            
            <img src="/assets/filmRoll.jpg"
            alt="film roll"
            />
          </div>
        <div className="flex justify-center my-20">         
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42997.97445181152!2d-2.789650748225687!3d47.65774203866663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48101e84c37de291%3A0xb9f358307b233d13!2sVannes!5e0!3m2!1sfr!2sfr!4v1695212372632!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-4/5 h-96 max-w-5xl m-auto"></iframe>
        </div>
        <ContactUs />
      <Footer />
    </>
  );
}

