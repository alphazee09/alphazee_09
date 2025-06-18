
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, Eye, Database, Share2, FileText } from 'lucide-react';

const Privacy = () => {
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
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300">
                Your privacy is our priority. Learn how we protect and handle your data.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Last updated: January 18, 2024
              </p>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-8">
              {[
                {
                  icon: Eye,
                  title: "Information We Collect",
                  content: [
                    "Personal information you provide when creating an account (name, email, company details)",
                    "Project information and communications between you and our development team",
                    "Payment information processed securely through our payment providers",
                    "Usage data to improve our services and user experience",
                    "Technical information like IP addresses and browser details for security purposes"
                  ]
                },
                {
                  icon: Lock,
                  title: "How We Use Your Information",
                  content: [
                    "To provide and maintain our development services",
                    "To communicate with you about your projects and account",
                    "To process payments and maintain billing records",
                    "To improve our services and develop new features",
                    "To ensure security and prevent fraud",
                    "To comply with legal obligations"
                  ]
                },
                {
                  icon: Database,
                  title: "Data Storage and Security",
                  content: [
                    "All data is encrypted in transit and at rest using industry-standard encryption",
                    "We use secure cloud infrastructure with regular security audits",
                    "Access to your data is strictly limited to authorized personnel",
                    "We implement multi-factor authentication and access controls",
                    "Regular backups ensure data integrity and availability",
                    "Data retention policies ensure information is kept only as long as necessary"
                  ]
                },
                {
                  icon: Share2,
                  title: "Information Sharing",
                  content: [
                    "We do not sell, trade, or rent your personal information to third parties",
                    "Information may be shared with trusted service providers who assist in our operations",
                    "We may disclose information when required by law or to protect our rights",
                    "Anonymous, aggregated data may be used for analytics and improvements",
                    "You have control over information shared in project collaborations"
                  ]
                },
                {
                  icon: FileText,
                  title: "Your Rights",
                  content: [
                    "Access: You can request a copy of all personal data we hold about you",
                    "Correction: You can update or correct any inaccurate information",
                    "Deletion: You can request deletion of your account and associated data",
                    "Portability: You can request your data in a portable format",
                    "Restriction: You can limit how we process your information",
                    "Objection: You can object to certain types of data processing"
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

              {/* Contact Section */}
              <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Questions About Privacy?</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about this Privacy Policy or how we handle your data, 
                  please don't hesitate to contact us.
                </p>
                <div className="space-y-2 text-gray-400">
                  <p>Email: privacy@devmaster.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
                </div>
              </Card>

              {/* Cookie Policy */}
              <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Cookie Policy</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We use cookies and similar technologies to enhance your experience on our website. 
                    Cookies help us understand how you use our site, remember your preferences, and provide personalized content.
                  </p>
                  <div className="space-y-2">
                    <p><strong>Essential Cookies:</strong> Required for the website to function properly</p>
                    <p><strong>Analytics Cookies:</strong> Help us understand website usage and improve our services</p>
                    <p><strong>Preference Cookies:</strong> Remember your settings and preferences</p>
                  </div>
                  <p>
                    You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect website functionality.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
