"use client";

import React from "react";
import { useCart } from "../context/CartContext"; // Import the CartContext
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const { cartItems, removeFromCart, totalProfit } = useCart(); // Use the CartContext

  if (cartItems.length === 0) {
    return (
      <div className="my-10 p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Din Kurv</h1>
        <p className="text-center text-gray-600">Din kurv er tom</p>
      </div>
    );
  }

  return (
    <div className="my-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Din Kurv</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex">
              <img
                src={item.image || "/placeholder.jpg"}
                alt={item.name}
                className="w-1/3 h-40 object-cover"
              />
              <div className="p-4 flex flex-col justify-between w-2/3">
                <div>
                  <h5 className="text-lg font-semibold text-gray-800">{item.name}</h5>
                  <p className="text-sm text-gray-600">Pris: {item.price} kr.</p>
                  <p className="text-sm text-gray-600">Antal: {item.quantity}</p>
                </div>
                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} className="mr-2" />
                  Fjern
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-gray-800">
          Din total pris:{" "}
          <span className="text-green-600 font-bold">{totalProfit.toFixed(2)} kr.</span>
        </h4>
        <button
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
          onClick={() => alert("Navigating to checkout...")} // Replace with actual navigation logic
        >
          Gå til Checkout
        </button>
      </div>
    </div>
  );
}