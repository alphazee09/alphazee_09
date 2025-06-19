import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import InlineSpinner from "@/components/InlineSpinner";
import { ArrowLeft, Eye, EyeOff, User, Mail, Phone, Building, Lock, CheckCircle, Sparkles } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: ""
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    general: ""
  });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const validateStep = (step: number) => {
    const errors = { ...formErrors };
    
    if (step === 1) {
      errors.firstName = !formData.firstName.trim() ? "First name is required" : "";
      errors.lastName = !formData.lastName.trim() ? "Last name is required" : "";
      errors.email = !formData.email.trim() ? "Email is required" :
                   !/\S+@\S+\.\S+/.test(formData.email) ? "Email is invalid" : "";
    } else if (step === 2) {
      errors.password = !formData.password ? "Password is required" :
                       formData.password.length < 6 ? "Password must be at least 6 characters" : "";
      errors.confirmPassword = !formData.confirmPassword ? "Please confirm your password" :
                              formData.password !== formData.confirmPassword ? "Passwords do not match" : "";
    }

    setFormErrors(errors);
    
    if (step === 1) {
      return !errors.firstName && !errors.lastName && !errors.email;
    } else if (step === 2) {
      return !errors.password && !errors.confirmPassword;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(2)) {
      return;
    }

    setIsLoading(true);
    setFormErrors(prev => ({ ...prev, general: "" }));

    try {
      const response = await fetch("http://localhost:5002/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/login", { 
          state: { message: "Account created successfully! Please sign in." }
        });
      } else {
        const errorData = await response.json();
        setFormErrors(prev => ({ 
          ...prev, 
          general: errorData.message || "Registration failed. Please try again." 
        }));
      }
    } catch (error) {
      setFormErrors(prev => ({ 
        ...prev, 
        general: "Network error. Please try again." 
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Security", icon: Lock },
    { number: 3, title: "Complete", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Cursor */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 hidden md:block"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          opacity: isLoaded ? 1 : 0
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-10">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="text-white hover:bg-white/10 border border-white/20 backdrop-blur-lg"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600">
                <img src="/logo.png" alt="Alphazee09 Logo" className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Join AlphaZee
            </h1>
            <p className="text-gray-400">
              Start your project journey with us
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.number 
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 border-transparent text-white" 
                      : "border-gray-600 text-gray-400"
                  }`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-2 transition-all duration-300 ${
                      currentStep > step.number ? "bg-gradient-to-r from-cyan-500 to-purple-600" : "bg-gray-600"
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <Card className="bg-black/20 backdrop-blur-lg border border-white/10 shadow-2xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-white">
                {currentStep === 1 && "Personal Information"}
                {currentStep === 2 && "Create Password"}
                {currentStep === 3 && "Account Created!"}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {currentStep === 1 && "Tell us about yourself"}
                {currentStep === 2 && "Secure your account"}
                {currentStep === 3 && "Welcome to AlphaZee!"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {formErrors.general && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {formErrors.general}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-300 flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20"
                        />
                        {formErrors.firstName && <p className="text-red-400 text-xs">{formErrors.firstName}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-300 flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20"
                        />
                        {formErrors.lastName && <p className="text-red-400 text-xs">{formErrors.lastName}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300 flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20"
                      />
                      {formErrors.email && <p className="text-red-400 text-xs">{formErrors.email}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-300 flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1234567890"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-300 flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20"
                        />
                      </div>
                    </div>

                    <Button
                      type="button"
                      onClick={handleNext}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                    >
                      Continue
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Button>
                  </div>
                )}

                {/* Step 2: Password */}
                {currentStep === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-gray-300 flex items-center">
                        <Lock className="h-4 w-4 mr-2" />
                        Password *
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                      {formErrors.password && <p className="text-red-400 text-xs">{formErrors.password}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-gray-300 flex items-center">
                        <Lock className="h-4 w-4 mr-2" />
                        Confirm Password *
                      </Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20 pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                      {formErrors.confirmPassword && <p className="text-red-400 text-xs">{formErrors.confirmPassword}</p>}
                    </div>

                    <div className="flex justify-between mt-6">
                      <Button
                        type="button"
                        onClick={handleBack}
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <InlineSpinner size="sm" color="white" className="mr-2" />
                            Creating Account...
                          </div>
                        ) : (
                          <span className="flex items-center justify-center">
                            Create Account
                            <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Account Created */}
                {currentStep === 3 && (
                  <div className="text-center space-y-6 animate-fade-in">
                    <CheckCircle className="h-20 w-20 text-green-500 mx-auto animate-bounce" />
                    <h2 className="text-2xl font-bold text-white">Account Created Successfully!</h2>
                    <p className="text-gray-300">You can now log in to your new account.</p>
                    <Button
                      onClick={() => navigate("/login")}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                    >
                      Go to Login
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="mt-8 text-center animate-fade-in delay-500">
            <p className="text-gray-500 text-xs mb-4">Trusted by developers worldwide</p>
            <div className="flex justify-center items-center space-x-6 opacity-50">
              <div className="flex items-center space-x-1">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span className="text-xs text-gray-400">Cutting-Edge Security</span>
              </div>
              <div className="flex items-center space-x-1">
                <img src="/logo.png" alt="Alphazee09 Logo" className="h-4 w-4 mr-1" />
                <span className="text-xs text-gray-400">Seamless Experience</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-xs text-gray-400">Verified Accounts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


