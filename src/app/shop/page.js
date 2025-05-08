'use client';

import Link from 'next/link';
import ProductNav from '../components/ProductNav';

export default function ProductNavWrapper() {
  return (
    <div>
      <ProductNav />
      <div className="flex flex-col items-center w-full">
        <h1 className="text-2xl font-bold text-green-800 pt-10 mb-8">
          Choose Fruit or Vegetables
        </h1>
        <div className="flex gap-8">
          {/* Link to Fruits Page */}
          <div className="flex flex-col items-center">
            <Link href="/fruit">
              <img
                src="/fruit.jpg"
                alt="Fresh Fruits"
                className="w-64 h-64 object-cover rounded-lg shadow-lg cursor-pointer"
              />
            </Link>
            <p className="mt-4 text-lg font-medium text-gray-700">Fresh Fruits</p>
          </div>

          {/* Link to Vegetables Page */}
          <div className="flex flex-col items-center">
            <Link href="/vegitables">
              <img
                src="/vegi.avif"
                alt="Fresh Vegetables"
                className="w-64 h-64 object-cover rounded-lg shadow-lg cursor-pointer"
              />
            </Link>
            <p className="mt-4 text-lg font-medium text-gray-700">Fresh Vegetables</p>
          </div>
        </div>
      </div>
    </div>
  );
}