import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Eye, EyeOff, Mail, Lock, Facebook, Chrome } from 'lucide-react';

const Login = () => {
  const { t } = useLanguage();
  const { login, loginWithFacebook, loginWithGoogle, isLoading } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(t('auth.loginError'));
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await loginWithFacebook();
      navigate('/');
    } catch (err) {
      setError(t('auth.facebookError'));
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (err) {
      setError(t('auth.googleError'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              {t('auth.login')}
            </CardTitle>
            <CardDescription>
              {t('auth.loginDescription')}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Boutons de connexion sociale */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
                onClick={handleFacebookLogin}
                disabled={isLoading}
              >
                <Facebook className="mr-2 h-4 w-4" />
                {t('auth.continueWithFacebook')}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="w-full bg-red-600 text-white hover:bg-red-700"
                onClick={handleGoogleLogin}
                disabled={isLoading}
              >
                <Chrome className="mr-2 h-4 w-4" />
                {t('auth.continueWithGoogle')}
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  {t('auth.orContinueWith')}
                </span>
              </div>
            </div>

            {/* Formulaire de connexion */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t('auth.email')}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('auth.emailPlaceholder')}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{t('auth.password')}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t('auth.passwordPlaceholder')}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  to="/auth/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  {t('auth.forgotPassword')}
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? t('auth.loggingIn') : t('auth.login')}
              </Button>
            </form>

            <div className="text-center">
              <span className="text-sm text-gray-600">
                {t('auth.noAccount')}{' '}
                <Link
                  to="/auth/register"
                  className="text-primary hover:underline font-medium"
                >
                  {t('auth.createAccount')}
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;