export default function ProductCard({ product }) {
    return (
      <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105 bg-white">
        <div className="relative w-full h-60 mb-4">
          <img
            src={product.image || '/placeholder.jpg'} // Use product image or placeholder
            alt={product.name}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            {product.category || 'Uncategorized'}
          </div>
        </div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg font-bold text-gray-800 mb-4">Price: ${product.price.toFixed(2)}</p>
        <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Add to Cart
        </button>
      </div>
    );
  }