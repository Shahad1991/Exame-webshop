// ✅ Dette er en Server Component, fordi:
// - Den indeholder ikke "use client" i toppen
// - Den bruger ingen React hooks som useState eller useEffect
// - Den har ingen interaktive elementer (f.eks. onClick)
// - <Link> fra 'next/link' kan bruges i Server Components, da Next.js gør dem interaktive automatisk ved hydration

import Link from 'next/link';

const Header = () => {
  return (
    <nav className="text-white py-10" style={{ backgroundColor: '#082804' }}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fresh and Green</h1>
        <ul className="list-none p-0 flex space-x-10">
          <li><Link href="/" className="hover:underline text-xl">Home</Link></li>
          <li><Link href="/shop" className="hover:underline text-xl">Shop</Link></li>
          <li><Link href="/cart" className="hover:underline text-xl">Cart</Link></li>
          <li><Link href="/checkout" className="hover:underline text-xl">Checkout</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
