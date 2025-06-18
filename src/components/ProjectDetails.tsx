
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  DollarSign, 
  FileText, 
  MessageSquare, 
  Star,
  User,
  TrendingUp,
  Target,
  CheckCircle,
  AlertCircle,
  Download,
  Share2,
  Edit,
  Play,
  Pause
} from 'lucide-react';

interface ProjectDetailsProps {
  project: {
    id: number;
    name: string;
    status: string;
    progress: number;
    budget: string;
    deadline: string;
    description: string;
    files: number;
    messages: number;
  };
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'review': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const milestones = [
    { id: 1, title: 'Project Setup & Planning', status: 'completed', date: '2024-01-10', amount: '1,500 OMR' },
    { id: 2, title: 'UI/UX Design Phase', status: 'completed', date: '2024-01-20', amount: '2,000 OMR' },
    { id: 3, title: 'Frontend Development', status: 'in-progress', date: '2024-02-01', amount: '3,500 OMR' },
    { id: 4, title: 'Backend Development', status: 'pending', date: '2024-02-15', amount: '3,000 OMR' },
    { id: 5, title: 'Testing & Deployment', status: 'pending', date: '2024-03-01', amount: '2,000 OMR' }
  ];

  const teamMembers = [
    { name: 'John Doe', role: 'Project Manager', avatar: '/placeholder.svg' },
    { name: 'Sarah Wilson', role: 'UI/UX Designer', avatar: '/placeholder.svg' },
    { name: 'Mike Johnson', role: 'Frontend Developer', avatar: '/placeholder.svg' },
    { name: 'Lisa Chen', role: 'Backend Developer', avatar: '/placeholder.svg' }
  ];

  const recentActivity = [
    { time: '2 hours ago', action: 'Milestone 2 completed', type: 'success' },
    { time: '1 day ago', action: 'New file uploaded: homepage-mockup.pdf', type: 'info' },
    { time: '2 days ago', action: 'Client feedback received', type: 'message' },
    { time: '3 days ago', action: 'Payment processed for Milestone 1', type: 'payment' }
  ];

  return (
    <div className="space-y-6">
      {/* Project Header */}
      <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-3xl font-bold text-cyan-400">{project.name}</h1>
              <Badge className={getStatusColor(project.status)}>
                {project.status.replace('-', ' ')}
              </Badge>
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <DollarSign className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Budget</p>
                <p className="font-semibold text-green-400">{project.budget}</p>
              </div>
              <div className="text-center">
                <Calendar className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Deadline</p>
                <p className="font-semibold">{project.deadline}</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Progress</p>
                <p className="font-semibold text-cyan-400">{project.progress}%</p>
              </div>
              <div className="text-center">
                <MessageSquare className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Messages</p>
                <p className="font-semibold">{project.messages}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
              <MessageSquare className="mr-2 h-4 w-4" />
              Send Message
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Share2 className="mr-2 h-4 w-4" />
              Share Project
            </Button>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Project Progress</span>
            <span className="text-sm font-medium text-cyan-400">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-3 bg-white/10" />
        </div>
      </Card>

      {/* Project Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-black/20 border border-white/10">
          <TabsTrigger value="overview" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">Overview</TabsTrigger>
          <TabsTrigger value="milestones" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">Milestones</TabsTrigger>
          <TabsTrigger value="team" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">Team</TabsTrigger>
          <TabsTrigger value="files" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">Files</TabsTrigger>
          <TabsTrigger value="activity" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Project Timeline</h3>
              <div className="space-y-4">
                {milestones.slice(0, 3).map((milestone) => (
                  <div key={milestone.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {milestone.status === 'completed' ? (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      ) : milestone.status === 'in-progress' ? (
                        <Clock className="h-5 w-5 text-blue-400" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-gray-400" />
                      )}
                      <span className="text-gray-300">{milestone.title}</span>
                    </div>
                    <span className="text-sm text-gray-400">{milestone.date}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Project Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Tasks Completed</span>
                  <span className="text-green-400 font-semibold">12/18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Time Spent</span>
                  <span className="text-blue-400 font-semibold">142 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Budget Used</span>
                  <span className="text-purple-400 font-semibold">7,500 OMR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Client Rating</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="milestones" className="space-y-4">
          {milestones.map((milestone) => (
            <Card key={milestone.id} className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {milestone.status === 'completed' ? (
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  ) : milestone.status === 'in-progress' ? (
                    <Play className="h-6 w-6 text-blue-400" />
                  ) : (
                    <Pause className="h-6 w-6 text-gray-400" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-white">{milestone.title}</h3>
                    <p className="text-gray-400">Due: {milestone.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-400">{milestone.amount}</p>
                  <Badge className={getStatusColor(milestone.status)}>
                    {milestone.status}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{member.name}</h3>
                    <p className="text-gray-400">{member.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="files" className="space-y-4">
          <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-cyan-400">Project Files</h3>
              <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                <Download className="mr-2 h-4 w-4" />
                Download All
              </Button>
            </div>
            <div className="space-y-3">
              {[
                'project-brief.pdf',
                'wireframes-v2.sketch',
                'design-mockups.fig',
                'database-schema.sql',
                'api-documentation.md'
              ].map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">{file}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          {recentActivity.map((activity, index) => (
            <Card key={index} className="bg-black/20 backdrop-blur-lg border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'success' ? 'bg-green-400' :
                    activity.type === 'info' ? 'bg-blue-400' :
                    activity.type === 'message' ? 'bg-yellow-400' :
                    'bg-purple-400'
                  }`}></div>
                  <span className="text-gray-300">{activity.action}</span>
                </div>
                <span className="text-gray-500 text-sm">{activity.time}</span>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectDetails;
