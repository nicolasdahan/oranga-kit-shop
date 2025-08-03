import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { getProducts, deleteProduct } from '@/lib/productStorage';
import { Product } from '@/data/products';
import { Trash2, Edit, Eye } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    const storedProducts = getProducts();
    setProducts(storedProducts);
  };

  const handleDelete = (productId: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      deleteProduct(productId);
      loadProducts();
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Product Management</h1>
          <Button onClick={() => window.location.href = '/admin/add-product'}>
            Add New Product
          </Button>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No products yet</h3>
            <p className="text-muted-foreground mb-6">
              Start by adding your first product
            </p>
            <Button onClick={() => window.location.href = '/admin/add-product'}>
              Add Your First Product
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Product Image */}
                <div className="aspect-square bg-gray-100 relative">
                  {product.images && product.images.length > 0 ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      product.inStock 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.team}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-primary">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-xs text-gray-500">{product.season}</span>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Brand:</span>
                      <span>{product.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span>{product.kitType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Condition:</span>
                      <span>{product.condition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <span>{product.format}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      size="sm" 
                      variant="destructive"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList; 