import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";

import products from "../mockData";

export default function Product(props) {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((product) => product.id == id);

  return (
    <>
      <Nav />

      <div className=" md:columns-2 w-5/6 m-auto py-10 gap-10 columns-0 max-w-5xl ">
        {/* img plat */}
        <img
          className="object-cover w-full h-80 mx-auto rounded-lg"
          src={product.imageSrc}
          alt={product.imageAlt}
        ></img>
        <div className="flex flex-col gap-3 h-full">
          {/* Nom plat */}
          <h1 className="text-xl font-bold pt-2">{product.name}</h1>
          {/* Etoile avis */}
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
            {/* prix plat */}
            <p className="text-black font-bold text-xl ">{product.price}€</p>
            <div className="flex">
              {/* quantité plat */}
            <p className="text-black font-bold">Quantité :</p>
            <select onChange = {(e) => setQuantity(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </div>
            
          </div>
          {/* button ajout panier */}
          <button
            className="text-white bg-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 my-8 text-sm font-medium"
            onClick={() => addToCart(product.id, quantity)}
          >
            Ajouter au panier
          </button>
          {/* indication emporter et livraison */}
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
      {/* description du plat */}
      <div className="mx-auto w-3/4 p-6 pb-20 mb-0">
        <h2 className="text-lg font-bold flex justify-center">Description</h2>
        <p className="text-black text-center	">{product.description}</p>
      </div>

      <Footer />
    </>
  );
}

const addToCart = async (productId, quantity) => {
  //récupérer la liste d'id ou créer un tableau vide
  let cart = JSON.parse(localStorage.getItem("productsList")) || [];

  for(let i=0; i<quantity; i++){
    //ajout de l'id au tableau
    cart.push(productId);
  }
  
  //trier le tableau
  sortArray(cart);
  //mettre à jour dans le local storage
  await localStorage.setItem("productsList", JSON.stringify(cart));
  //redirection
  window.location.href = "/cart";
};

function sortArray(tableau) {
  return tableau.sort((a, b) => a - b);
}