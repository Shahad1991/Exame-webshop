'use client';

import ProductNav from '../components/ProductNav';

export default function ProductNavWrapper() {
  return (
    <div>
      <ProductNav />
      <div className="flex justify-center items-center w-full">
      <h1 className="text-2xl font-bold text-green-800 pt-10">Choose Fruit or Vegi</h1>
      </div>
    </div>
  );
}