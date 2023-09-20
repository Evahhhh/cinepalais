import React from "react";
import Nav from "../components/nav";
import ProductsList from "../components/productsListHome";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="w-4/5 max-w-5xl m-auto">
        <div className="flex justify-center mt-10 ">
          <img
            className="object-cover h-52	w-full  overflow-hidden	md:block hidden"
            src="/assets/filmRoll.jpg"
            alt="film roll"
          />
        </div>
        <ProductsList />
      </div>
      <Footer />
    </>
  );
}
