import { useLanguage } from "@/context/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Brand, Competition, KitType, Condition, JerseyFormat } from "@/data/products";

interface SortAndFiltersProps {
  sortBy: string;
  onSortChange: (value: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
  selectedBrands: Brand[];
  onBrandChange: (brand: Brand) => void;
  selectedCompetitions: Competition[];
  onCompetitionChange: (competition: Competition) => void;
  selectedKitTypes: KitType[];
  onKitTypeChange: (kitType: KitType) => void;
  selectedConditions: Condition[];
  onConditionChange: (condition: Condition) => void;
  hasNameset: boolean | null;
  onNamesetChange: (value: boolean | null) => void;
  selectedFormats: JerseyFormat[];
  onFormatChange: (format: JerseyFormat) => void;
  selectedSizes: string[];
  onSizeChange: (size: string) => void;
  minPrice: number;
  maxPrice: number;
}

const brands: Brand[] = ['Nike', 'Adidas', 'Puma', 'New Balance', 'Kappa', 'Macron'];
const competitions: Competition[] = ['League', 'Champions League', 'Europa League', 'World Cup', 'Euro', 'Copa America'];
const kitTypes: KitType[] = ['Home', 'Away', 'Third', 'Goalkeeper', 'Special Edition'];
const conditions: Condition[] = ['New', 'Used - Like New', 'Used - Good', 'Used - Fair'];
const jerseyFormats: JerseyFormat[] = ['Stadium', 'Player Issue', 'Pro Stock', 'Match Worn', 'Match Prepared'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const SortAndFilters = ({
  sortBy,
  onSortChange,
  priceRange,
  onPriceRangeChange,
  selectedBrands,
  onBrandChange,
  selectedCompetitions,
  onCompetitionChange,
  selectedKitTypes,
  onKitTypeChange,
  selectedConditions,
  onConditionChange,
  hasNameset,
  onNamesetChange,
  selectedFormats,
  onFormatChange,
  selectedSizes,
  onSizeChange,
  minPrice,
  maxPrice,
}: SortAndFiltersProps) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">


      {/* Price Range */}
      <div>
        <h4 className="font-medium mb-2">{t('catalog.price')}</h4>
        <div className="space-y-4">
          <Slider
            value={[priceRange[0]]}
            min={minPrice}
            max={maxPrice}
            step={1}
            onValueChange={(value) => onPriceRangeChange([value[0], priceRange[1]])}
          />
          <Slider
            value={[priceRange[1]]}
            min={minPrice}
            max={maxPrice}
            step={1}
            onValueChange={(value) => onPriceRangeChange([priceRange[0], value[0]])}
          />
          <div className="flex justify-between text-sm">
            <span>{priceRange[0]}€</span>
            <span>{priceRange[1]}€</span>
          </div>
        </div>
      </div>

      {/* Brand */}
      <div>
        <h4 className="font-medium mb-2">{t('catalog.brand')}</h4>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => onBrandChange(brand)}
              />
              <Label htmlFor={`brand-${brand}`} className="ml-2">
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Competition */}
      <div>
        <h4 className="font-medium mb-2">{t('catalog.competition')}</h4>
        <div className="space-y-2">
          {competitions.map((competition) => (
            <div key={competition} className="flex items-center">
              <Checkbox
                id={`competition-${competition}`}
                checked={selectedCompetitions.includes(competition)}
                onCheckedChange={() => onCompetitionChange(competition)}
              />
              <Label htmlFor={`competition-${competition}`} className="ml-2">
                {competition}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Kit Type */}
      <div>
        <h4 className="font-medium mb-2">{t('catalog.kitType')}</h4>
        <div className="space-y-2">
          {kitTypes.map((kitType) => (
            <div key={kitType} className="flex items-center">
              <Checkbox
                id={`kitType-${kitType}`}
                checked={selectedKitTypes.includes(kitType)}
                onCheckedChange={() => onKitTypeChange(kitType)}
              />
              <Label htmlFor={`kitType-${kitType}`} className="ml-2">
                {kitType}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div>
        <h4 className="font-medium mb-2">{t('catalog.condition')}</h4>
        <div className="space-y-2">
          {conditions.map((condition) => (
            <div key={condition} className="flex items-center">
              <Checkbox
                id={`condition-${condition}`}
                checked={selectedConditions.includes(condition)}
                onCheckedChange={() => onConditionChange(condition)}
              />
              <Label htmlFor={`condition-${condition}`} className="ml-2">
                {condition}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Customisation */}
      <div>
        <h4 className="font-medium mb-2">{t('catalog.customization')}</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="nameset-all"
              name="nameset"
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
              checked={hasNameset === null}
              onChange={() => onNamesetChange(null)}
            />
            <Label htmlFor="nameset-all" className="ml-2">
              {t('catalog.customization.all')}
            </Label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="nameset-with"
              name="nameset"
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
              checked={hasNameset === true}
              onChange={() => onNamesetChange(true)}
            />
            <Label htmlFor="nameset-with" className="ml-2">
              {t('catalog.customization.withNameset')}
            </Label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="nameset-without"
              name="nameset"
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
              checked={hasNameset === false}
              onChange={() => onNamesetChange(false)}
            />
            <Label htmlFor="nameset-without" className="ml-2">
              {t('catalog.customization.withoutNameset')}
            </Label>
          </div>
        </div>
      </div>

      {/* Format */}
      <div>
        <h4 className="font-medium mb-2">{t('catalog.format')}</h4>
        <div className="space-y-2">
          {jerseyFormats.map((format) => (
            <div key={format} className="flex items-center">
              <Checkbox
                id={`format-${format}`}
                checked={selectedFormats.includes(format)}
                onCheckedChange={() => onFormatChange(format)}
              />
              <Label htmlFor={`format-${format}`} className="ml-2">
                {format}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <h4 className="font-medium mb-2">{t('catalog.size')}</h4>
        <div className="space-y-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center">
              <Checkbox
                id={`size-${size}`}
                checked={selectedSizes.includes(size)}
                onCheckedChange={() => onSizeChange(size)}
              />
              <Label htmlFor={`size-${size}`} className="ml-2">
                {size}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortAndFilters;