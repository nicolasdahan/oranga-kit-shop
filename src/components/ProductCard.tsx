
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square relative overflow-hidden bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.team}</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-semibold text-brand-orange">${product.price.toFixed(2)}</p>
            <Button variant="outline" size="sm" className="btn-outline">
              View Details
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
