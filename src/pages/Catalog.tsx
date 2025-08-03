
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, Tag, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { getAllProducts, categories, searchProducts, getProductsByCategory, Brand, Competition, KitType, Condition, JerseyFormat } from "@/data/products";
import SortAndFilters from "@/components/catalog/SortAndFilters";
import SortSelect from "@/components/catalog/SortSelect";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";

const Catalog = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(getAllProducts());
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<Brand[]>([]);
  const [selectedCompetitions, setSelectedCompetitions] = useState<Competition[]>([]);
  const [selectedKitTypes, setSelectedKitTypes] = useState<KitType[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<Condition[]>([]);
  const [hasNameset, setHasNameset] = useState<boolean | null>(null);
  const [selectedFormats, setSelectedFormats] = useState<JerseyFormat[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

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
      setFilteredProducts(getAllProducts());
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
    setSortBy("newest");
    setPriceRange([0, 1000]);
    setSelectedBrands([]);
    setSelectedCompetitions([]);
    setSelectedKitTypes([]);
    setSelectedConditions([]);
    setHasNameset(null);
    setSelectedFormats([]);
    setSelectedSizes([]);
    setSearchParams({});
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    let sorted = [...filteredProducts];
    switch (value) {
      case "newest":
        sorted.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
      case "oldest":
        sorted.sort((a, b) => new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime());
        break;
      case "priceAsc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "seasonDesc":
        sorted.sort((a, b) => b.season.localeCompare(a.season));
        break;
      case "seasonAsc":
        sorted.sort((a, b) => a.season.localeCompare(b.season));
        break;
    }
    setFilteredProducts(sorted);
  };

  const handleBrandChange = (brand: Brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleCompetitionChange = (competition: Competition) => {
    setSelectedCompetitions(prev => 
      prev.includes(competition)
        ? prev.filter(c => c !== competition)
        : [...prev, competition]
    );
  };

  const handleKitTypeChange = (kitType: KitType) => {
    setSelectedKitTypes(prev =>
      prev.includes(kitType)
        ? prev.filter(k => k !== kitType)
        : [...prev, kitType]
    );
  };

  const handleConditionChange = (condition: Condition) => {
    setSelectedConditions(prev =>
      prev.includes(condition)
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
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

            <div className="space-y-6">
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

              <SortAndFilters
                sortBy={sortBy}
                onSortChange={handleSortChange}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                selectedBrands={selectedBrands}
                onBrandChange={handleBrandChange}
                selectedCompetitions={selectedCompetitions}
                onCompetitionChange={handleCompetitionChange}
                selectedKitTypes={selectedKitTypes}
                onKitTypeChange={handleKitTypeChange}
                selectedConditions={selectedConditions}
                onConditionChange={handleConditionChange}
                hasNameset={hasNameset}
                onNamesetChange={setHasNameset}
                selectedSizes={selectedSizes}
                onSizeChange={handleSizeChange}
                selectedFormats={selectedFormats}
                onFormatChange={(format) => {
                  setSelectedFormats(prev => 
                    prev.includes(format) 
                      ? prev.filter(f => f !== format)
                      : [...prev, format]
                  );
                }}
                minPrice={0}
                maxPrice={1000}
              />
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

            <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4">
              <div className="flex gap-2 order-1 sm:order-none">
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

              <div className="flex justify-end sm:ml-auto">
                <SortSelect value={sortBy} onChange={handleSortChange} />
              </div>
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
