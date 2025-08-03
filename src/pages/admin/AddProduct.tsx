import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/context/LanguageContext';
import { Brand, Competition, KitType, Condition, JerseyFormat } from '@/data/products';
import SimpleImageUpload from '@/components/SimpleImageUpload';
import { saveProduct } from '@/lib/productStorage';

const AddProduct = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    team: '',
    season: '',
    category: 'clubs', // Default category
    brand: '' as Brand,
    competition: [] as Competition[],
    kitType: '' as KitType,
    condition: '' as Condition,
    format: '' as JerseyFormat,
    hasNameset: false,
    inStock: true,
    featured: false,
    size: [] as string[],
  });
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const brands: Brand[] = ['Nike', 'Adidas', 'Puma', 'New Balance', 'Kappa', 'Macron'];
  const competitions: Competition[] = ['League', 'Champions League', 'Europa League', 'World Cup', 'Euro', 'Copa America'];
  const kitTypes: KitType[] = ['Home', 'Away', 'Third', 'Goalkeeper', 'Special Edition'];
  const conditions: Condition[] = ['New', 'Used - Like New', 'Used - Good', 'Used - Fair'];
  const formats: JerseyFormat[] = ['Stadium', 'Player Issue', 'Pro Stock', 'Match Worn', 'Match Prepared'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        images,
        dateAdded: new Date().toISOString(),
      };

      // Sauvegarder le produit
      const savedProduct = saveProduct(productData);
      console.log('Product saved:', savedProduct);
      
      alert(`Product "${savedProduct.name}" added successfully!`);
      
      // Reset form
      setFormData({
        name: '',
        description: '',
        price: '',
        team: '',
        season: '',
        category: 'clubs',
        brand: '' as Brand,
        competition: [],
        kitType: '' as KitType,
        condition: '' as Condition,
        format: '' as JerseyFormat,
        hasNameset: false,
        inStock: true,
        featured: false,
        size: [],
      });
      setImages([]);
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product');
    } finally {
      setLoading(false);
    }
  };

  const handleCompetitionChange = (competition: Competition) => {
    setFormData(prev => ({
      ...prev,
      competition: prev.competition.includes(competition)
        ? prev.competition.filter(c => c !== competition)
        : [...prev.competition, competition]
    }));
  };

  const handleSizeChange = (size: string) => {
    setFormData(prev => ({
      ...prev,
      size: prev.size.includes(size)
        ? prev.size.filter(s => s !== size)
        : [...prev.size, size]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Add New Product</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="team">Team</Label>
              <Input
                id="team"
                value={formData.team}
                onChange={(e) => setFormData(prev => ({ ...prev, team: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="price">Price (€)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="season">Season</Label>
              <Input
                id="season"
                value={formData.season}
                onChange={(e) => setFormData(prev => ({ ...prev, season: e.target.value }))}
                placeholder="2023/24"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
              required
            />
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="brand">Brand</Label>
              <Select value={formData.brand} onValueChange={(value) => setFormData(prev => ({ ...prev, brand: value as Brand }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="kitType">Kit Type</Label>
              <Select value={formData.kitType} onValueChange={(value) => setFormData(prev => ({ ...prev, kitType: value as KitType }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select kit type" />
                </SelectTrigger>
                <SelectContent>
                  {kitTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="condition">Condition</Label>
              <Select value={formData.condition} onValueChange={(value) => setFormData(prev => ({ ...prev, condition: value as Condition }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  {conditions.map((condition) => (
                    <SelectItem key={condition} value={condition}>{condition}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="format">Format</Label>
              <Select value={formData.format} onValueChange={(value) => setFormData(prev => ({ ...prev, format: value as JerseyFormat }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  {formats.map((format) => (
                    <SelectItem key={format} value={format}>{format}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Competition */}
          <div>
            <Label>Competition</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {competitions.map((competition) => (
                <div key={competition} className="flex items-center space-x-2">
                  <Checkbox
                    id={`competition-${competition}`}
                    checked={formData.competition.includes(competition)}
                    onCheckedChange={() => handleCompetitionChange(competition)}
                  />
                  <Label htmlFor={`competition-${competition}`} className="text-sm">
                    {competition}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <Label>Available Sizes</Label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-2">
              {sizes.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox
                    id={`size-${size}`}
                    checked={formData.size.includes(size)}
                    onCheckedChange={() => handleSizeChange(size)}
                  />
                  <Label htmlFor={`size-${size}`} className="text-sm">
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Options */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="hasNameset"
                checked={formData.hasNameset}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, hasNameset: checked as boolean }))}
              />
              <Label htmlFor="hasNameset">Has Nameset</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="inStock"
                checked={formData.inStock}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, inStock: checked as boolean }))}
              />
              <Label htmlFor="inStock">In Stock</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, featured: checked as boolean }))}
              />
              <Label htmlFor="featured">Featured Product</Label>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <Label>Product Images</Label>
            <SimpleImageUpload
              onImagesUploaded={setImages}
              maxImages={5}
              className="mt-2"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Adding Product...' : 'Add Product'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct; 