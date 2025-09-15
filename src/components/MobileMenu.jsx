import {X} from 'lucide-react';

export const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  if (!isMobileMenuOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="bg-white w-64 h-full">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="font-semibold">Menu</h2>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <a href="#" className="block text-gray-600 hover:text-orange-500">Collections</a>
          <a href="#" className="block text-gray-600 hover:text-orange-500">Men</a>
          <a href="#" className="block text-gray-600 hover:text-orange-500">Women</a>
          <a href="#" className="block text-gray-600 hover:text-orange-500">About</a>
          <a href="#" className="block text-gray-600 hover:text-orange-500">Contact</a>
        </nav>
      </div>
    </div>
  );
};