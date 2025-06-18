
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Download, 
  Edit, 
  Send, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Eye,
  PenTool,
  Shield,
  Calendar,
  DollarSign,
  User
} from 'lucide-react';

const ContractManager = () => {
  const [activeTab, setActiveTab] = useState('contracts');
  const [selectedContract, setSelectedContract] = useState<any>(null);

  const contracts = [
    {
      id: 1,
      title: 'E-Commerce Platform Development',
      status: 'active',
      value: '15,000 OMR',
      startDate: '2024-01-15',
      endDate: '2024-04-15',
      client: 'Tech Solutions LLC',
      progress: 65,
      type: 'Development Contract'
    },
    {
      id: 2,
      title: 'Mobile App UI/UX Design',
      status: 'pending',
      value: '8,500 OMR',
      startDate: '2024-02-01',
      endDate: '2024-03-15',
      client: 'StartupCorp',
      progress: 0,
      type: 'Design Contract'
    },
    {
      id: 3,
      title: 'API Development & Integration',
      status: 'completed',
      value: '5,000 OMR',
      startDate: '2023-12-01',
      endDate: '2024-01-15',
      client: 'DataFlow Inc',
      progress: 100,
      type: 'API Contract'
    }
  ];

  const contractTemplates = [
    {
      id: 1,
      name: 'Web Development Contract',
      description: 'Standard contract for web application development projects',
      type: 'Development'
    },
    {
      id: 2,
      name: 'UI/UX Design Contract',
      description: 'Contract template for design and user experience projects',
      type: 'Design'
    },
    {
      id: 3,
      name: 'Consultation Agreement',
      description: 'Contract for technical consulting and advisory services',
      type: 'Consulting'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'cancelled': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return Clock;
      case 'pending': return AlertCircle;
      case 'completed': return CheckCircle;
      default: return FileText;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Contract Management
        </h1>
        <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
          <PenTool className="mr-2 h-4 w-4" />
          New Contract
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-black/20 border border-white/10">
          <TabsTrigger value="contracts" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
            Contracts
          </TabsTrigger>
          <TabsTrigger value="templates" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
            Templates
          </TabsTrigger>
          <TabsTrigger value="create" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
            Create New
          </TabsTrigger>
          <TabsTrigger value="signatures" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
            E-Signatures
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contracts" className="space-y-4">
          <div className="grid gap-6">
            {contracts.map((contract) => {
              const StatusIcon = getStatusIcon(contract.status);
              return (
                <Card key={contract.id} className="bg-black/20 backdrop-blur-lg border border-white/10 p-6 hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600">
                        <StatusIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-cyan-400">{contract.title}</h3>
                        <p className="text-gray-400">{contract.type} • {contract.client}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(contract.status)}>
                      {contract.status}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <DollarSign className="h-5 w-5 text-green-400 mx-auto mb-1" />
                      <p className="text-sm text-gray-400">Value</p>
                      <p className="font-semibold text-green-400">{contract.value}</p>
                    </div>
                    <div className="text-center">
                      <Calendar className="h-5 w-5 text-purple-400 mx-auto mb-1" />
                      <p className="text-sm text-gray-400">Start Date</p>
                      <p className="font-semibold">{contract.startDate}</p>
                    </div>
                    <div className="text-center">
                      <Calendar className="h-5 w-5 text-purple-400 mx-auto mb-1" />
                      <p className="text-sm text-gray-400">End Date</p>
                      <p className="font-semibold">{contract.endDate}</p>
                    </div>
                    <div className="text-center">
                      <User className="h-5 w-5 text-cyan-400 mx-auto mb-1" />
                      <p className="text-sm text-gray-400">Progress</p>
                      <p className="font-semibold text-cyan-400">{contract.progress}%</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                      <Eye className="mr-2 h-4 w-4" />
                      View Contract
                    </Button>
                    <Button variant="outline" size="sm" className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button variant="outline" size="sm" className="border-green-400/50 text-green-400 hover:bg-green-400/10">
                      <Send className="mr-2 h-4 w-4" />
                      Send to Client
                    </Button>
                    {contract.status === 'pending' && (
                      <Button variant="outline" size="sm" className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contractTemplates.map((template) => (
              <Card key={template.id} className="bg-black/20 backdrop-blur-lg border border-white/10 p-6 hover:bg-white/5 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">{template.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{template.description}</p>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 mb-4">
                    {template.type}
                  </Badge>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                      <PenTool className="mr-2 h-4 w-4" />
                      Use Template
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Create New Contract</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="contractTitle" className="text-white">Contract Title</Label>
                  <Input
                    id="contractTitle"
                    className="bg-white/5 border-white/20 text-white mt-2"
                    placeholder="Enter contract title"
                  />
                </div>
                <div>
                  <Label htmlFor="clientName" className="text-white">Client Name</Label>
                  <Input
                    id="clientName"
                    className="bg-white/5 border-white/20 text-white mt-2"
                    placeholder="Enter client name"
                  />
                </div>
                <div>
                  <Label htmlFor="contractValue" className="text-white">Contract Value (OMR)</Label>
                  <Input
                    id="contractValue"
                    type="number"
                    className="bg-white/5 border-white/20 text-white mt-2"
                    placeholder="Enter contract value"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate" className="text-white">Start Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      className="bg-white/5 border-white/20 text-white mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="endDate" className="text-white">End Date</Label>
                    <Input
                      id="endDate"
                      type="date"
                      className="bg-white/5 border-white/20 text-white mt-2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="contractTerms" className="text-white">Contract Terms</Label>
                <Textarea
                  id="contractTerms"
                  className="bg-white/5 border-white/20 text-white mt-2 h-64"
                  placeholder="Enter contract terms and conditions..."
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Save as Draft
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                Generate Contract
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="signatures" className="space-y-6">
          <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">E-Signature Management</h3>
              <p className="text-gray-300 mb-6">
                Secure digital signatures for contract validation and legal compliance
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-white">Legally Binding</h4>
                  <p className="text-gray-400 text-sm">Compliant with digital signature laws</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-white">Secure</h4>
                  <p className="text-gray-400 text-sm">256-bit encryption protection</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Clock className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-white">Fast</h4>
                  <p className="text-gray-400 text-sm">Sign contracts in minutes</p>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                <PenTool className="mr-2 h-4 w-4" />
                Set Up E-Signature
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContractManager;
