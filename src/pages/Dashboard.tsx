
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, 
  FolderOpen, 
  MessageSquare, 
  CreditCard, 
  Settings, 
  Plus,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  LogOut
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      status: 'in-progress',
      progress: 65,
      budget: '$15,000',
      deadline: '2024-02-15',
      lastUpdate: '2 days ago',
      description: 'Full-stack e-commerce solution with payment integration'
    },
    {
      id: 2,
      name: 'Mobile App UI/UX',
      status: 'review',
      progress: 90,
      budget: '$8,500',
      deadline: '2024-01-30',
      lastUpdate: '1 day ago',
      description: 'Modern mobile application design and development'
    },
    {
      id: 3,
      name: 'API Development',
      status: 'completed',
      progress: 100,
      budget: '$5,000',
      deadline: '2024-01-15',
      lastUpdate: '1 week ago',
      description: 'RESTful API with authentication and database integration'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'review': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in-progress': return Clock;
      case 'review': return AlertCircle;
      default: return Clock;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>
      </div>

      <div className="relative z-10 flex">
        {/* Sidebar */}
        <div className="w-64 bg-black/20 backdrop-blur-lg border-r border-white/10 min-h-screen">
          <div className="p-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
              Client Portal
            </div>
            
            <nav className="space-y-2">
              <Button 
                variant={activeTab === 'overview' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('overview')}
              >
                <Home className="mr-3 h-4 w-4" />
                Overview
              </Button>
              <Button 
                variant={activeTab === 'projects' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('projects')}
              >
                <FolderOpen className="mr-3 h-4 w-4" />
                Projects
              </Button>
              <Button 
                variant={activeTab === 'messages' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('messages')}
              >
                <MessageSquare className="mr-3 h-4 w-4" />
                Messages
              </Button>
              <Button 
                variant={activeTab === 'payments' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('payments')}
              >
                <CreditCard className="mr-3 h-4 w-4" />
                Payments
              </Button>
              <Button 
                variant={activeTab === 'settings' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('settings')}
              >
                <Settings className="mr-3 h-4 w-4" />
                Settings
              </Button>
            </nav>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-xs text-gray-400">john@example.com</div>
              </div>
            </div>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gray-400 hover:text-white"
              onClick={() => navigate('/')}
            >
              <LogOut className="mr-3 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
                  <p className="text-gray-300">Here's what's happening with your projects</p>
                </div>
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  onClick={() => navigate('/submit-project')}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  New Project
                </Button>
              </div>

              {/* Stats Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="bg-white/5 border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Active Projects</p>
                      <p className="text-2xl font-bold text-blue-400">2</p>
                    </div>
                    <FolderOpen className="h-8 w-8 text-blue-400" />
                  </div>
                </Card>
                <Card className="bg-white/5 border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Completed</p>
                      <p className="text-2xl font-bold text-green-400">1</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                </Card>
                <Card className="bg-white/5 border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Spent</p>
                      <p className="text-2xl font-bold text-purple-400">$28.5K</p>
                    </div>
                    <CreditCard className="h-8 w-8 text-purple-400" />
                  </div>
                </Card>
                <Card className="bg-white/5 border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Messages</p>
                      <p className="text-2xl font-bold text-cyan-400">5</p>
                    </div>
                    <MessageSquare className="h-8 w-8 text-cyan-400" />
                  </div>
                </Card>
              </div>

              {/* Recent Projects */}
              <div>
                <h2 className="text-xl font-bold mb-6">Recent Projects</h2>
                <div className="space-y-4">
                  {projects.slice(0, 2).map((project) => {
                    const StatusIcon = getStatusIcon(project.status);
                    return (
                      <Card key={project.id} className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <StatusIcon className="h-5 w-5 text-blue-400" />
                            <div>
                              <h3 className="font-semibold">{project.name}</h3>
                              <p className="text-gray-400 text-sm">{project.description}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={getStatusColor(project.status)}>
                              {project.status.replace('-', ' ')}
                            </Badge>
                            <p className="text-sm text-gray-400 mt-1">{project.progress}% complete</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Progress value={project.progress} className="h-2" />
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">My Projects</h1>
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  onClick={() => navigate('/submit-project')}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  New Project
                </Button>
              </div>

              <div className="grid gap-6">
                {projects.map((project) => {
                  const StatusIcon = getStatusIcon(project.status);
                  return (
                    <Card key={project.id} className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <StatusIcon className="h-6 w-6 text-blue-400" />
                          <div>
                            <h3 className="text-xl font-semibold">{project.name}</h3>
                            <p className="text-gray-400">{project.description}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">Budget</p>
                          <p className="font-semibold">{project.budget}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Deadline</p>
                          <p className="font-semibold">{project.deadline}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Progress</p>
                          <p className="font-semibold">{project.progress}%</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Last Update</p>
                          <p className="font-semibold">{project.lastUpdate}</p>
                        </div>
                      </div>
                      
                      <Progress value={project.progress} className="h-2 mb-4" />
                      
                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                          Messages
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                          Files
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="space-y-8">
              <h1 className="text-3xl font-bold">Messages</h1>
              <Card className="bg-white/5 border-white/10 p-8 text-center">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No messages yet</h3>
                <p className="text-gray-400">When you have active projects, messages will appear here.</p>
              </Card>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="space-y-8">
              <h1 className="text-3xl font-bold">Payments</h1>
              <Card className="bg-white/5 border-white/10 p-8 text-center">
                <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Payment history</h3>
                <p className="text-gray-400">Your payment transactions will be displayed here.</p>
              </Card>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-8">
              <h1 className="text-3xl font-bold">Settings</h1>
              <Card className="bg-white/5 border-white/10 p-6">
                <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-white">Full Name</Label>
                    <Input 
                      className="bg-white/5 border-white/20 text-white mt-2" 
                      defaultValue="John Doe" 
                    />
                  </div>
                  <div>
                    <Label className="text-white">Email</Label>
                    <Input 
                      className="bg-white/5 border-white/20 text-white mt-2" 
                      defaultValue="john@example.com" 
                    />
                  </div>
                  <div>
                    <Label className="text-white">Company</Label>
                    <Input 
                      className="bg-white/5 border-white/20 text-white mt-2" 
                      defaultValue="Acme Corp" 
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Save Changes
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
