// ✅ Dette er en Server Component og fetcher data direkte fra Firestore ved hver request
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import ProductCard from '../components/ProductCard'; // Importerer Client Component til visning

// 🔁 Funktion som henter alle produkter fra Firestore
const fetchProducts = async () => {
  try {
    const q = query(collection(db, 'Products'));
    const snapshot = await getDocs(q);

    if (snapshot.empty) return [];

    return snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name || 'No name',
        description: data.description || 'No description',
        price: data.price || 0,
        image: data.image || '/placeholder.jpg',
        category: data.category || 'Uncategorized',
      };
    });
  } catch (error) {
    console.error('🔥 Fejl ved hentning af produkter:', error);
    return [];
  }
};

export default async function ShopPage() {
  const products = await fetchProducts();

  return (
    <div className="bg-green-200 p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Shop alle produkter</h1>

      {products.length === 0 ? (
        <p>❗Ingen produkter fundet. Tjek konsollen for fejl.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
