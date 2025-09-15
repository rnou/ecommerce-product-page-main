import { ShoppingCart, Plus, Minus } from 'lucide-react';

export const ProductInfo = ({ product, quantity, setQuantity, addToCart }) => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
          {product.company}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {product.name}
        </h1>
        <p className="text-gray-600 leading-relaxed">
          {product.description}
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold">${product.discountedPrice.toFixed(2)}</span>
          <span className="bg-black text-white px-2 py-1 rounded text-sm font-semibold">
            {product.discount}%
          </span>
        </div>
        <p className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 rounded-lg">
            <button 
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
              className="p-4 hover:bg-gray-200 rounded-l-lg transition-colors"
            >
              <Minus className="h-4 w-4 text-orange-500" />
            </button>
            <span className="px-6 py-4 font-semibold">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="p-4 hover:bg-gray-200 rounded-r-lg transition-colors"
            >
              <Plus className="h-4 w-4 text-orange-500" />
            </button>
          </div>
        </div>
        
        <button 
          onClick={addToCart}
          className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};
