import { useLanguage } from "@/context/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";

interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const SortSelect = ({ value, onChange }: SortSelectProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t('catalog.sort')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">{t('catalog.sort.newest')}</SelectItem>
          <SelectItem value="oldest">{t('catalog.sort.oldest')}</SelectItem>
          <SelectItem value="priceAsc">{t('catalog.sort.priceAsc')}</SelectItem>
          <SelectItem value="priceDesc">{t('catalog.sort.priceDesc')}</SelectItem>
          <SelectItem value="seasonDesc">{t('catalog.sort.seasonDesc')}</SelectItem>
          <SelectItem value="seasonAsc">{t('catalog.sort.seasonAsc')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortSelect;