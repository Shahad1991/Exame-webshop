"use client"
import { useState } from "react";
import { useCart } from "../context/CartContext";
import LikeButton from "../components/LikeButton";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [clicked, setClicked] = useState({});

  return (
    <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105 bg-white">
      <div className="relative w-full h-60 mb-4">
        <img
          src={product.image || '/placeholder.jpg'} // Use product image or placeholder
          alt={product.name}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          {product.category || 'Uncategorized'}
        </div>
        {/* LikeButton Component */}
        <div className="absolute top-2 right-2">
          <LikeButton />
        </div>
      </div>
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
      <p className="text-lg font-bold text-gray-800 mb-4">Price: {product.price}</p>
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
    </div>
  );
}