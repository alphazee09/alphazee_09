
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle, Circle, Lightbulb, Code, Rocket, DollarSign } from 'lucide-react';

const SubmitProject = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
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

  const steps = [
    { number: 1, title: 'Project Type', icon: Lightbulb, description: 'What kind of project are you building?' },
    { number: 2, title: 'Project Details', icon: Code, description: 'Tell us about your vision' },
    { number: 3, title: 'Requirements', icon: Rocket, description: 'Features and timeline' },
    { number: 4, title: 'Budget & Contact', icon: DollarSign, description: 'Final details' }
  ];

  const projectTypes = [
    { id: 'web-app', title: 'Web Application', description: 'Full-stack web applications with modern frameworks' },
    { id: 'mobile-app', title: 'Mobile App', description: 'Native or cross-platform mobile applications' },
    { id: 'ecommerce', title: 'E-Commerce', description: 'Online stores and marketplace platforms' },
    { id: 'api', title: 'API Development', description: 'Backend APIs and microservices' },
    { id: 'mvp', title: 'MVP/Prototype', description: 'Minimum viable product for startups' },
    { id: 'consultation', title: 'Consultation', description: 'Technical consulting and code review' }
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
    // Here you would typically send the data to your backend
    navigate('/project-submitted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Submit Your Project
            </h1>
            <p className="text-xl text-gray-300">
              Let's bring your vision to life with a step-by-step approach
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-12 relative">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-700">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              ></div>
            </div>
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  currentStep >= step.number 
                    ? 'bg-blue-500 border-blue-500 text-white' 
                    : 'bg-gray-800 border-gray-600 text-gray-400'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <div className="mt-2 text-center">
                  <div className={`text-sm font-medium ${currentStep >= step.number ? 'text-white' : 'text-gray-400'}`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500 hidden md:block max-w-24">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg p-8">
            {currentStep === 1 && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">What type of project do you have in mind?</h2>
                  <p className="text-gray-300">Choose the category that best describes your project</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {projectTypes.map((type) => (
                    <div
                      key={type.id}
                      onClick={() => setFormData({...formData, projectType: type.id})}
                      className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        formData.projectType === type.id 
                          ? 'border-blue-500 bg-blue-500/10' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                      <p className="text-gray-400 text-sm">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Tell us about your project</h2>
                  <p className="text-gray-300">Provide details about your vision and goals</p>
                </div>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="projectName" className="text-white">Project Name</Label>
                    <Input
                      id="projectName"
                      value={formData.projectName}
                      onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                      className="bg-white/5 border-white/20 text-white mt-2"
                      placeholder="Enter your project name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description" className="text-white">Project Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="bg-white/5 border-white/20 text-white mt-2 h-32"
                      placeholder="Describe your project, its purpose, target audience, and key objectives..."
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Project Requirements</h2>
                  <p className="text-gray-300">Timeline and specific features needed</p>
                </div>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="timeline" className="text-white">Project Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                      <SelectTrigger className="bg-white/5 border-white/20 text-white mt-2">
                        <SelectValue placeholder="Select your preferred timeline" />
                      </SelectTrigger>
                      <SelectContent>
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
                    <Label className="text-white">Key Features (Optional)</Label>
                    <Textarea
                      className="bg-white/5 border-white/20 text-white mt-2 h-24"
                      placeholder="List any specific features, integrations, or technical requirements..."
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Budget & Contact Information</h2>
                  <p className="text-gray-300">Final details to get started</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white mt-2">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k+">$50,000+</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.contactInfo.name}
                        onChange={(e) => setFormData({...formData, contactInfo: {...formData.contactInfo, name: e.target.value}})}
                        className="bg-white/5 border-white/20 text-white mt-2"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.contactInfo.email}
                        onChange={(e) => setFormData({...formData, contactInfo: {...formData.contactInfo, email: e.target.value}})}
                        className="bg-white/5 border-white/20 text-white mt-2"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-white">Company (Optional)</Label>
                      <Input
                        id="company"
                        value={formData.contactInfo.company}
                        onChange={(e) => setFormData({...formData, contactInfo: {...formData.contactInfo, company: e.target.value}})}
                        className="bg-white/5 border-white/20 text-white mt-2"
                        placeholder="Your company name"
                      />
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
                className="border-white/30 text-white hover:bg-white/10 disabled:opacity-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              
              {currentStep === 4 ? (
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Submit Project
                  <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
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
