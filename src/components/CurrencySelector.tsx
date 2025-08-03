import { Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrency, Currency } from "@/context/CurrencyContext";

const CurrencySelector = () => {
  const { currency, setCurrency } = useCurrency();

  const currencies = [
    { code: 'EUR' as Currency, name: 'Euro', symbol: '€' },
    { code: 'USD' as Currency, name: 'US Dollar', symbol: '$' },
    { code: 'GBP' as Currency, name: 'British Pound', symbol: '£' },
  ];

  const currentCurrency = currencies.find(cur => cur.code === currency);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-2 hover:bg-transparent text-white hover:text-white/80 transition-colors duration-300 hover-lift"
        >
          <Coins className="h-4 w-4" />
          <span className="hidden sm:inline font-medium">{currentCurrency?.symbol}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {currencies.map((cur) => (
          <DropdownMenuItem
            key={cur.code}
            onClick={() => setCurrency(cur.code)}
            className={`flex items-center gap-2 ${
              currency === cur.code 
                ? 'bg-primary/10 text-primary' 
                : 'hover:text-primary hover:bg-primary/5'
            } transition-colors duration-300`}
          >
            <span className="w-6 text-center font-medium">{cur.symbol}</span>
            <span>{cur.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CurrencySelector;