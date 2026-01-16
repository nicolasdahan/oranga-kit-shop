import { useLanguage } from "@/context/LanguageContext";
import PaymentMethods from "./PaymentMethods";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t">
      <PaymentMethods />
      
      {/* Business Information Section */}
      <div className="w-full bg-gray-50 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            
            {/* SIRET */}
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-gray-600 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">SIRET</p>
                <p className="text-gray-600">123 456 789 00012</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-gray-600 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Phone</p>
                <a href="tel:+33123456789" className="text-gray-600 hover:text-primary transition-colors">
                  +33 1 23 45 67 89
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gray-600 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email</p>
                <a href="mailto:contact@kitup.com" className="text-gray-600 hover:text-primary transition-colors">
                  contact@kitup.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Address</p>
                <p className="text-gray-600">
                  123 Rue Example<br />
                  75001 Paris, France
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-muted-foreground">
          © 2026 KitUp.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;