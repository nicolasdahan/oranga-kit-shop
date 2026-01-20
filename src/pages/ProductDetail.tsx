
import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "@/data/products";
import { getCompatiblePatches, getPatchById, Patch } from "@/data/patches";
import { getCompatibleNamesets, getNamesetById, NamesetType } from "@/data/namesets";
import { getPlayersByTeam, hasAvailablePlayers, Player } from "@/data/players";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { useCurrency } from "@/context/CurrencyContext";
import { ShoppingCart, Tag, Shirt, CreditCard, Type } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  const product = id ? getProductById(id) : undefined;
  
  const [selectedSize, setSelectedSize] = useState<string>(product?.size[0] || "");
  const [selectedPatches, setSelectedPatches] = useState<string[]>([]); // Array of patch IDs
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null); // Player ID or null
  const [selectedNameset, setSelectedNameset] = useState<string | null>(null); // Nameset type ID or null

  // Get compatible patches for this product
  // Now includes club and season restrictions
  const availablePatches = useMemo(() => {
    if (!product) return [];
    return getCompatiblePatches(
      product.category, 
      product.competition,
      product.team,  // Pass team name for club restrictions
      product.season // Pass season for temporal restrictions
    );
  }, [product]);

  // Get compatible namesets for this product
  // Different fonts for league vs European competitions
  const availableNamesets = useMemo(() => {
    if (!product) return [];
    return getCompatibleNamesets(
      product.category,
      product.competition,
      product.team,
      product.season
    );
  }, [product]);

  // Get available players for this team
  const availablePlayers = useMemo(() => {
    if (!product || !product.allowsPlayerCustomization) return [];
    return getPlayersByTeam(product.team);
  }, [product]);

  const hasPlayerOptions = useMemo(() => {
    return product ? hasAvailablePlayers(product.team) && product.allowsPlayerCustomization : false;
  }, [product]);

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

  const handlePatchToggle = (patchId: string) => {
    setSelectedPatches(prev => {
      if (prev.includes(patchId)) {
        return prev.filter(id => id !== patchId);
      } else {
        return [...prev, patchId];
      }
    });
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      const patchesData = selectedPatches.map(patchId => {
        const patch = getPatchById(patchId);
        return patch ? {
          patchId: patch.id,
          name: patch.name,
          price: patch.price
        } : null;
      }).filter((p): p is { patchId: string; name: string; price: number } => p !== null);

      const playerData = selectedPlayer ? (() => {
        const player = availablePlayers.find(p => p.id === selectedPlayer);
        return player ? {
          playerId: player.id,
          name: player.name,
          number: player.number
        } : null;
      })() : null;

      const customizations = {
        patches: patchesData,
        player: playerData
      };
      
      addItem(product, selectedSize, customizations);
    }
  };

  const handlePaypalCheckout = () => {
    if (selectedSize) {
      // Implement PayPal checkout logic
      console.log('PayPal checkout with:', {
        product,
        size: selectedSize,
        customizations: {
          patches: selectedPatches,
          player: selectedPlayer
        },
        totalPrice
      });
    }
  };

  // Calculate total price
  const patchesTotal = selectedPatches.reduce((sum, patchId) => {
    const patch = getPatchById(patchId);
    return sum + (patch?.price || 0);
  }, 0);

  const playerCost = selectedPlayer ? 20 : 0;
  const totalPrice = product.price + patchesTotal + playerCost;

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
              {formatPrice(totalPrice)}
            </p>
            {(patchesTotal > 0 || playerCost > 0) && (
              <p className="text-sm text-gray-500 mt-1">
                Base price: {formatPrice(product.price)}
                {patchesTotal > 0 && ` + Patches: ${formatPrice(patchesTotal)}`}
                {playerCost > 0 && ` + Player: ${formatPrice(playerCost)}`}
              </p>
            )}
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
              <h3 className="font-medium text-lg mb-4">{t('product.customizationOptions')}:</h3>
              
              {/* League Patches Section */}
              {availablePatches.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-medium text-base">Available Patches</h4>
                  <div className="space-y-3">
                    {availablePatches.map((patch: Patch) => (
                      <div 
                        key={patch.id} 
                        className="flex items-start space-x-3 p-3 border rounded-lg hover:border-brand-orange transition-colors"
                      >
                        <Checkbox 
                          id={`patch-${patch.id}`}
                          checked={selectedPatches.includes(patch.id)}
                          onCheckedChange={() => handlePatchToggle(patch.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {/* Patch Image Placeholder */}
                              <div className="w-12 h-12 bg-gray-100 rounded border flex items-center justify-center overflow-hidden">
                                <img 
                                  src={patch.image} 
                                  alt={patch.name}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    // Fallback to icon if image doesn't exist
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerHTML = '<Tag className="w-6 h-6 text-gray-400" />';
                                  }}
                                />
                              </div>
                              <div>
                                <Label 
                                  htmlFor={`patch-${patch.id}`} 
                                  className="text-sm font-medium cursor-pointer"
                                >
                                  {patch.name}
                                </Label>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {patch.description}
                                </p>
                              </div>
                            </div>
                            <Badge variant="new" className="text-xs whitespace-nowrap">
                              +{formatPrice(patch.price)}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {selectedPatches.length > 0 && (
                    <p className="text-sm text-gray-600 pl-3">
                      {selectedPatches.length} patch{selectedPatches.length > 1 ? 'es' : ''} selected
                    </p>
                  )}
                </div>
              )}
              
              {/* Player Name & Number Section */}
              {hasPlayerOptions && availablePlayers.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-base">Official Player Name & Number</h4>
                    {selectedPlayer && selectedPlayer !== "none" && (
                      <Badge variant="new" className="text-xs">
                        +{formatPrice(20 + (selectedNameset ? (getNamesetById(selectedNameset)?.priceModifier || 0) : 0))}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="player-select" className="text-sm">
                      Select an official player for this team
                    </Label>
                    <Select value={selectedPlayer || undefined} onValueChange={setSelectedPlayer}>
                      <SelectTrigger id="player-select" className="w-full">
                        <SelectValue placeholder="Choose a player (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No player</SelectItem>
                        {availablePlayers.map((player: Player) => (
                          <SelectItem key={player.id} value={player.id}>
                            <div className="flex items-center justify-between w-full gap-4">
                              <span className="font-medium">{player.name}</span>
                              <span className="text-sm text-gray-500">#{player.number}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    {selectedPlayer && selectedPlayer !== "none" && (
                      <div className="p-3 bg-gray-50 rounded-lg border">
                        {(() => {
                          const player = availablePlayers.find(p => p.id === selectedPlayer);
                          return player ? (
                            <div className="flex items-center gap-3">
                              <Shirt className="w-5 h-5 text-brand-orange" />
                              <div>
                                <p className="font-medium">{player.name}</p>
                                <p className="text-sm text-gray-600">
                                  Number {player.number} • {player.position}
                                </p>
                              </div>
                            </div>
                          ) : null;
                        })()}
                      </div>
                    )}
                    
                    {/* Nameset Font Selection - Show if player selected and multiple namesets available */}
                    {selectedPlayer && selectedPlayer !== "none" && availableNamesets.length > 0 && (
                      <div className="space-y-3 pt-2 border-t">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <Type className="w-4 h-4" />
                          Font Style {availableNamesets.length > 1 && '(Choose one)'}
                        </Label>
                        
                        <RadioGroup 
                          value={selectedNameset || undefined} 
                          onValueChange={setSelectedNameset}
                          className="space-y-3"
                        >
                          {availableNamesets.map((nameset: NamesetType) => {
                            const isLeagueFont = nameset.compatibleCompetitions?.includes('League');
                            const isEuropeanFont = nameset.compatibleCompetitions?.some(comp => 
                              comp.includes('Champions League') || comp.includes('Europa League')
                            );
                            
                            return (
                              <div 
                                key={nameset.id}
                                className={`flex items-start space-x-3 p-3 border rounded-lg hover:border-brand-orange transition-colors ${
                                  selectedNameset === nameset.id ? 'border-brand-orange bg-orange-50' : ''
                                }`}
                              >
                                <RadioGroupItem 
                                  value={nameset.id} 
                                  id={`nameset-${nameset.id}`}
                                  className="mt-1"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <Label 
                                        htmlFor={`nameset-${nameset.id}`}
                                        className="text-sm font-medium cursor-pointer flex items-center gap-2"
                                      >
                                        {nameset.name}
                                        {isLeagueFont && (
                                          <Badge variant="outline" className="text-xs">
                                            League
                                          </Badge>
                                        )}
                                        {isEuropeanFont && (
                                          <Badge variant="default" className="text-xs bg-blue-600">
                                            European
                                          </Badge>
                                        )}
                                      </Label>
                                      <p className="text-xs text-muted-foreground mt-1">
                                        {nameset.description}
                                      </p>
                                      <p className="text-xs text-gray-500 mt-1">
                                        Font: {nameset.fontStyle}
                                      </p>
                                    </div>
                                    <div className="text-right ml-4">
                                      {nameset.priceModifier > 0 ? (
                                        <Badge variant="new" className="text-xs whitespace-nowrap">
                                          +{formatPrice(nameset.priceModifier)}
                                        </Badge>
                                      ) : (
                                        <span className="text-xs text-gray-500">Included</span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </RadioGroup>
                        
                        {!selectedNameset && availableNamesets.length > 1 && (
                          <p className="text-xs text-amber-600">
                            ⚠️ Please select a font style
                          </p>
                        )}
                        
                        {selectedNameset && (
                          <p className="text-xs text-green-600">
                            ✓ Font style selected
                          </p>
                        )}
                      </div>
                    )}
                    
                    <p className="text-xs text-muted-foreground">
                      Official player names and numbers are printed using authentic fonts and materials. 
                      {availableNamesets.length > 1 && ' Different fonts are used for league and European competitions.'}
                    </p>
                  </div>
                </div>
              )}

              {!hasPlayerOptions && (
                <div className="p-4 bg-gray-50 rounded-lg border">
                  <p className="text-sm text-gray-600">
                    Player customization is not available for this product.
                  </p>
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
              className="w-full bg-[#FFC439] hover:bg-[#F7B600] border-0 px-2 py-1 h-11 overflow-hidden"
              size="lg"
              disabled={!selectedSize}
            >
              <img 
                src="/payment_logo/PayPal-Yellow-Payment-Button.png" 
                alt="PayPal Checkout"
                className="h-full w-auto max-w-full object-contain scale-250"
              />
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
