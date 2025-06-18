
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Home, MessageSquare } from 'lucide-react';

const ProjectSubmitted = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center px-6">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <Card className="bg-white/5 border-white/10 backdrop-blur-lg p-12">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Project Submitted Successfully!
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Thank you for choosing our services. Your project has been received and we'll review it within 24 hours.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium">Project Review</p>
                  <p className="text-gray-400 text-sm">We'll analyze your requirements and prepare a detailed proposal</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium">Initial Contact</p>
                  <p className="text-gray-400 text-sm">You'll receive an email with timeline, pricing, and next steps</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium">Collaboration Begins</p>
                  <p className="text-gray-400 text-sm">Once approved, we'll start bringing your vision to life</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              onClick={() => navigate('/dashboard')}
            >
              Go to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => navigate('/')}
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-4">
              Have questions about your project?
            </p>
            <Button 
              variant="ghost" 
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectSubmitted;
