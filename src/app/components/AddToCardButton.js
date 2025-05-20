"use client"
import { useState } from "react";
import { useCart } from "../context/CartContext";


export default function AddToCardButton({ product }) {
  const { addToCart } = useCart();
  const [clicked, setClicked] = useState({});

  return (  
      <button
        onClick={() => {
          addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
          setClicked((prevState) => ({ ...prevState, [product.id]: true }));
        }}
        className={`w-full py-2 px-4 rounded text-white ${
          clicked[product.id] ? "bg-green-500" : "bg-green-800"
        }`}
      >
        {clicked[product.id] ? "Added to Cart" : "Add to Cart"}
      </button>
   
  );
}