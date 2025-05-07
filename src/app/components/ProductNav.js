'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Fruit', path: '/fruit' },
  { name: 'Vegitables', path: '/vegitables' },
];

export default function ProductNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-green-200 py-10 shadow-md flex justify-center items-center w-full">
      
      <div className="flex gap-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={` text-xl px-3 py-1 rounded ${
              pathname === item.path
                ? 'bg-green-600 text-white'
                : 'text-green-800 hover:bg-green-300'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
