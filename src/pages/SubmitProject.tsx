import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle, Circle, Lightbulb, Code, Rocket, DollarSign, Zap, Star, Target, Brain } from 'lucide-react';

const SubmitProject = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    projectType: '',
    projectName: '',
    description: '',
    features: [],
    timeline: '',
    budget: '',
    contactInfo: {
      name: '',
      email: '',
      company: '',
      phone: ''
    }
  });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const steps = [
    { number: 1, title: 'Project Type', icon: Lightbulb, description: 'What kind of project are you building?' },
    { number: 2, title: 'Project Details', icon: Code, description: 'Tell us about your vision' },
    { number: 3, title: 'Requirements', icon: Rocket, description: 'Features and timeline' },
    { number: 4, title: 'Budget & Contact', icon: DollarSign, description: 'Final details' }
  ];

  const projectTypes = [
    { 
      id: 'web-app', 
      title: 'Web Application', 
      description: 'Full-stack web applications with modern frameworks',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'mobile-app', 
      title: 'Mobile App', 
      description: 'Native or cross-platform mobile applications',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'ecommerce', 
      title: 'E-Commerce', 
      description: 'Online stores and marketplace platforms',
      icon: DollarSign,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'api', 
      title: 'API Development', 
      description: 'Backend APIs and microservices',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      id: 'mvp', 
      title: 'MVP/Prototype', 
      description: 'Minimum viable product for startups',
      icon: Rocket,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      id: 'consultation', 
      title: 'Consultation', 
      description: 'Technical consulting and code review',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Project submitted:', formData);
    navigate('/project-submitted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Cursor */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8
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
        {[...Array(30)].map((_, i) => (
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

      {/* Header */}
      <div className="relative z-10 px-4 md:px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10 mb-8 group transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>

          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <Rocket className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Submit Your Project
            </h1>
            <p className="text-xl text-gray-300">
              Let's bring your vision to life with a step-by-step approach
            </p>
          </div>

          {/* Enhanced Progress Steps */}
          <div className="flex justify-between items-center mb-12 relative">
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-700 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-500 rounded-full relative"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform ${
                  currentStep >= step.number 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 border-transparent text-white scale-110' 
                    : 'bg-gray-800 border-gray-600 text-gray-400'
                } ${currentStep === step.number ? 'animate-pulse' : ''}`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-6 w-6" />
                  )}
                </div>
                <div className="mt-3 text-center">
                  <div className={`text-sm font-medium transition-colors ${currentStep >= step.number ? 'text-cyan-400' : 'text-gray-400'}`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500 hidden md:block max-w-24 mt-1">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="relative z-10 px-4 md:px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
            
            {currentStep === 1 && (
              <div className="space-y-8 animate-fade-in relative z-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    What type of project do you have in mind?
                  </h2>
                  <p className="text-gray-300">Choose the category that best describes your project</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectTypes.map((type) => (
                    <div
                      key={type.id}
                      onClick={() => setFormData({...formData, projectType: type.id})}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 transform relative overflow-hidden group ${
                        formData.projectType === type.id 
                          ? 'border-cyan-500 bg-cyan-500/10 scale-105' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${type.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                      <div className="relative z-10">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center mb-4`}>
                          <type.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-cyan-400">{type.title}</h3>
                        <p className="text-gray-400 text-sm">{type.description}</p>
                        {formData.projectType === type.id && (
                          <div className="absolute top-3 right-3">
                            <CheckCircle className="h-5 w-5 text-cyan-400 animate-scale-in" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8 animate-fade-in relative z-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Tell us about your project
                  </h2>
                  <p className="text-gray-300">Provide details about your vision and goals</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="projectName" className="text-white text-lg font-medium">Project Name</Label>
                      <Input
                        id="projectName"
                        value={formData.projectName}
                        onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                        className="bg-white/5 border-white/20 text-white mt-3 p-4 text-lg focus:border-cyan-400 transition-colors"
                        placeholder="Enter your project name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="description" className="text-white text-lg font-medium">Project Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        className="bg-white/5 border-white/20 text-white mt-3 h-40 p-4 text-lg focus:border-cyan-400 transition-colors"
                        placeholder="Describe your project, its purpose, target audience, and key objectives..."
                      />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4">Project Insights</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Target className="h-5 w-5 text-purple-400" />
                        <span className="text-gray-300">Define clear objectives</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-purple-400" />
                        <span className="text-gray-300">Identify your target audience</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Zap className="h-5 w-5 text-purple-400" />
                        <span className="text-gray-300">Highlight unique features</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8 animate-fade-in relative z-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Project Requirements
                  </h2>
                  <p className="text-gray-300">Timeline and specific features needed</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="timeline" className="text-white text-lg font-medium">Project Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white mt-3 p-4 text-lg focus:border-cyan-400">
                          <SelectValue placeholder="Select your preferred timeline" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-white/20">
                          <SelectItem value="asap">ASAP (Rush job)</SelectItem>
                          <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                          <SelectItem value="1month">1 month</SelectItem>
                          <SelectItem value="2-3months">2-3 months</SelectItem>
                          <SelectItem value="3+months">3+ months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-white text-lg font-medium">Key Features (Optional)</Label>
                      <Textarea
                        className="bg-white/5 border-white/20 text-white mt-3 h-32 p-4 text-lg focus:border-cyan-400 transition-colors"
                        placeholder="List any specific features, integrations, or technical requirements..."
                      />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4">Timeline Guide</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-300">Simple Landing Page</span>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400">1-2 weeks</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-300">Web Application</span>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">1-3 months</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-300">E-commerce Platform</span>
                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">2-4 months</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-8 animate-fade-in relative z-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Budget & Contact Information
                  </h2>
                  <p className="text-gray-300">Final details to get started</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label className="text-white text-lg font-medium">Budget Range (OMR)</Label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white mt-3 p-4 text-lg">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-white/20">
                          <SelectItem value="under-2k">Under 2,000 OMR</SelectItem>
                          <SelectItem value="2k-5k">2,000 - 5,000 OMR</SelectItem>
                          <SelectItem value="5k-10k">5,000 - 10,000 OMR</SelectItem>
                          <SelectItem value="10k-20k">10,000 - 20,000 OMR</SelectItem>
                          <SelectItem value="20k+">20,000+ OMR</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white font-medium">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.contactInfo.name}
                          onChange={(e) => setFormData({...formData, contactInfo: {...formData.contactInfo, name: e.target.value}})}
                          className="bg-white/5 border-white/20 text-white mt-2 p-3"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white font-medium">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.contactInfo.email}
                          onChange={(e) => setFormData({...formData, contactInfo: {...formData.contactInfo, email: e.target.value}})}
                          className="bg-white/5 border-white/20 text-white mt-2 p-3"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-white font-medium">Company (Optional)</Label>
                      <Input
                        id="company"
                        value={formData.contactInfo.company}
                        onChange={(e) => setFormData({...formData, contactInfo: {...formData.contactInfo, company: e.target.value}})}
                        className="bg-white/5 border-white/20 text-white mt-2 p-3"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-xl p-6 border border-cyan-400/20">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4">What happens next?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">1</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">Project Review</p>
                          <p className="text-gray-400 text-sm">We'll analyze your requirements within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">2</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">Proposal & Timeline</p>
                          <p className="text-gray-400 text-sm">Receive detailed proposal with pricing</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">3</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">Project Kickoff</p>
                          <p className="text-gray-400 text-sm">Start bringing your vision to life</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-white/10">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="border-white/30 text-white hover:bg-white/10 disabled:opacity-50 transform hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              
              {currentStep === 4 ? (
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Submit Project
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Button>
              ) : (
                <Button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Next Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubmitProject;
