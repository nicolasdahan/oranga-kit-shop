import { useLanguage } from "@/context/LanguageContext";
import PaymentMethods from "./PaymentMethods";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t">
      <PaymentMethods />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-muted-foreground">
          © 2024 dadafoot.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;