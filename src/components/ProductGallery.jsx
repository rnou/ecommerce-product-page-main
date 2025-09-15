import {ChevronLeft, ChevronRight} from 'lucide-react';

export const ProductGallery = ({ 
  productImages, 
  currentImage, 
  setCurrentImage, 
  setIsLightboxOpen, 
  nextImage, 
  prevImage 
}) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <img 
          src={productImages[currentImage]} 
          alt="Product"
          className="w-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => setIsLightboxOpen(true)}
        />
        {/* Mobile Navigation Arrows */}
        <div className="md:hidden">
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Thumbnail Images */}
      <div className="hidden md:grid grid-cols-4 gap-4">
        {productImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`relative rounded-lg overflow-hidden ${
              currentImage === index ? 'ring-2 ring-orange-500' : ''
            }`}
          >
            <img 
              src={image} 
              alt={`Product ${index + 1}`}
              className={`w-full h-20 object-cover hover:opacity-75 transition-opacity ${
                currentImage === index ? 'opacity-50' : ''
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};