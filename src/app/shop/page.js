// ✅ Dette er en Server Component og fetcher data direkte fra Firestore ved hver request
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import AddToCardButton from '../components/AddToCardButton'; // Importerer Client Component til tilføjelse til kurv
import LikeButton from '../components/LikeButton'; // Importerer Client Component til "like" funktionalitet
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
            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105 bg-white"
            >
              <div className="relative w-full h-60 mb-4">
                <img
                  src={product.image || '/placeholder.jpg'}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  {product.category || 'Uncategorized'}
                </div>
                <div className="absolute top-2 right-2">
                  <LikeButton />
                </div>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold text-gray-800 mb-4">Price: {product.price}</p>
              <AddToCardButton product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
