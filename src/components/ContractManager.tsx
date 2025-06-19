
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  FileText, 
  Download, 
  Eye, 
  Upload,
  CheckCircle,
  Clock,
  AlertCircle,
  Shield,
  Signature,
  Camera,
  Save
} from 'lucide-react';

const ContractManager = () => {
  const [frontIdImage, setFrontIdImage] = useState<string | null>(null);
  const [backIdImage, setBackIdImage] = useState<string | null>(null);
  const [signaturePad, setSignaturePad] = useState<string>('');
  const [isSignatureVerified, setIsSignatureVerified] = useState(false);

  const contracts = [
    {
      id: 1,
      name: 'E-Commerce Platform Development Contract',
      status: 'active',
      amount: '15,000 OMR',
      signedDate: '2024-01-10',
      expiryDate: '2024-06-10',
      project: 'E-Commerce Platform',
      progress: 65
    },
    {
      id: 2,
      name: 'Mobile App UI/UX Design Agreement',
      status: 'pending',
      amount: '8,500 OMR',
      signedDate: null,
      expiryDate: '2024-03-15',
      project: 'Mobile App UI/UX',
      progress: 0
    },
    {
      id: 3,
      name: 'API Development Service Contract',
      status: 'completed',
      amount: '5,000 OMR',
      signedDate: '2023-12-01',
      expiryDate: '2024-01-15',
      project: 'API Development',
      progress: 100
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'expired': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return CheckCircle;
      case 'pending': return Clock;
      case 'completed': return CheckCircle;
      case 'expired': return AlertCircle;
      default: return Clock;
    }
  };

  const handleImageUpload = (file: File, type: 'front' | 'back') => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (type === 'front') {
        setFrontIdImage(result);
      } else {
        setBackIdImage(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSignatureVerification = () => {
    if (frontIdImage && backIdImage && signaturePad) {
      setIsSignatureVerified(true);
      // Here you would typically send the data to your backend
      console.log('E-Signature verification completed');
    }
  };

  return (
    <div className="space-y-6 md:space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Contract Management
        </h1>
      </div>

      {/* E-Signature Setup */}
      <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-4 md:p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600">
            <Signature className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">E-Signature Management</h3>
            <p className="text-gray-400">Set up your verified digital signature for contracts</p>
          </div>
          {isSignatureVerified && (
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 ml-auto">
              <Shield className="mr-1 h-4 w-4" />
              Verified
            </Badge>
          )}
        </div>

        {!isSignatureVerified ? (
          <div className="grid md:grid-cols-2 gap-6">
            {/* ID Upload Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <Camera className="mr-2 h-5 w-5 text-cyan-400" />
                Identity Verification
              </h4>
              
              {/* Front ID Upload */}
              <div className="space-y-2">
                <Label className="text-white">Front Side of ID</Label>
                <div className="border-2 border-dashed border-white/20 rounded-lg p-4 text-center hover:border-cyan-400/50 transition-colors">
                  {frontIdImage ? (
                    <div className="space-y-2">
                      <img src={frontIdImage} alt="Front ID" className="max-h-32 mx-auto rounded" />
                      <p className="text-green-400 text-sm">Front ID uploaded successfully</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                      <p className="text-gray-400">Upload front side of your ID</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0], 'front')}
                        className="hidden"
                        id="front-id"
                      />
                      <Label htmlFor="front-id" className="cursor-pointer">
                        <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 bg-transparent">
                          Choose File
                        </Button>
                      </Label>
                    </div>
                  )}
                </div>
              </div>

              {/* Back ID Upload */}
              <div className="space-y-2">
                <Label className="text-white">Back Side of ID</Label>
                <div className="border-2 border-dashed border-white/20 rounded-lg p-4 text-center hover:border-cyan-400/50 transition-colors">
                  {backIdImage ? (
                    <div className="space-y-2">
                      <img src={backIdImage} alt="Back ID" className="max-h-32 mx-auto rounded" />
                      <p className="text-green-400 text-sm">Back ID uploaded successfully</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                      <p className="text-gray-400">Upload back side of your ID</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0], 'back')}
                        className="hidden"
                        id="back-id"
                      />
                      <Label htmlFor="back-id" className="cursor-pointer">
                        <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 bg-transparent">
                          Choose File
                        </Button>
                      </Label>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <Signature className="mr-2 h-5 w-5 text-purple-400" />
                Digital Signature
              </h4>
              
              <div className="space-y-2">
                <Label className="text-white">Your Signature</Label>
                <div className="border border-white/20 rounded-lg p-4 bg-white min-h-[200px] relative">
                  <canvas
                    className="w-full h-48 border border-gray-300 rounded cursor-crosshair"
                    onMouseDown={(e) => {
                      const canvas = e.currentTarget;
                      const rect = canvas.getBoundingClientRect();
                      // Basic signature drawing logic would go here
                      setSignaturePad('signature-data');
                    }}
                  />
                  <div className="absolute top-2 right-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSignaturePad('')}
                      className="border-gray-300 text-gray-600 hover:bg-gray-100"
                    >
                      Clear
                    </Button>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">Draw your signature in the box above</p>
              </div>

              {frontIdImage && backIdImage && signaturePad && (
                <Button
                  onClick={handleSignatureVerification}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-none"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Verify & Save E-Signature
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
              <Shield className="h-8 w-8 text-green-400" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">E-Signature Verified</h4>
            <p className="text-gray-400 mb-4">Your digital signature is now verified and will be automatically added to all future contracts.</p>
            <Button
              variant="outline"
              onClick={() => setIsSignatureVerified(false)}
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              Update Signature
            </Button>
          </div>
        )}
      </Card>

      {/* Contracts List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Your Contracts</h3>
        {contracts.map((contract) => {
          const StatusIcon = getStatusIcon(contract.status);
          return (
            <Card key={contract.id} className="bg-black/20 backdrop-blur-lg border border-white/10 p-4 md:p-6 hover:bg-white/5 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0">
                    <StatusIcon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">{contract.name}</h4>
                    <p className="text-gray-400 text-sm mb-2">Project: {contract.project}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-green-400">Amount: {contract.amount}</span>
                      {contract.signedDate && (
                        <span className="text-gray-400">Signed: {contract.signedDate}</span>
                      )}
                      <span className="text-gray-400">Expires: {contract.expiryDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                  <Badge className={getStatusColor(contract.status)}>
                    {contract.status}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 bg-transparent"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-green-400/50 text-green-400 hover:bg-green-400/10 bg-transparent"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ContractManager;
