
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, FileText, Scale, Users, Shield, AlertCircle, Clock, CheckCircle } from 'lucide-react';

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="p-4 md:p-6 border-b border-white/10 backdrop-blur-lg bg-black/20">
          <div className="container mx-auto flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-cyan-400 hover:text-cyan-300 group transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DevMaster
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                <Scale className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Terms & Conditions
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                Clear guidelines for our professional development services
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Last updated: January 18, 2024
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {[
                {
                  icon: FileText,
                  title: "Service Agreement",
                  content: [
                    "DevMaster provides custom software development services including web applications, mobile apps, APIs, and technical consulting",
                    "All projects begin with a detailed scope document and signed contract outlining deliverables, timeline, and payment terms",
                    "We reserve the right to refuse projects that don't align with our technical capabilities or business values",
                    "Changes to project scope require written approval and may affect timeline and pricing",
                    "We guarantee professional-grade code following industry best practices and standards"
                  ]
                },
                {
                  icon: DollarSign,
                  title: "Payment Terms",
                  content: [
                    "All prices are quoted in Omani Rial (OMR) unless otherwise specified",
                    "Projects are typically structured with milestone-based payments (30% upfront, 40% at midpoint, 30% on completion)",
                    "Payment is due within 15 days of invoice date unless otherwise agreed",
                    "Late payments may incur a 2% monthly service charge",
                    "Refunds are considered on a case-by-case basis and subject to work completed",
                    "All payments must be made through approved payment methods (bank transfer, credit card, or digital payment platforms)"
                  ]
                },
                {
                  icon: Clock,
                  title: "Project Timeline & Delivery",
                  content: [
                    "Project timelines are estimates based on current scope and may be adjusted for scope changes",
                    "We provide regular progress updates and maintain open communication throughout development",
                    "Delays caused by client feedback loops or requirement changes may extend delivery dates",
                    "We deliver projects in stages with client review and approval at each milestone",
                    "Final delivery includes source code, documentation, and deployment instructions",
                    "We provide a 30-day warranty period for bug fixes on delivered code"
                  ]
                },
                {
                  icon: Shield,
                  title: "Intellectual Property",
                  content: [
                    "Upon full payment, clients retain full ownership of custom-developed code and assets",
                    "DevMaster retains rights to general methodologies, frameworks, and non-client-specific code",
                    "Clients must not resell or redistribute our proprietary tools or frameworks",
                    "We may showcase completed projects in our portfolio unless client requests confidentiality",
                    "All third-party libraries and tools used are properly licensed and documented",
                    "Clients are responsible for obtaining necessary licenses for premium tools or services"
                  ]
                },
                {
                  icon: Users,
                  title: "Client Responsibilities",
                  content: [
                    "Provide clear project requirements and timely feedback during development phases",
                    "Supply necessary assets, content, and access credentials when required",
                    "Review and approve deliverables within agreed timeframes",
                    "Ensure hosting environment meets technical requirements for deployment",
                    "Maintain regular communication and participate in scheduled project meetings",
                    "Test delivered features thoroughly and report issues during warranty period"
                  ]
                },
                {
                  icon: AlertCircle,
                  title: "Limitation of Liability",
                  content: [
                    "Our liability is limited to the total project value paid by the client",
                    "We are not responsible for damages resulting from third-party service outages or failures",
                    "Clients are responsible for data backup and security of their hosting environments",
                    "We provide code 'as-is' after the warranty period expires",
                    "Business losses, lost profits, or consequential damages are excluded from our liability",
                    "Clients must maintain appropriate insurance for their business operations"
                  ]
                }
              ].map((section, index) => (
                <Card key={index} className="bg-black/20 backdrop-blur-lg border border-white/10 p-6 md:p-8 hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold mb-4 text-purple-400">{section.title}</h2>
                        <ul className="space-y-3">
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-300 leading-relaxed">{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Additional Terms */}
              <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6 md:p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-purple-400">Termination & Cancellation</h2>
                    <div className="space-y-4 text-gray-300">
                      <p>
                        Either party may terminate the agreement with 30 days written notice. In case of termination:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li>• Client pays for all completed work up to termination date</li>
                        <li>• Deliverables completed will be provided to the client</li>
                        <li>• Work-in-progress will be delivered in current state</li>
                        <li>• Both parties are released from future obligations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Governing Law */}
              <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6 md:p-8">
                <div className="text-center">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-purple-400">Governing Law</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      These terms are governed by the laws of the Sultanate of Oman. Any disputes will be resolved 
                      through the courts of Muscat, Oman.
                    </p>
                    <p>
                      By engaging our services, you acknowledge that you have read, understood, and agree to be 
                      bound by these terms and conditions.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contact Section */}
              <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6 md:p-8 text-center">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-purple-400">Questions About Terms?</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these Terms & Conditions, please contact us before starting your project.
                </p>
                <div className="space-y-2 text-gray-400">
                  <p>Email: legal@devmaster.com</p>
                  <p>Phone: +968 9123 4567</p>
                  <p>Address: Muscat, Sultanate of Oman</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
