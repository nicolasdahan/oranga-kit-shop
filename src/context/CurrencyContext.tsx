import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Currency = 'EUR' | 'USD' | 'GBP';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (price: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const currencyConfig = {
  EUR: { symbol: '€', rate: 1 },
  USD: { symbol: '$', rate: 1.08 },
  GBP: { symbol: '£', rate: 0.86 }
};

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('EUR');

  const formatPrice = (price: number): string => {
    const { symbol, rate } = currencyConfig[currency];
    const convertedPrice = price * rate;
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      currencyDisplay: 'symbol',
    }).format(convertedPrice);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}

export { useCurrency };