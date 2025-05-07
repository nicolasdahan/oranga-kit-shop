
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { Trash2, CreditCard } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleQuantityChange = (productId: string, size: string, quantity: number) => {
    if (quantity < 1) {
      return;
    }
    updateQuantity(productId, size, quantity);
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    
    setIsCheckingOut(true);
    
    // Simulate a checkout process
    setTimeout(() => {
      toast.success("Payment successful! Thank you for your order.");
      clearCart();
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      {items.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.map((item) => (
                    <tr key={`${item.product.id}-${item.size}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded bg-gray-100">
                            <img
                              src={item.product.images[0]}
                              alt={item.product.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              <Link to={`/product/${item.product.id}`} className="hover:text-brand-orange">
                                {item.product.name}
                              </Link>
                            </div>
                            <div className="text-sm text-gray-500">{item.product.team}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${item.product.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.product.id, item.size, item.quantity - 1)}
                          >
                            <span>-</span>
                          </Button>
                          <Input
                            className="w-16 mx-2 text-center"
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(
                              item.product.id, 
                              item.size, 
                              parseInt(e.target.value) || 1
                            )}
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.product.id, item.size, item.quantity + 1)}
                          >
                            <span>+</span>
                          </Button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => removeItem(item.product.id, item.size)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-between">
              <Button
                variant="outline"
                className="text-brand-orange border-brand-orange hover:bg-brand-orange hover:text-white"
                onClick={() => navigate("/catalog")}
              >
                Continue Shopping
              </Button>
              <Button
                variant="outline"
                className="text-gray-600"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{cartTotal > 100 ? "Free" : "$10.00"}</span>
                </div>
              </div>
              
              <div className="border-t my-4 pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${(cartTotal + (cartTotal > 100 ? 0 : 10)).toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-brand-orange hover:bg-orange-600 gap-2 mt-4"
                onClick={handleCheckout}
                disabled={isCheckingOut || items.length === 0}
              >
                {isCheckingOut ? (
                  "Processing..."
                ) : (
                  <>
                    <CreditCard className="h-5 w-5" />
                    Checkout with PayPal
                  </>
                )}
              </Button>
              
              <div className="mt-6">
                <h3 className="font-medium mb-2">We Accept</h3>
                <div className="flex space-x-2">
                  <img src="/placeholder.svg" alt="PayPal" className="h-8" />
                  <img src="/placeholder.svg" alt="Visa" className="h-8" />
                  <img src="/placeholder.svg" alt="Mastercard" className="h-8" />
                  <img src="/placeholder.svg" alt="American Express" className="h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Button
            onClick={() => navigate("/catalog")}
            className="bg-brand-orange hover:bg-orange-600"
          >
            Start Shopping
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
