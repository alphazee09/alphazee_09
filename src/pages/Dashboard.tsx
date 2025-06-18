
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
  LogOut,
  FileText,
  DollarSign,
  TrendingUp,
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  Edit,
  Trash2,
  Eye,
  Send,
  Paperclip,
  Video,
  Phone,
  Star,
  Zap
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      status: 'in-progress',
      progress: 65,
      budget: '$15,000',
      deadline: '2024-02-15',
      lastUpdate: '2 days ago',
      description: 'Full-stack e-commerce solution with payment integration',
      files: 12,
      messages: 8
    },
    {
      id: 2,
      name: 'Mobile App UI/UX',
      status: 'review',
      progress: 90,
      budget: '$8,500',
      deadline: '2024-01-30',
      lastUpdate: '1 day ago',
      description: 'Modern mobile application design and development',
      files: 24,
      messages: 15
    },
    {
      id: 3,
      name: 'API Development',
      status: 'completed',
      progress: 100,
      budget: '$5,000',
      deadline: '2024-01-15',
      lastUpdate: '1 week ago',
      description: 'RESTful API with authentication and database integration',
      files: 8,
      messages: 12
    }
  ];

  const messages = [
    {
      id: 1,
      from: 'DevMaster',
      content: 'Project milestone completed! The authentication system is now ready for testing.',
      time: '2 hours ago',
      type: 'update',
      projectId: 1
    },
    {
      id: 2,
      from: 'John Doe',
      content: 'Great work on the UI! Could we adjust the color scheme slightly?',
      time: '1 day ago',
      type: 'feedback',
      projectId: 2
    },
    {
      id: 3,
      from: 'DevMaster',
      content: 'Invoice for milestone 2 has been generated. Please review and approve.',
      time: '3 days ago',
      type: 'invoice',
      projectId: 1
    }
  ];

  const payments = [
    {
      id: 1,
      projectName: 'E-Commerce Platform',
      amount: '$7,500',
      status: 'paid',
      date: '2024-01-10',
      method: 'Credit Card',
      milestone: 'Milestone 1'
    },
    {
      id: 2,
      projectName: 'Mobile App UI/UX',
      amount: '$4,250',
      status: 'pending',
      date: '2024-01-15',
      method: 'Bank Transfer',
      milestone: 'Milestone 2'
    },
    {
      id: 3,
      projectName: 'API Development',
      amount: '$5,000',
      status: 'paid',
      date: '2024-01-05',
      method: 'PayPal',
      milestone: 'Final Payment'
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

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'overdue': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Cursor */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          opacity: isLoaded ? 1 : 0
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex">
        {/* Futuristic Sidebar */}
        <div className="w-72 bg-black/20 backdrop-blur-xl border-r border-white/10 min-h-screen relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5"></div>
          
          <div className="relative p-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8 flex items-center">
              <Zap className="mr-2 h-6 w-6 text-cyan-400" />
              Client Portal
            </div>
            
            <nav className="space-y-2">
              {[
                { key: 'overview', icon: Home, label: 'Overview' },
                { key: 'projects', icon: FolderOpen, label: 'Projects' },
                { key: 'messages', icon: MessageSquare, label: 'Messages' },
                { key: 'payments', icon: CreditCard, label: 'Payments' },
                { key: 'contracts', icon: FileText, label: 'Contracts' },
                { key: 'files', icon: Upload, label: 'Files' },
                { key: 'settings', icon: Settings, label: 'Settings' }
              ].map((item, index) => (
                <Button 
                  key={item.key}
                  variant={activeTab === item.key ? 'default' : 'ghost'}
                  className={`w-full justify-start relative overflow-hidden group transition-all duration-300 ${
                    activeTab === item.key 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50' 
                      : 'hover:bg-white/5'
                  }`}
                  onClick={() => setActiveTab(item.key)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                  {activeTab === item.key && (
                    <div className="absolute right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </Button>
              ))}
            </nav>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center space-x-3 mb-4 p-3 rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative">
                <User className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black"></div>
              </div>
              <div>
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-xs text-gray-400">Premium Client</div>
              </div>
            </div>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gray-400 hover:text-white hover:bg-red-500/20"
              onClick={() => navigate('/')}
            >
              <LogOut className="mr-3 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-auto">
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Welcome back, John! ⚡
                  </h1>
                  <p className="text-gray-300">Here's what's happening with your projects</p>
                </div>
                <Button 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  onClick={() => navigate('/submit-project')}
                >
                  <span className="relative z-10 flex items-center">
                    <Plus className="mr-2 h-4 w-4" />
                    New Project
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Button>
              </div>

              {/* Enhanced Stats Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: FolderOpen, label: 'Active Projects', value: '2', color: 'from-blue-500 to-cyan-500', change: '+1' },
                  { icon: CheckCircle, label: 'Completed', value: '1', color: 'from-green-500 to-emerald-500', change: '+1' },
                  { icon: DollarSign, label: 'Total Spent', value: '$28.5K', color: 'from-purple-500 to-pink-500', change: '+$5K' },
                  { icon: MessageSquare, label: 'Messages', value: '5', color: 'from-cyan-500 to-blue-500', change: '+2' }
                ].map((stat, index) => (
                  <Card key={index} className="bg-black/20 backdrop-blur-lg border border-white/10 p-6 hover:bg-white/5 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{backgroundImage: `linear-gradient(135deg, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})`}}></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold mb-1" style={{color: stat.color.includes('blue') ? '#60a5fa' : stat.color.includes('green') ? '#34d399' : stat.color.includes('purple') ? '#a855f7' : '#06b6d4'}}>{stat.value}</p>
                        <p className="text-xs text-green-400">+{stat.change} this month</p>
                      </div>
                      <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-cyan-400" />
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    {messages.slice(0, 3).map((message, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'update' ? 'bg-blue-500' : 
                          message.type === 'feedback' ? 'bg-yellow-500' : 'bg-green-500'
                        }`}>
                          {message.type === 'update' ? <Bell className="h-4 w-4" /> :
                           message.type === 'feedback' ? <MessageSquare className="h-4 w-4" /> :
                           <DollarSign className="h-4 w-4" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-300">{message.content}</p>
                          <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-purple-400" />
                    Upcoming Deadlines
                  </h3>
                  <div className="space-y-4">
                    {projects.filter(p => p.status !== 'completed').map((project, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                        <div>
                          <p className="font-medium">{project.name}</p>
                          <p className="text-sm text-gray-400">{project.deadline}</p>
                        </div>
                        <Badge className={getStatusColor(project.status)}>
                          {project.progress}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">My Projects</h1>
                <div className="flex space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Search projects..." 
                      className="pl-10 bg-black/20 border-white/20 text-white"
                    />
                  </div>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                    onClick={() => navigate('/submit-project')}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    New Project
                  </Button>
                </div>
              </div>

              <div className="grid gap-6">
                {projects.map((project, index) => {
                  const StatusIcon = getStatusIcon(project.status);
                  return (
                    <Card key={project.id} className="bg-black/20 backdrop-blur-lg border border-white/10 p-6 hover:bg-white/5 hover:border-cyan-400/50 transform hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600">
                              <StatusIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-semibold text-cyan-400">{project.name}</h3>
                              <p className="text-gray-400">{project.description}</p>
                            </div>
                          </div>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status.replace('-', ' ')}
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-5 gap-4 mb-6">
                          <div className="text-center">
                            <p className="text-gray-400 text-sm">Budget</p>
                            <p className="font-semibold text-green-400">{project.budget}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-gray-400 text-sm">Deadline</p>
                            <p className="font-semibold">{project.deadline}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-gray-400 text-sm">Progress</p>
                            <p className="font-semibold text-cyan-400">{project.progress}%</p>
                          </div>
                          <div className="text-center">
                            <p className="text-gray-400 text-sm">Files</p>
                            <p className="font-semibold">{project.files}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-gray-400 text-sm">Messages</p>
                            <p className="font-semibold">{project.messages}</p>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-400">Progress</span>
                            <span className="text-sm font-medium text-cyan-400">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-3 bg-white/10" />
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          <Button variant="outline" size="sm" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </Button>
                          <Button variant="outline" size="sm" className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Messages ({project.messages})
                          </Button>
                          <Button variant="outline" size="sm" className="border-green-400/50 text-green-400 hover:bg-green-400/10">
                            <Upload className="mr-2 h-4 w-4" />
                            Files ({project.files})
                          </Button>
                          <Button variant="outline" size="sm" className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10">
                            <FileText className="mr-2 h-4 w-4" />
                            Contract
                          </Button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Messages</h1>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  <Send className="mr-2 h-4 w-4" />
                  New Message
                </Button>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-1 bg-black/20 backdrop-blur-lg border border-white/10 p-6">
                  <h3 className="text-lg font-bold mb-4">Conversations</h3>
                  <div className="space-y-3">
                    {projects.map((project, index) => (
                      <div key={index} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors duration-300">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{project.name}</p>
                            <p className="text-sm text-gray-400">DevMaster</p>
                          </div>
                          <Badge variant="secondary" className="bg-cyan-500 text-white">
                            {project.messages}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="lg:col-span-2 bg-black/20 backdrop-blur-lg border border-white/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold">E-Commerce Platform</h3>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4 h-64 overflow-y-auto mb-4">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.from === 'John Doe' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs p-3 rounded-lg ${
                          message.from === 'John Doe' 
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                            : 'bg-white/10 text-gray-300'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">{message.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Input 
                      placeholder="Type your message..." 
                      className="flex-1 bg-white/5 border-white/20 text-white"
                    />
                    <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Payments</h1>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Paid</p>
                      <p className="text-3xl font-bold text-green-400">$12,500</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-400" />
                  </div>
                </Card>
                <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Pending</p>
                      <p className="text-3xl font-bold text-yellow-400">$4,250</p>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-400" />
                  </div>
                </Card>
                <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">This Month</p>
                      <p className="text-3xl font-bold text-cyan-400">$7,500</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-cyan-400" />
                  </div>
                </Card>
              </div>

              <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-6">Payment History</h3>
                <div className="space-y-4">
                  {payments.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600">
                          <DollarSign className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{payment.projectName}</p>
                          <p className="text-sm text-gray-400">{payment.milestone} • {payment.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-green-400">{payment.amount}</p>
                        <Badge className={getPaymentStatusColor(payment.status)}>
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'contracts' && (
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Contracts</h1>
              
              <div className="grid gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="bg-black/20 backdrop-blur-lg border border-white/10 p-6 hover:bg-white/5 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-8 w-8 text-cyan-400" />
                        <div>
                          <h3 className="text-xl font-bold">{project.name} - Service Agreement</h3>
                          <p className="text-gray-400">Budget: {project.budget} • Deadline: {project.deadline}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                        <Button variant="outline" className="border-green-400/50 text-green-400 hover:bg-green-400/10">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'files' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Files</h1>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload File
                </Button>
              </div>

              <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-8 text-center">
                <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Project Files</h3>
                <p className="text-gray-400 mb-6">Upload and manage files for your projects.</p>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  Browse Files
                </Button>
              </Card>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Settings</h1>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
                  <h3 className="text-xl font-bold mb-6">Account Settings</h3>
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
                    <div>
                      <Label className="text-white">Phone</Label>
                      <Input 
                        className="bg-white/5 border-white/20 text-white mt-2" 
                        defaultValue="+1 (555) 123-4567" 
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                      Save Changes
                    </Button>
                  </div>
                </Card>

                <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
                  <h3 className="text-xl font-bold mb-6">Preferences</h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">Notification Preferences</Label>
                      <div className="mt-2 space-y-2">
                        <label className="flex items-center space-x-2 text-gray-300">
                          <input type="checkbox" className="rounded" defaultChecked />
                          <span>Email notifications</span>
                        </label>
                        <label className="flex items-center space-x-2 text-gray-300">
                          <input type="checkbox" className="rounded" defaultChecked />
                          <span>Project updates</span>
                        </label>
                        <label className="flex items-center space-x-2 text-gray-300">
                          <input type="checkbox" className="rounded" />
                          <span>Marketing emails</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <Label className="text-white">Time Zone</Label>
                      <select className="w-full mt-2 p-2 bg-white/5 border border-white/20 rounded text-white">
                        <option>UTC-5 (Eastern Time)</option>
                        <option>UTC-8 (Pacific Time)</option>
                        <option>UTC+0 (GMT)</option>
                      </select>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                      Update Preferences
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
