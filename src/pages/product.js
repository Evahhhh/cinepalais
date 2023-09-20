import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import products from "../mockData";

export default function Product() {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const product = products.find((product) => product.id == id);

  return (
    <>
      <Nav />

      <div className="columns-2 px-20 py-10 gap-10 ">
        <img
          className="object-cover w-full h-80 mx-auto rounded-lg"
          src={product.imageSrc}
          alt={product.imageAlt}
        ></img>
        <div className="flex flex-col gap-3 h-full">
            <h1 className="text-xl font-bold">{product.name}</h1>

            <div class="flex items-center space-x-1">
              {Array.from(Array(product.rating), () => {
                return (
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                );
              })}

              {Array.from(Array(5 - product.rating), () => {
                return (
                  <svg
                    class="w-4 h-4 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                );
              })}
            </div>
            <div className="flex justify-between">
              <p className="text-black font-bold">{product.price}€</p>
              <p className="text-black font-bold">Quantité : 1</p>
            </div>
            <button className="text-white bg-black hover:bg-gray-700 hover:text-white rounded-full px-3 py-2 my-8 text-sm font-medium">
              Ajouter au panier
            </button>
            <div className="flex justify-between border-gray-200 border-b pb-3">
              <p className="text-black font-bold">A emporter</p>
              <p className="text-black">{product.emporter}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-black font-bold">Livraison</p>
              <p className="text-black">{product.livraison}</p>
            </div>
        </div>
      </div>
      <div className="mx-auto w-2/4 p-10">
        <h2 className="text-lg font-bold flex justify-center">Description</h2>
        <p className="text-black text-justify	">{product.description}</p>
      </div>

      <Footer />
    </>
  );
}
