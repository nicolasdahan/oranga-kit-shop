import { Product } from '@/data/products';

const STORAGE_KEY = 'dadafoot_products';

export const saveProduct = (product: Omit<Product, 'id'>): Product => {
  const existingProducts = getProducts();
  const newProduct: Product = {
    ...product,
    id: `product-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  };
  
  const updatedProducts = [...existingProducts, newProduct];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
  
  return newProduct;
};

export const getProducts = (): Product[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
};

export const deleteProduct = (productId: string): void => {
  const existingProducts = getProducts();
  const updatedProducts = existingProducts.filter(p => p.id !== productId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
};

export const updateProduct = (productId: string, updates: Partial<Product>): Product | null => {
  const existingProducts = getProducts();
  const productIndex = existingProducts.findIndex(p => p.id === productId);
  
  if (productIndex === -1) return null;
  
  const updatedProduct = { ...existingProducts[productIndex], ...updates };
  existingProducts[productIndex] = updatedProduct;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existingProducts));
  return updatedProduct;
}; 