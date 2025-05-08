
import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';
import { toast } from 'sonner';

type NameSet = {
  name: string;
  number: string;
} | null;

type Customizations = {
  patches: boolean;
  nameset: NameSet;
};

export type CartItem = {
  product: Product;
  quantity: number;
  size: string;
  customizations?: Customizations;
};

type CartContextType = {
  items: CartItem[];
  addItem: (product: Product, size: string, customizations?: Customizations) => void;
  removeItem: (productId: string, size: string, customizations?: Customizations) => void;
  updateQuantity: (productId: string, size: string, quantity: number, customizations?: Customizations) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: string, customizations?: Customizations) => {
    setItems(currentItems => {
      // Check if item already exists in cart with same customizations
      const existingItemIndex = currentItems.findIndex(
        item => item.product.id === product.id && 
               item.size === size && 
               JSON.stringify(item.customizations) === JSON.stringify(customizations)
      );

      if (existingItemIndex > -1) {
        // If item exists, increase quantity
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += 1;
        toast.success("Item quantity updated in cart");
        return updatedItems;
      } else {
        // Otherwise add new item
        toast.success("Item added to cart");
        return [...currentItems, { product, quantity: 1, size, customizations }];
      }
    });
  };

  const removeItem = (productId: string, size: string, customizations?: Customizations) => {
    setItems(currentItems => 
      currentItems.filter(item => !(
        item.product.id === productId && 
        item.size === size && 
        JSON.stringify(item.customizations) === JSON.stringify(customizations)
      ))
    );
    toast.info("Item removed from cart");
  };

  const updateQuantity = (productId: string, size: string, quantity: number, customizations?: Customizations) => {
    setItems(currentItems => {
      return currentItems.map(item => {
        if (
          item.product.id === productId && 
          item.size === size && 
          JSON.stringify(item.customizations) === JSON.stringify(customizations)
        ) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setItems([]);
    toast.info("Cart cleared");
  };

  const cartTotal = items.reduce(
    (total, item) => {
      let itemPrice = item.product.price * item.quantity;
      
      // Add customization costs
      if (item.customizations) {
        if (item.customizations.patches) {
          itemPrice += 10 * item.quantity; // €10 per patch set
        }
        if (item.customizations.nameset) {
          itemPrice += 20 * item.quantity; // €20 per nameset
        }
      }
      
      return total + itemPrice;
    }, 
    0
  );

  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
