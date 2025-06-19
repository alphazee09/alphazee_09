
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import InlineSpinner from "./InlineSpinner";
import { 
  FileText, 
  Download, 
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  User,
  Building,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Signature,
  ArrowLeft
} from 'lucide-react';

interface ViewContractProps {
  contractId: string;
  onBack: () => void;
}

const ViewContract = ({ contractId, onBack }: ViewContractProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Mock contract data - in real app this would come from API
  const contract = {
    id: contractId,
    name: 'E-Commerce Platform Development Contract',
    status: 'active',
    amount: '15,000 OMR',
    signedDate: '2024-01-10',
    expiryDate: '2024-06-10',
    createdDate: '2024-01-05',
    project: 'E-Commerce Platform',
    progress: 65,
    clientInfo: {
      name: 'Ahmed Al-Rashid',
      company: 'TechStart Solutions',
      email: 'ahmed@techstart.com',
      phone: '+968 9876 5432',
      address: 'Muscat, Oman'
    },
    contractTerms: [
      'Full-stack development of e-commerce platform',
      'Responsive design for mobile and desktop',
      'Payment gateway integration',
      'Admin dashboard development',
      'SEO optimization',
      '3 months maintenance included'
    ],
    milestones: [
      { name: 'Project Planning & Design', amount: '3,000 OMR', status: 'completed', dueDate: '2024-01-20' },
      { name: 'Frontend Development', amount: '6,000 OMR', status: 'in-progress', dueDate: '2024-03-15' },
      { name: 'Backend Development', amount: '4,500 OMR', status: 'pending', dueDate: '2024-05-01' },
      { name: 'Testing & Deployment', amount: '1,500 OMR', status: 'pending', dueDate: '2024-06-01' }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'in-progress': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return CheckCircle;
      case 'pending': return Clock;
      case 'completed': return CheckCircle;
      case 'in-progress': return Clock;
      default: return AlertCircle;
    }
  };

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
      console.log('Contract downloaded');
    }, 2000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={onBack}
            className="border-white/30 text-white hover:bg-white/10 bg-transparent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Contracts
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Contract Details</h1>
            <p className="text-gray-400">Contract ID: {contractId}</p>
          </div>
        </div>
        <Button
          onClick={handleDownload}
          disabled={isDownloading}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-none"
        >
          {isDownloading ? (
            <div className="flex items-center">
              <InlineSpinner size="sm" color="white" className="mr-2" />
              Downloading...
            </div>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </>
          )}
        </Button>
      </div>

      {/* Contract Overview */}
      <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">{contract.name}</h2>
              <p className="text-gray-400 mb-4">{contract.project}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="text-green-400">Total Amount: {contract.amount}</span>
                <span className="text-gray-400">Signed: {contract.signedDate}</span>
                <span className="text-gray-400">Expires: {contract.expiryDate}</span>
              </div>
            </div>
          </div>
          <Badge className={getStatusColor(contract.status)}>
            {contract.status}
          </Badge>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-semibold">Project Progress</span>
            <span className="text-cyan-400">{contract.progress}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${contract.progress}%` }}
            ></div>
          </div>
        </div>
      </Card>

      {/* Client Information */}
      <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <User className="mr-2 h-5 w-5 text-cyan-400" />
          Client Information
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <User className="h-4 w-4 text-gray-400" />
              <span className="text-white">{contract.clientInfo.name}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Building className="h-4 w-4 text-gray-400" />
              <span className="text-white">{contract.clientInfo.company}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span className="text-white">{contract.clientInfo.address}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-gray-400" />
              <span className="text-white">{contract.clientInfo.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-gray-400" />
              <span className="text-white">{contract.clientInfo.phone}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Contract Terms */}
      <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <FileText className="mr-2 h-5 w-5 text-purple-400" />
          Contract Terms & Deliverables
        </h3>
        <div className="space-y-3">
          {contract.contractTerms.map((term, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
              <span className="text-gray-300">{term}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Payment Milestones */}
      <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <CreditCard className="mr-2 h-5 w-5 text-green-400" />
          Payment Milestones
        </h3>
        <div className="space-y-4">
          {contract.milestones.map((milestone, index) => {
            const StatusIcon = getStatusIcon(milestone.status);
            return (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-4">
                  <StatusIcon className={`h-5 w-5 ${
                    milestone.status === 'completed' ? 'text-green-400' :
                    milestone.status === 'in-progress' ? 'text-purple-400' :
                    'text-gray-400'
                  }`} />
                  <div>
                    <h4 className="text-white font-semibold">{milestone.name}</h4>
                    <p className="text-gray-400 text-sm">Due: {milestone.dueDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">{milestone.amount}</div>
                  <Badge className={getStatusColor(milestone.status)} variant="outline">
                    {milestone.status}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Digital Signature */}
      <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Signature className="mr-2 h-5 w-5 text-cyan-400" />
          Digital Signatures
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-white font-semibold">Client Signature</span>
            </div>
            <p className="text-gray-400 text-sm">Signed on {contract.signedDate}</p>
            <p className="text-green-400 text-sm">Verified ✓</p>
          </div>
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-white font-semibold">Developer Signature</span>
            </div>
            <p className="text-gray-400 text-sm">Signed on {contract.signedDate}</p>
            <p className="text-green-400 text-sm">Verified ✓</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ViewContract;
