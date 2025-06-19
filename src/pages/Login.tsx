
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import InlineSpinner from "@/components/InlineSpinner";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowRight, 
  Zap, 
  Shield, 
  Star, 
  Sparkles,
  MessageCircle
} from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors({ email: '', password: '' });

    // Basic validation
    if (!email) {
      setFormErrors(prev => ({ ...prev, email: 'Email is required' }));
      setIsLoading(false);
      return;
    }
    if (!password) {
      setFormErrors(prev => ({ ...prev, password: 'Password is required' }));
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5002/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Navigate to dashboard
        navigate('/dashboard');
      } else {
        setFormErrors(prev => ({ ...prev, password: data.error || 'Login failed' }));
      }
    } catch (error) {
      setFormErrors(prev => ({ ...prev, password: 'Network error. Please try again.' }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Social login logic would go here
  };

  const handleContactSupport = () => {
    window.open('mailto:hi@mazinyahia.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Cursor */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 hidden md:block"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Login Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4 transform hover:scale-110 transition-transform duration-300">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-400">Sign in to your Alphazee09 account</p>
        </div>

        {/* Login Card */}
        <Card className="bg-black/20 backdrop-blur-xl border border-white/10 p-8 relative overflow-hidden group hover:bg-black/30 transition-colors duration-500">
          {/* Card Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            {/* Social Login Icons */}
            <div className="flex justify-center space-x-6 mb-6">
              <div 
                className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={() => handleSocialLogin('google')}
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div 
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={() => handleSocialLogin('facebook')}
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <Separator className="bg-white/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-black/20 px-4 text-gray-400 text-sm">or continue with email</span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-cyan-400" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 transition-colors duration-300"
                />
                {formErrors.email && (
                  <p className="text-red-400 text-sm">{formErrors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white flex items-center">
                  <Lock className="mr-2 h-4 w-4 text-purple-400" />
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 transition-colors duration-300 pr-12"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {formErrors.password && (
                  <p className="text-red-400 text-sm">{formErrors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-gray-300">
                  <input type="checkbox" className="rounded border-white/20 bg-white/5" />
                  <span className="text-sm">Remember me</span>
                </label>
                <Button
                  variant="link"
                  className="text-cyan-400 hover:text-cyan-300 p-0 h-auto"
                >
                  Forgot password?
                </Button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <InlineSpinner size="sm" color="white" className="mr-2" />
                    Signing in...
                  </div>
                ) : (
                  <span className="flex items-center justify-center">
                    Sign In
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </form>

            {/* Footer Links */}
            <div className="mt-8 text-center space-y-4">
              <p className="text-gray-400 text-sm">
                Don't have an account?{' '}
                <Button variant="link" className="text-cyan-400 hover:text-cyan-300 p-0 h-auto" onClick={() => navigate('/signup')}>
                  Sign up
                </Button>
              </p>

              <div className="flex justify-center space-x-6 text-sm">
                <Button 
                  variant="link" 
                  className="text-gray-400 hover:text-white p-0 h-auto"
                  onClick={() => navigate('/privacy')}
                >
                  Privacy
                </Button>
                <Button 
                  variant="link" 
                  className="text-gray-400 hover:text-white p-0 h-auto"
                  onClick={() => navigate('/terms')}
                >
                  Terms
                </Button>
                <Button 
                  variant="link" 
                  className="text-gray-400 hover:text-white p-0 h-auto flex items-center"
                  onClick={handleContactSupport}
                >
                  <MessageCircle className="mr-1 h-3 w-3" />
                  Support
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 opacity-20">
            <Star className="h-6 w-6 text-yellow-400 animate-pulse" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-20">
            <Shield className="h-6 w-6 text-green-400 animate-pulse delay-500" />
          </div>
          <div className="absolute top-1/2 left-4 opacity-20">
            <Sparkles className="h-4 w-4 text-pink-400 animate-pulse delay-1000" />
          </div>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-8 text-center animate-fade-in delay-500">
          <p className="text-gray-500 text-xs mb-4">Trusted by developers worldwide</p>
          <div className="flex justify-center items-center space-x-6 opacity-50">
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-xs text-gray-400">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="text-xs text-gray-400">Fast Login</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-purple-400" />
              <span className="text-xs text-gray-400">5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
