import { User, LogOut, History, Settings, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-2 hover:bg-transparent text-white hover:text-white/80 transition-colors duration-300 hover-lift"
        >
          <User className="h-5 w-5" />
          {isAuthenticated && (
            <span className="hidden sm:inline font-medium">
              {user?.firstName}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        {isAuthenticated ? (
          <>
            <div className="p-2">
              <div className="text-sm font-medium">{user?.firstName} {user?.lastName}</div>
              <div className="text-xs text-muted-foreground">{user?.email}</div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/account/orders" className="flex items-center gap-2 cursor-pointer">
                <History className="h-4 w-4" />
                <span>{t('user.menu.orders')}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/account/settings" className="flex items-center gap-2 cursor-pointer">
                <Settings className="h-4 w-4" />
                <span>{t('user.menu.settings')}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="text-red-600 focus:text-red-600 flex items-center gap-2 cursor-pointer"
              onClick={logout}
            >
              <LogOut className="h-4 w-4" />
              <span>{t('user.menu.logout')}</span>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link to="/auth/login" className="flex items-center gap-2 cursor-pointer">
                <LogIn className="h-4 w-4" />
                <span>{t('user.menu.login')}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/auth/register" className="flex items-center gap-2 cursor-pointer">
                <UserPlus className="h-4 w-4" />
                <span>{t('user.menu.register')}</span>
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;