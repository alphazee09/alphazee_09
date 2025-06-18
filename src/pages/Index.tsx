
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Star,
  ExternalLink,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Zap,
  Rocket,
  Brain,
  Target,
  Award,
  Users,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Coffee
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'React/Next.js', level: 95, icon: Code },
    { name: 'Node.js/Express', level: 90, icon: Database },
    { name: 'TypeScript', level: 88, icon: Code },
    { name: 'Python/Django', level: 85, icon: Code },
    { name: 'Mobile Development', level: 82, icon: Smartphone },
    { name: 'Cloud/DevOps', level: 80, icon: Globe }
  ];

  const experience = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators LLC',
      description: 'Leading development of enterprise applications using modern tech stack',
      achievements: ['Led team of 5 developers', 'Increased performance by 40%', 'Implemented CI/CD pipelines']
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co',
      description: 'Developed scalable web applications and mobile solutions',
      achievements: ['Built 15+ production apps', 'Reduced load times by 60%', 'Mentored junior developers']
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'Creative Agency',
      description: 'Specialized in creating stunning user interfaces and experiences',
      achievements: ['Delivered 30+ projects', 'Improved user engagement by 75%', 'Won design excellence award']
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with AI-powered recommendations',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/placeholder.svg',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Real Estate CRM',
      description: 'Comprehensive CRM system for real estate management',
      tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
      image: '/placeholder.svg',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Fitness Tracking App',
      description: 'Mobile app for tracking workouts and nutrition',
      tech: ['React Native', 'Firebase', 'Redux', 'Charts.js'],
      image: '/placeholder.svg',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management System',
      description: 'Enterprise task management with real-time collaboration',
      tech: ['Vue.js', 'Express', 'Socket.io', 'MySQL'],
      image: '/placeholder.svg',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);

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
        {[...Array(50)].map((_, i) => (
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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DevMaster
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors duration-300">Experience</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
            </div>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/login')}
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                Login
              </Button>
              <Button 
                onClick={() => navigate('/submit-project')}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Start Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-20">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-1 animate-scale-in">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Code className="h-16 w-16 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Full Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Crafting digital experiences that push the boundaries of technology
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => navigate('/submit-project')}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Start Your Project
                <Rocket className="ml-2 h-5 w-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Briefcase, label: '50+', desc: 'Projects' },
              { icon: Users, label: '30+', desc: 'Happy Clients' },
              { icon: Award, label: '5+', desc: 'Years Experience' },
              { icon: Star, label: '4.9', desc: 'Rating' }
            ].map((stat, index) => (
              <Card key={index} className="bg-black/20 backdrop-blur-lg border border-white/10 p-4 md:p-6 hover:bg-white/5 transform hover:scale-105 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300">Passionate about creating innovative solutions</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                cutting-edge web and mobile applications. My expertise spans from frontend 
                frameworks to backend architectures, always focusing on performance and user experience.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and staying updated with the latest 
                technologies. My goal is to help businesses transform their ideas into powerful 
                digital solutions that drive growth and success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, label: 'Goal-Oriented' },
                  { icon: Brain, label: 'Creative Thinker' },
                  { icon: Shield, label: 'Quality Focused' },
                  { icon: Clock, label: 'Timely Delivery' }
                ].map((trait, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <trait.icon className="h-6 w-6 text-cyan-400" />
                    <span className="text-gray-300">{trait.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="h-5 w-5 text-purple-400" />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-4 md:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience Journey
            </h2>
            <p className="text-xl text-gray-300">My professional development timeline</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-600"></div>
            
            {experience.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6 hover:bg-white/5 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                        {exp.year}
                      </Badge>
                      <GraduationCap className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{exp.title}</h3>
                    <p className="text-purple-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 md:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300">Showcasing my latest and greatest work</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-black/20 backdrop-blur-lg border border-white/10 overflow-hidden hover:bg-white/5 transform hover:scale-105 transition-all duration-500 cursor-pointer group"
                onClick={() => setActiveProject(index)}
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-600/20 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white">Featured</Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 flex-1"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 flex-1"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300">Ready to bring your ideas to life?</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white font-medium">contact@devmaster.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white font-medium">+968 9123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white font-medium">Muscat, Oman</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">Quick Message</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                ></textarea>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 border-t border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
              DevMaster
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-6">
                <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Privacy</a>
                <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Terms</a>
              </div>
              <p className="text-gray-400 text-sm">© 2024 DevMaster. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
