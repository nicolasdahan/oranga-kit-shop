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
import { Checkbox } from '../../components/ui/checkbox';
import { Eye, EyeOff, Mail, Lock, User, Facebook, Chrome } from 'lucide-react';

const Register = () => {
  const { t } = useLanguage();
  const { register, loginWithFacebook, loginWithGoogle, isLoading } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError(t('auth.passwordMismatch'));
      return;
    }

    if (!acceptTerms) {
      setError(t('auth.acceptTermsRequired'));
      return;
    }

    try {
      await register(formData.firstName, formData.lastName, formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError(t('auth.registerError'));
    }
  };

  const handleFacebookRegister = async () => {
    try {
      await loginWithFacebook();
      navigate('/');
    } catch (err) {
      setError(t('auth.facebookError'));
    }
  };

  const handleGoogleRegister = async () => {
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
              {t('auth.register')}
            </CardTitle>
            <CardDescription>
              {t('auth.registerDescription')}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Boutons d'inscription sociale */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
                onClick={handleFacebookRegister}
                disabled={isLoading}
              >
                <Facebook className="mr-2 h-4 w-4" />
                {t('auth.continueWithFacebook')}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="w-full bg-red-600 text-white hover:bg-red-700"
                onClick={handleGoogleRegister}
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

            {/* Formulaire d'inscription */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t('auth.firstName')}</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder={t('auth.firstNamePlaceholder')}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">{t('auth.lastName')}</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder={t('auth.lastNamePlaceholder')}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('auth.email')}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
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
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
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

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">{t('auth.confirmPassword')}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder={t('auth.confirmPasswordPlaceholder')}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm">
                  {t('auth.acceptTerms')}{' '}
                  <Link to="/terms" className="text-primary hover:underline">
                    {t('auth.termsOfService')}
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? t('auth.creatingAccount') : t('auth.register')}
              </Button>
            </form>

            <div className="text-center">
              <span className="text-sm text-gray-600">
                {t('auth.alreadyHaveAccount')}{' '}
                <Link
                  to="/auth/login"
                  className="text-primary hover:underline font-medium"
                >
                  {t('auth.login')}
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;