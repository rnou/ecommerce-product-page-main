import { ShoppingCart, Menu, X} from 'lucide-react';

export const Header = ({ 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  isCartOpen, 
  setIsCartOpen, 
  cartItems, 
  removeFromCart 
}) => {
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold">sneakers</h1>
          <nav className="hidden md:flex space-x-8 ml-8">
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Collections</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Men</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Women</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 hover:opacity-75 transition-opacity"
            >
              <ShoppingCart className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            
            {/* Cart Dropdown */}
            {isCartOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50">
                <div className="p-4 border-b">
                  <h3 className="font-semibold">Cart</h3>
                </div>
                <div className="p-4">
                  {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-12 h-12 rounded object-cover"
                          />
                          <div className="flex-1">
                            <p className="text-sm text-gray-600">{item.name}</p>
                            <p className="text-sm">
                              ${item.price.toFixed(2)} x {item.quantity} = 
                              <span className="font-semibold"> ${(item.price * item.quantity).toFixed(2)}</span>
                            </p>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                      <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                        Checkout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};