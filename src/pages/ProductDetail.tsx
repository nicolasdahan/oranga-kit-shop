
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "@/data/products";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = id ? getProductById(id) : undefined;
  
  const [selectedSize, setSelectedSize] = useState<string>(product?.size[0] || "");

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">Sorry, the product you're looking for doesn't exist.</p>
        <Button onClick={() => navigate("/catalog")} className="bg-brand-orange hover:bg-orange-600">
          Back to Catalog
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addItem(product, selectedSize);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.team}</p>
          
          <div className="mb-6">
            <p className="text-3xl font-bold text-brand-orange">
              ${product.price.toFixed(2)}
            </p>
          </div>
          
          <div className="border-t border-b py-6 my-6">
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Season:</h3>
              <p>{product.season}</p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Select Size:</h3>
              <RadioGroup 
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="flex flex-wrap gap-3"
              >
                {product.size.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value={size} 
                      id={`size-${size}`} 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor={`size-${size}`}
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white peer-data-[state=checked]:bg-brand-orange peer-data-[state=checked]:text-white peer-data-[state=checked]:border-brand-orange cursor-pointer"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleAddToCart}
              className="bg-brand-orange hover:bg-orange-600 text-white flex-1"
              size="lg"
              disabled={!selectedSize}
            >
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex-1"
              onClick={() => navigate("/cart")}
            >
              View Cart
            </Button>
          </div>
          
          <div className="mt-8 space-y-3">
            <div className="flex items-center text-sm">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              Free shipping on orders over $100
            </div>
            <div className="flex items-center text-sm">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              Authentic official licensed product
            </div>
            <div className="flex items-center text-sm">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              Secure payment with PayPal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
