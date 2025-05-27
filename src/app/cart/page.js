// app/cart/page.js (Server Component)
import CartDisplay from "../components/CartDisplay";
import Link from "next/link";

export default function Cart() {
  return (
      <div className="p-6 min-h-screen">
          <CartDisplay />
        <div className="mt-8">
          <Link href="/checkout">  
              Gå til Checkout 
          </Link>
        </div>
      </div>
    );

  
  
}