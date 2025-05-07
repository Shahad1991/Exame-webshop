import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import ProduktNav from '../components/ProductNav';
import ProductCard from '../components/ProductCard'; // Import the ProductCard component

export default async function VegitablesPage() {
  const fetchVegitables = async () => {
    try {
      console.log('Fetching vegetables from Firestore...');
      const q = query(
        collection(db, 'Products'),
        where('category', '==', 'vegi') // Filter products by category "vegi"
      );

      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        console.log('No vegetables found in Firestore.');
        return [];
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

      console.log('Fetched vegetables:', data);
      return data;
    } catch (error) {
      console.error('Error fetching vegetables:', error);
      return [];
    }
  };

  const products = await fetchVegitables();

  return (
    <div className='bg-green-200'>
      <ProduktNav />
   
      {products.length === 0 ? (
        <p>No vegetables found. Check the console for errors.</p>
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