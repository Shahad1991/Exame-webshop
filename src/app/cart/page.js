// app/cart/page.js (Server Component)
import CartDisplay from "../components/CartDisplay";
import Link from "next/link";

export default function Cart() {
  return (
      <div className="p-6 min-h-screen">
          <CartDisplay />
        <div className="mt-8">
        <Link
         href="/checkout"
             className="inline-block bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300 text-center"
         >
               Gå til Checkout
        </Link>
        </div>
      </div>
    );

  
  
}