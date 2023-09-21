import Nav from "../components/nav";
import productsList from "../mockData";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [allProducts, setAllProducts] = useState(
    fusionnerNumerosIdentiques(
      JSON.parse(localStorage.getItem("productsList")) || []
    )
  );
  let totalPrice = 0;
  return (
    <>
      <Nav />
      <div>
        <div className="container mx-auto mt-10 mb-0 pb-20">
          <div className="flex flex-col lg:flex-row shadow-md my-10">
            <div className="lg:w-3/4 w-full bg-white px-10 py-10">
              {/* tritre et nb produit dans cart */}
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Panier</h1>
                <h2 className="text-xl">
                  {allProducts.flatMap((v) => v.flat()).length} Produits
                </h2>
              </div>
              {/* titre colonne */}
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Nom du plat
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantité
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Prix
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>
              {/* boucle liste plat présant dans localstorage */}
              {allProducts.map((id) => {
                const product = productsList.find(
                  (product) => product.id == id[0]
                );
                totalPrice = totalPrice + product.price;
                return (
                  <>
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                      {/* en-tete plat */}
                      <div className="flex w-2/5 h-full">
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          className=" cursor-pointer w-28 h-full"
                        >
                          <img
                            className="object-cover"
                            src={product.imageSrc}
                            alt={product.imageAlt}
                          />
                        </Link>
                        <div className="flex flex-col ml-4 w-20 md:w-40">
                          <p className="font-bold text-sm w-24 whitespace-nowrap md:w-40 overflow-hidden text-ellipsis">
                            {product.name}
                          </p>
                          <span className="text-gray-700 text-xs mb-2">
                            {product.category}
                          </span>
                          <a
                            className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                            onClick={() => removeProduct(product.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </a>
                        </div>
                      </div>
                      {/* Info pécunière du plat */}
                      <div className="flex justify-center w-1/5">
                        <span className="text-center w-1/5 font-semibold text-sm">
                          {id.length}
                        </span>
                      </div>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        {product.price}€
                      </span>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        {product.price * id.length}€
                      </span>
                    </div>
                  </>
                );
              })}

              <a
                href="/"
                className="flex font-semibold text-black-300 px-3 text-sm font-medium mt-10"
              >
                <svg
                  className="fill-current mr-2 text-black-300 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continuer mes achats
              </a>
            </div>

            <div
              id="summary"
              className="lg:w-1/4 w-full m-auto lg:m-0 px-8 py-10"
            >
              <h1 className="font-semibold lg:text-2xl text-xl border-b pb-2 lg:pb-8">
                Total du panier
              </h1>
              <div className="flex justify-between md:mt-10 mt-5 mb-5">
                <span className="text-sm uppercase">
                  {allProducts.flatMap((v) => v.flat()).length} Produits
                </span>
                <span className="font-bold text-sm">{totalPrice}€</span>
              </div>
              <div className="border-t mt-8">
                <button
                  onClick={() => removeAllProducts(totalPrice)}
                  className="text-white uppercase w-full text-white bg-black hover:bg-gray-700 mt-3 md:mt-0 px-3 py-1 text-sm font-medium"
                >
                  Payer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function fusionnerNumerosIdentiques(tableau) {
  const resultat = [];
  let numeroActuel = null;
  let groupeActuel = null;

  for (const numero of tableau) {
    if (numero !== numeroActuel) {
      if (groupeActuel) {
        resultat.push(groupeActuel);
      }
      numeroActuel = numero;
      groupeActuel = [numero];
    } else {
      groupeActuel.push(numero);
    }
  }

  if (groupeActuel) {
    resultat.push(groupeActuel);
  }

  return resultat;
}

function removeProduct(productId) {
  // Récupérer le tableau du Local Storage
  let cart = JSON.parse(localStorage.getItem("productsList")) || [];

  // Retirer le nombre du tableau
  cart = cart.filter((item) => item !== productId);

  // Mettre à jour le Local Storage avec le tableau modifié
  localStorage.setItem("productsList", JSON.stringify(cart));
  window.location.reload();
}

function removeAllProducts(totalPrice) {
  //message
  alert("Vous venez de perdre " + totalPrice + "€ avec succès !");
  //vider le local storage
  localStorage.clear();
  window.location.reload();
}