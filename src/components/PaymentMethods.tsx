import { useLanguage } from "@/context/LanguageContext";

const PaymentMethods = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            {t('payment.acceptedMethods')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {/* Visa */}
            <div className="w-16 h-10 flex items-center justify-center">
              <img 
                src="/payment_logo/Visa_2021.svg.png" 
                alt="Visa" 
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Mastercard */}
            <div className="w-16 h-10 flex items-center justify-center">
              <img 
                src="/payment_logo/Mastercard_2019_logo.svg" 
                alt="Mastercard" 
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* PayPal */}
            <div className="w-16 h-10 flex items-center justify-center">
              <img 
                src="/payment_logo/paypal-3384015_1280.webp" 
                alt="PayPal" 
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Google Pay */}
            <div className="w-16 h-10 flex items-center justify-center">
              <img 
                src="/payment_logo/Google_Pay_Logo.svg.png" 
                alt="Google Pay" 
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Klarna */}
            <div className="w-16 h-10 flex items-center justify-center">
              <img 
                src="/payment_logo/klarna_logo_icon_168402.webp" 
                alt="Klarna" 
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Apple Pay */}
            <div className="w-16 h-10 flex items-center justify-center">
              <img 
                src="/payment_logo/Apple_Pay-Logo.wine.svg" 
                alt="Apple Pay" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;