import { ChevronLeft, X, ChevronRight } from 'lucide-react';

export const Lightbox = ({ 
  isLightboxOpen, 
  setIsLightboxOpen, 
  productImages, 
  currentImage, 
  setCurrentImage, 
  nextImage, 
  prevImage 
}) => {
  if (!isLightboxOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-2xl w-full">
        <button 
          onClick={() => setIsLightboxOpen(false)}
          className="absolute -top-12 right-0 text-white hover:text-orange-500"
        >
          <X className="h-8 w-8" />
        </button>
        
        <div className="relative">
          <img 
            src={productImages[currentImage]} 
            alt="Product"
            className="w-full rounded-lg"
          />
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="grid grid-cols-4 gap-4 mt-6">
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
    </div>
  );
};