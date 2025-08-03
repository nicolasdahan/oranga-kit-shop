
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "@/data/products";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { ShoppingCart, Tag, Shirt, PaypalIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { t } = useLanguage();
  const product = id ? getProductById(id) : undefined;
  
  const [selectedSize, setSelectedSize] = useState<string>(product?.size[0] || "");
  const [addPatches, setAddPatches] = useState<boolean>(false);
  const [addNameset, setAddNameset] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>("");
  const [playerNumber, setPlayerNumber] = useState<string>("");

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">{t('product.notFound')}</h1>
        <p className="mb-8">{t('product.notFoundDesc')}</p>
        <Button onClick={() => navigate("/catalog")} className="bg-brand-orange hover:bg-orange-600">
          {t('product.backToCatalog')}
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      const customizations = {
        patches: addPatches,
        nameset: addNameset ? { name: playerName, number: playerNumber } : null
      };
      addItem(product, selectedSize, customizations);
    }
  };

  const handlePaypalCheckout = () => {
    if (selectedSize) {
      // Ici, vous intégrerez le code de paiement PayPal
      // Pour l'exemple, nous allons juste afficher un message
      console.log('PayPal checkout with:', {
        product,
        size: selectedSize,
        customizations: {
          patches: addPatches,
          nameset: addNameset ? { name: playerName, number: playerNumber } : null
        },
        totalPrice
      });
    }
  };

  // Calculate additional costs
  const patchesCost = addPatches ? 10 : 0;
  const namesetCost = addNameset ? 20 : 0;
  const totalPrice = product.price + patchesCost + namesetCost;

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
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          
          <div className="border-t border-b py-6 my-6">
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">{t('product.season')}:</h3>
              <p>{product.season}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3">{t('product.selectSize')}:</h3>
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
            
            {/* Customization Options */}
            <div className="space-y-6">
              <h3 className="font-medium mb-2">{t('product.customizationOptions')}:</h3>
              
              {/* League Patches Option */}
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="patches" 
                  checked={addPatches}
                  onCheckedChange={(checked) => setAddPatches(checked === true)}
                  className="mt-1"
                />
                <div className="grid gap-1.5 leading-none">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="patches" className="text-sm font-medium leading-none">
                      {t('product.addLeaguePatches')}
                    </Label>
                    <Badge variant="new" className="text-xs">+€10.00</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t('product.patchesDesc')}
                  </p>
                </div>
              </div>
              
              {/* Name & Number Option */}
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="nameset" 
                  checked={addNameset}
                  onCheckedChange={(checked) => setAddNameset(checked === true)}
                  className="mt-1"
                />
                <div className="grid gap-1.5 leading-none">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="nameset" className="text-sm font-medium leading-none">
                      {t('product.addNameNumber')}
                    </Label>
                    <Badge variant="new" className="text-xs">+€20.00</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t('product.nameNumberDesc')}
                  </p>
                </div>
              </div>
              
              {/* Name & Number Input Fields (conditional) */}
              {addNameset && (
                <div className="pl-6 mt-2 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="playerName">{t('product.playerName')}</Label>
                    <div className="flex items-center">
                      <Shirt className="w-5 h-5 mr-2 text-gray-500" />
                      <Input 
                        id="playerName"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        placeholder={t('product.enterPlayerName')}
                        className="max-w-xs"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="playerNumber">{t('product.number')}</Label>
                    <div className="flex items-center">
                      <Tag className="w-5 h-5 mr-2 text-gray-500" />
                      <Input 
                        id="playerNumber"
                        value={playerNumber}
                        onChange={(e) => {
                          // Allow only numbers with max 2 digits
                          const value = e.target.value.replace(/[^0-9]/g, '');
                          if (value.length <= 2) {
                            setPlayerNumber(value);
                          }
                        }}
                        placeholder="1-99"
                        className="max-w-[100px]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleAddToCart}
                className="bg-brand-orange hover:bg-orange-600 text-white flex-1"
                size="lg"
                disabled={!selectedSize}
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> {t('product.addToCart')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex-1"
                onClick={() => navigate("/cart")}
              >
                {t('product.viewCart')}
              </Button>
            </div>
            <Button
              onClick={handlePaypalCheckout}
              className="w-full bg-[#0070BA] hover:bg-[#003087] text-white"
              size="lg"
              disabled={!selectedSize}
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.067 8.478c.492.315.844.825.844 1.522 0 1.845-1.534 3.526-3.33 3.526h-2.262c-.182 0-.343.122-.395.297l-1.457 6.037c-.052.175-.213.297-.395.297H9.611c-.182 0-.343-.122-.395-.297L7.76 13.823c-.052-.175-.213-.297-.395-.297H5.103c-.182 0-.343-.122-.395-.297L3.25 7.192c-.052-.175.057-.297.239-.297h3.895c.182 0 .343.122.395.297l1.457 6.037c.052.175.213.297.395.297h2.262c1.796 0 3.33-1.681 3.33-3.526 0-.697-.352-1.207-.844-1.522-.492-.315-.844-.825-.844-1.522 0-1.845 1.534-3.526 3.33-3.526h2.262c.182 0 .343.122.395.297l1.457 6.037c.052.175.213.297.395.297h2.262c.182 0 .343.122.395.297l1.457 6.037c.052.175-.057.297-.239.297h-3.895c-.182 0-.343-.122-.395-.297l-1.457-6.037c-.052-.175-.213-.297-.395-.297h-2.262c-1.796 0-3.33-1.681-3.33-3.526 0-.697.352-1.207.844-1.522z"/>
              </svg>
              {t('product.paypalCheckout')}
            </Button>
          </div>
          
          <div className="mt-8 space-y-3">
            <div className="flex items-center text-sm">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              {t('product.freeShipping')}
            </div>
            <div className="flex items-center text-sm">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              {t('product.authentic')}
            </div>
            <div className="flex items-center text-sm">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              {t('product.securePayment')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
