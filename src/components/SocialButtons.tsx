import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from "@/context/LanguageContext";

const SocialButtons = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    // Remplacez ce numéro par votre numéro WhatsApp
    const phoneNumber = "+33600000000";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const openInstagram = () => {
    // Remplacez par votre URL Instagram
    window.open("https://instagram.com/your_account", "_blank");
  };

  return (
    <div className="flex items-center gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white/80 hover:bg-transparent transition-colors duration-300 hover-lift"
              onClick={openWhatsApp}
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t('social.whatsapp')}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white/80 hover:bg-transparent transition-colors duration-300 hover-lift"
              onClick={openInstagram}
            >
              <Instagram className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t('social.instagram')}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SocialButtons;