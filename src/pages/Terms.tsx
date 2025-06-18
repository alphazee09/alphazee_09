
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, Users, CreditCard } from 'lucide-react';

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="p-6 border-b border-white/10 backdrop-blur-lg bg-black/20">
          <div className="container mx-auto flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-cyan-400 hover:text-cyan-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DevMaster
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Terms & Conditions
              </h1>
              <p className="text-xl text-gray-300">
                Please read these terms carefully before using our services.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Last updated: January 18, 2024
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Acceptance of Terms",
                  content: [
                    "By accessing and using DevMaster's services, you accept and agree to be bound by these Terms and Conditions",
                    "If you do not agree to these terms, please do not use our services",
                    "We reserve the right to modify these terms at any time with notice to users",
                    "Your continued use of our services after changes constitutes acceptance of new terms"
                  ]
                },
                {
                  icon: Users,
                  title: "Service Description",
                  content: [
                    "DevMaster provides full-stack software development services including web applications, mobile apps, and custom software solutions",
                    "We offer project consultation, design, development, testing, and deployment services",
                    "All services are provided on a project basis with agreed-upon timelines and deliverables",
                    "We maintain the right to refuse service to any client at our discretion"
                  ]
                },
                {
                  icon: FileText,
                  title: "Project Agreements",
                  content: [
                    "Each project begins with a detailed proposal outlining scope, timeline, and costs",
                    "Changes to project scope must be agreed upon in writing and may affect timeline and cost",
                    "Client is responsible for providing necessary materials, access, and feedback in a timely manner",
                    "Delays caused by client may result in adjusted timelines and additional costs",
                    "Final deliverables are provided upon completion of payment obligations"
                  ]
                },
                {
                  icon: CreditCard,
                  title: "Payment Terms",
                  content: [
                    "Payment schedules are established in individual project agreements",
                    "We typically require a deposit before work begins (usually 25-50% of project cost)",
                    "Payments are due within 30 days of invoice date unless otherwise specified",
                    "Late payments may incur interest charges and project delays",
                    "All payments are non-refundable once work has commenced",
                    "Disputes must be raised within 30 days of invoice date"
                  ]
                },
                {
                  icon: AlertTriangle,
                  title: "Intellectual Property",
                  content: [
                    "Client retains ownership of all custom code and designs created specifically for their project upon full payment",
                    "DevMaster retains rights to general methodologies, techniques, and any pre-existing intellectual property",
                    "We may use non-confidential aspects of completed work in our portfolio and marketing materials",
                    "Client warrants they have rights to all materials provided to us for the project",
                    "We respect all intellectual property rights and expect the same from our clients"
                  ]
                },
                {
                  icon: FileText,
                  title: "Confidentiality",
                  content: [
                    "We maintain strict confidentiality regarding all client information and project details",
                    "Non-disclosure agreements (NDAs) are available upon request for sensitive projects",
                    "We implement appropriate security measures to protect client data and information",
                    "Confidentiality obligations survive the termination of our service agreement",
                    "We may disclose information only when required by law or with client consent"
                  ]
                }
              ].map((section, index) => (
                <Card key={index} className="bg-black/20 backdrop-blur-lg border border-white/10 p-8 hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-cyan-400">{section.title}</h2>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 leading-relaxed">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Limitation of Liability */}
              <Card className="bg-red-500/10 border-red-500/20 backdrop-blur-lg p-8">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-8 w-8 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-red-400">Limitation of Liability</h2>
                    <div className="space-y-3 text-gray-300">
                      <p>
                        DevMaster's liability is limited to the total amount paid for the specific project in question. 
                        We are not liable for any indirect, incidental, special, or consequential damages.
                      </p>
                      <p>
                        While we strive for excellence, we cannot guarantee that our services will be error-free or 
                        that all bugs will be eliminated. We provide services "as is" without warranties of any kind.
                      </p>
                      <p>
                        Clients are responsible for maintaining backups of their data and systems. We are not 
                        responsible for data loss or system failures beyond our direct control.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Termination */}
              <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Termination</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Either party may terminate a project agreement with written notice. Termination does not 
                    relieve client of payment obligations for work completed up to the termination date.
                  </p>
                  <p>
                    In case of termination, client will receive all completed work and documentation upon 
                    payment of outstanding invoices.
                  </p>
                  <p>
                    We reserve the right to terminate services immediately for breach of terms, non-payment, 
                    or any conduct we deem inappropriate or harmful to our business.
                  </p>
                </div>
              </Card>

              {/* Governing Law */}
              <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Governing Law</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    These terms are governed by the laws of the State of California, United States. 
                    Any disputes will be resolved through binding arbitration in San Francisco, California.
                  </p>
                  <p>
                    If any provision of these terms is found to be unenforceable, the remaining provisions 
                    will remain in full force and effect.
                  </p>
                </div>
              </Card>

              {/* Contact Section */}
              <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Questions About These Terms?</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these Terms and Conditions, please contact us.
                </p>
                <div className="space-y-2 text-gray-400">
                  <p>Email: legal@devmaster.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
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
