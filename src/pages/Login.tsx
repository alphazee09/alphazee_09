
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
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
  Github,
  Chrome,
  Apple,
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

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 2000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Social login logic would go here
  };

  const handleContactSupport = () => {
    // This could open a chat widget or redirect to support
    window.open('mailto:support@devmaster.com', '_blank');
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
          <p className="text-gray-400">Sign in to your DevMaster account</p>
        </div>

        {/* Login Card */}
        <Card className="bg-black/20 backdrop-blur-xl border border-white/10 p-8 relative overflow-hidden group hover:bg-black/30 transition-colors duration-500">
          {/* Card Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            {/* Social Login Buttons */}
            <div className="space-y-3 mb-6">
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent transition-all duration-300 hover:scale-105"
                onClick={() => handleSocialLogin('google')}
              >
                <Chrome className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent transition-all duration-300 hover:scale-105"
                onClick={() => handleSocialLogin('apple')}
              >
                <Apple className="mr-2 h-4 w-4" />
                Continue with Apple
              </Button>
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent transition-all duration-300 hover:scale-105"
                onClick={() => handleSocialLogin('github')}
              >
                <Github className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Button>
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
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
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
                <Button variant="link" className="text-cyan-400 hover:text-cyan-300 p-0 h-auto">
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
