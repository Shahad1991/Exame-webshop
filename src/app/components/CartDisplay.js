"use client";

import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export default function CartDisplay({ initialCartItems = [], initialTotal = 0 }) {
  // Brug server-data som initial state
  const { cartItems = initialCartItems, removeFromCart, totalProfit } = useCart();

  // Sikrer, at totalProfit og initialTotal altid er numeriske
  const total = totalProfit !== undefined && !isNaN(totalProfit)
    ? totalProfit
    : initialTotal;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Din Indkøbskurv</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Din kurv er tom.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image || "/placeholder.jpg"}
                alt={item.name}
                className="w-1/3 h-40 object-cover"
              />
              <div className="p-4 flex flex-col justify-between w-2/3">
                <div>
                  <h5 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h5>
                  <p className="text-sm text-gray-600">Pris: {item.price} kr.</p>
                  <p className="text-sm text-gray-600">
                    Antal: {item.quantity} stk.
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    Subtotal: {(item.price * item.quantity).toFixed(2)} kr.
                  </p>
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
          ))}
        </div>
      )}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-gray-800">
          Din total pris:{" "}
          <span className="text-green-600 font-bold">
            {total.toFixed(2)} kr.
          </span>
        </h4>
        
      </div>
    </div>
  );
}