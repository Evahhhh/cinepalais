import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex justify-center mt-10 ">
      <img className="object-cover h-52	w-9/12 overflow-hidden rounded-lg	" src="/assets/filmRoll.jpg" alt="film roll" />
      </div>
      <Footer />
    </>
  );
}