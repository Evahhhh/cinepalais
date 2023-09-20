import products from "../mockData";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsList() {
  //filtre en cours d'utilisation
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="bg-white">
      <div className="flex align-center gap-5 pt-10">
        <button
          onClick={() => setActiveFilter("all")}
          className={
            activeFilter !== "all"
              ? "text-black-300 hover:bg-black hover:text-white py-2 px-3 rounded-full text-sm font-medium"
              : "bg-black hover:bg-gray-700 text-white py-2 px-3 rounded-full"
          }
        >
          Voir tout
        </button>
        <button
          onClick={() => setActiveFilter("animation")}
          className={
            activeFilter !== "animation"
              ? "text-black-300 hover:bg-black hover:text-white py-2 px-3 rounded-full text-sm font-medium"
              : "bg-black hover:bg-gray-700 text-white py-2 px-3 rounded-full"
          }
        >
          Animation
        </button>
        <button
          onClick={() => setActiveFilter("film")}
          className={
            activeFilter !== "film"
              ? "text-black-300 hover:bg-black hover:text-white py-2 px-3 rounded-full text-sm font-medium"
              : "bg-black hover:bg-gray-700 text-white py-2 px-3 rounded-full"
          }
        >
          Film
        </button>
      </div>

      <div className="mx-auto max-w-2xl  py-15  sm:py-24 lg:max-w-7xl ">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {/* {products.map((filteredProduct) => ( */}
          {products
            .filter((product) => {
              if(activeFilter === "all") return true;
              else return product.category === activeFilter;
            })
            .map((filteredProduct) => (
              <Link
                key={filteredProduct.id}
                to={`/product/${filteredProduct.id}`}
                className="link group shadow-md rounded-md hover:cursor-pointer "
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={filteredProduct.imageSrc}
                    alt={filteredProduct.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-2 mb-0 text-gray-700 text-lg pl-5 ">
                  {filteredProduct.name}
                </h3>
                <p className="font-medium text-gray-900 pl-5 pb-4">
                  {filteredProduct.price}€
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
