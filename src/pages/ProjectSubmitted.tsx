
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Home, MessageSquare, Zap, Star, Clock, Award, Target } from 'lucide-react';

const ProjectSubmitted = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center px-4 md:px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <Card className="bg-black/20 border-white/10 backdrop-blur-lg p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
          
          <div className="relative z-10">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in relative">
                <CheckCircle className="h-12 w-12 text-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full animate-ping opacity-75"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Project Submitted Successfully!
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Thank you for choosing our services. Your project has been received and we'll review it within 24 hours.
              </p>
            </div>

            {/* Enhanced Success Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Clock, label: '24 Hours', desc: 'Response Time' },
                { icon: Star, label: '4.9/5', desc: 'Client Rating' },
                { icon: Award, label: '50+', desc: 'Projects Delivered' },
                { icon: Target, label: '98%', desc: 'Success Rate' }
              ].map((stat, index) => (
                <Card key={index} className="bg-white/5 border-white/10 p-4 hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                  <stat.icon className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.desc}</div>
                </Card>
              ))}
            </div>

            <div className="bg-black/20 rounded-xl p-6 md:p-8 mb-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400 flex items-center justify-center">
                <Zap className="mr-2 h-6 w-6" />
                What happens next?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-white">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">Project Review</p>
                    <p className="text-gray-400 text-sm">We'll analyze your requirements and prepare a detailed proposal</p>
                  </div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-white">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">Initial Contact</p>
                    <p className="text-gray-400 text-sm">You'll receive an email with timeline, pricing, and next steps</p>
                  </div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-white">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">Collaboration Begins</p>
                    <p className="text-gray-400 text-sm">Once approved, we'll start bringing your vision to life</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                onClick={() => navigate('/dashboard')}
              >
                <span className="relative z-10 flex items-center">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
                onClick={() => navigate('/')}
              >
                <Home className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-4">
                Have questions about your project?
              </p>
              <Button 
                variant="ghost" 
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 transform hover:scale-105 transition-all duration-300"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectSubmitted;
