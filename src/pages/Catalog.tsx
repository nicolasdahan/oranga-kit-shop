
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { products, categories, searchProducts, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";

const Catalog = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");
    
    setSelectedCategory(categoryParam);
    
    if (searchParam) {
      setSearchQuery(searchParam);
      setFilteredProducts(searchProducts(searchParam));
    } else if (categoryParam) {
      setFilteredProducts(getProductsByCategory(categoryParam));
    } else {
      setFilteredProducts(products);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ search: searchQuery });
    } else {
      setSearchParams({});
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      setSearchParams({});
    } else {
      setSelectedCategory(categoryId);
      setSearchParams({ category: categoryId });
    }
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
    setSearchParams({});
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar for desktop / Collapsible filter on mobile */}
        <div className={`md:w-1/4 lg:w-1/5 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-24 bg-card p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center">
                <Filter className="w-5 h-5 mr-2" /> {t('catalog.filters')}
              </h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={clearFilters}
                className="text-xs"
              >
                {t('catalog.clearAll')}
              </Button>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">{t('catalog.categories')}</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategory === category.id}
                      onCheckedChange={() => handleCategoryChange(category.id)}
                    />
                    <label
                      htmlFor={`category-${category.id}`}
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 md:hidden">
              <Button 
                onClick={() => setIsFilterOpen(false)} 
                className="w-full"
                variant="outline"
              >
                {t('catalog.applyFilters')}
              </Button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="md:w-3/4 lg:w-4/5">
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold">
                {selectedCategory
                  ? categories.find(c => c.id === selectedCategory)?.name || t('catalog.allProducts')
                  : searchQuery
                  ? `${t('catalog.searchResults')} "${searchQuery}"`
                  : t('catalog.allProducts')}
              </h1>
              <p className="text-muted-foreground mt-1">
                {filteredProducts.length} {filteredProducts.length === 1 ? t('catalog.productFound') : t('catalog.productsFound')}
              </p>
            </div>

            <div className="w-full sm:w-auto flex gap-2">
              <Button 
                variant="outline"
                className="md:hidden flex-grow"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="w-4 h-4 mr-2" /> 
                {isFilterOpen ? t('catalog.hideFilters') : t('catalog.showFilters')}
              </Button>
              
              <form onSubmit={handleSearch} className="flex flex-grow">
                <Input
                  placeholder={t('catalog.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-r-none focus-visible:ring-primary"
                />
                <Button type="submit" className="rounded-l-none bg-primary hover:bg-primary/90">
                  {t('catalog.search')}
                </Button>
              </form>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <h3 className="text-xl font-medium mb-2">{t('catalog.noProducts')}</h3>
              <p className="text-muted-foreground mb-6">{t('catalog.noProductsDesc')}</p>
              <Button onClick={clearFilters} className="bg-primary hover:bg-primary/90">
                {t('catalog.clearFilters')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
