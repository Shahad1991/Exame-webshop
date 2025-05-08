'use client';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import ProduktNav from '../components/ProductNav';
import ProductCard from '../components/ProductCard'; // Import the ProductCard component

export default function FruitPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        console.log('Fetching fruits from Firestore...');
        const q = query(
          collection(db, 'Products'),
          where('category', '==', 'fruit') // Filter products by category "fruit"
        );

        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          console.log('No fruits found in Firestore.');
          return;
        }

        const data = snapshot.docs.map(doc => {
          const docData = doc.data();
          return {
            id: doc.id,
            name: docData.name || 'No name',
            description: docData.description || 'No description',
            price: docData.price || 0,
            image: docData.image || '/placeholder.jpg',
            category: docData.category || 'uncategorized',
          };
        });

        console.log('Fetched fruits:', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching fruits:', error);
      }
    };

    fetchFruits();
  }, []);

  return (
    <div className='bg-green-200'>
      <ProduktNav />
      
      {products.length === 0 ? (
        <p>No fruits found. Check the console for errors.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} /> // Use ProductCard component
          ))}
        </div>
      )}
    </div>
  );
}