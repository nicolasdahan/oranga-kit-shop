import { useParams, Link } from "react-router-dom";
import { getCollectionBySlug } from "@/data/collections";
import { getAllProducts, type Product } from "@/data/products";
import { useState, useMemo } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CollectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const collection = getCollectionBySlug(slug || '');
  const allProducts = getAllProducts();
  
  const [sortBy, setSortBy] = useState<string>('featured');

  // Filter products based on collection type
  const collectionProducts = useMemo(() => {
    if (!collection) return [];
    
    let filtered: Product[] = [];
    
    switch (collection.slug) {
      case 'vintage':
        // Products from before 2000
        filtered = allProducts.filter(p => {
          const year = parseInt(p.season.split('/')[0]);
          return year < 2000;
        });
        break;
        
      case 'retro':
        // Products from 2000-2015
        filtered = allProducts.filter(p => {
          const year = parseInt(p.season.split('/')[0]);
          return year >= 2000 && year < 2016;
        });
        break;
        
      case 'player-version':
      case 'player-issue':
        filtered = allProducts.filter(p => 
          p.format === 'Player Issue' || p.format === 'Pro Stock'
        );
        break;
        
      case 'match-worn':
        filtered = allProducts.filter(p => p.format === 'Match Worn');
        break;
        
      case 'fan-version':
        filtered = allProducts.filter(p => p.format === 'Stadium');
        break;
        
      case 'training':
        filtered = allProducts.filter(p => p.kitType === 'Special Edition'); // Placeholder
        break;
        
      case 'goalkeeper':
        filtered = allProducts.filter(p => p.kitType === 'Goalkeeper');
        break;
        
      case 'special-edition':
        filtered = allProducts.filter(p => p.kitType === 'Special Edition');
        break;
        
      default:
        filtered = allProducts;
    }
    
    return filtered;
  }, [collection, allProducts]);

  // Sort products
  const sortedProducts = useMemo(() => {
    let sorted = [...collectionProducts];
    
    switch (sortBy) {
      case 'featured':
        sorted = sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'newest':
        sorted = sorted.sort((a, b) => 
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
        break;
      case 'price-low':
        sorted = sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted = sorted.sort((a, b) => b.price - a.price);
        break;
    }
    
    return sorted;
  }, [collectionProducts, sortBy]);

  if (!collection) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Collection Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the collection you're looking for.
          </p>
          <Button asChild>
            <Link to="/collections">Browse All Collections</Link>
          </Button>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Collections', href: '/collections' },
    { label: collection.name }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={collection.heroImage ? { 
          backgroundImage: `url('${collection.heroImage}')` 
        } : {
          background: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              {collection.icon && (
                <span className="text-5xl">{collection.icon}</span>
              )}
              <h1 className="text-4xl md:text-5xl font-bold">{collection.name}</h1>
            </div>
            <p className="text-xl text-white/90 mb-6">
              {collection.description}
            </p>
            {collection.featured && (
              <Badge className="bg-white/20 text-white border-white/40">
                Featured Collection
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              {collectionProducts.length} Product{collectionProducts.length !== 1 ? 's' : ''}
            </h2>
            <p className="text-muted-foreground">
              Showing all products in this collection
            </p>
          </div>
          
          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map(product => (
              <div key={product.id} className="relative">
                {product.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-primary">Featured</Badge>
                  </div>
                )}
                {product.format === 'Player Issue' && (
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant="secondary">Player Issue</Badge>
                  </div>
                )}
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-secondary rounded-lg">
            <p className="text-muted-foreground text-lg mb-4">
              No products available in this collection at the moment.
            </p>
            <Button asChild variant="outline">
              <Link to="/collections">Browse Other Collections</Link>
            </Button>
          </div>
        )}
      </div>

      {/* Related Collections */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">More Collections</h2>
          <p className="text-muted-foreground mb-8">
            Explore other curated collections of football shirts
          </p>
          <Button asChild>
            <Link to="/collections">
              View All Collections →
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;



