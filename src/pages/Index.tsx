
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Code2, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  Database,
  Server,
  Smartphone,
  Cloud,
  Lock,
  ChevronDown,
  Star,
  Users,
  Trophy,
  Calendar
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
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

  const experiences = [
    {
      year: "2024",
      role: "Senior Full Stack Developer",
      company: "TechCorp",
      description: "Leading development of enterprise-scale applications with React, Node.js, and AWS",
      skills: ["React", "Node.js", "AWS", "TypeScript"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      year: "2022",
      role: "Full Stack Developer",
      company: "StartupX",
      description: "Built scalable web applications serving 100K+ users with modern tech stack",
      skills: ["Vue.js", "Python", "Docker", "PostgreSQL"],
      color: "from-purple-500 to-pink-600"
    },
    {
      year: "2020",
      role: "Frontend Developer",
      company: "DigitalAgency",
      description: "Developed responsive web interfaces and mobile-first applications",
      skills: ["React", "Tailwind", "GraphQL", "Firebase"],
      color: "from-green-500 to-emerald-600"
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with real-time features",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "🛒",
      status: "Live"
    },
    {
      title: "AI Analytics Dashboard",
      description: "ML-powered data visualization platform",
      tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
      image: "🤖",
      status: "Development"
    },
    {
      title: "Mobile Banking App",
      description: "Secure fintech solution with biometric auth",
      tech: ["React Native", "Express", "JWT", "Redis"],
      image: "💳",
      status: "Live"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Cursor */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          opacity: isLoaded ? 1 : 0
        }}
      />

      {/* Particle Background */}
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

      {/* Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-gradient-to-br from-green-600/30 to-emerald-600/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-black/20 border-b border-white/10">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            DevMaster
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors duration-300">Experience</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors duration-300">Portfolio</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
          </div>
          <Button 
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0 relative overflow-hidden group"
          >
            <span className="relative z-10">Client Portal</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className={`text-center max-w-5xl mx-auto px-6 transition-all duration-2000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="mb-8">
            <span className="inline-block text-cyan-400 text-lg mb-4 animate-pulse">
              ◆ Full Stack Developer ◆
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Building the
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Future of Web
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            I craft extraordinary digital experiences using cutting-edge technologies. 
            From concept to deployment, I transform ideas into powerful, scalable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => navigate('/submit-project')}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-8 py-4 border-0 relative overflow-hidden group transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
            >
              View Portfolio
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, label: "Projects Completed", value: "150+" },
              { icon: Users, label: "Happy Clients", value: "80+" },
              { icon: Star, label: "Client Rating", value: "4.9/5" },
              { icon: Calendar, label: "Years Experience", value: "5+" }
            ].map((stat, index) => (
              <Card key={index} className={`bg-black/30 backdrop-blur-lg border border-white/10 p-6 text-center transform hover:scale-105 transition-all duration-500 hover:border-cyan-400/50 ${isLoaded ? 'animate-scale-in' : ''}`} style={{ animationDelay: `${index * 200}ms` }}>
                <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I specialize in creating scalable, high-performance applications that deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code2, title: "Frontend Mastery", desc: "React, Vue, Angular with cutting-edge animations" },
              { icon: Server, title: "Backend Excellence", desc: "Node.js, Python, Java with cloud architecture" },
              { icon: Database, title: "Data Solutions", desc: "SQL, NoSQL, GraphQL with optimization expertise" }
            ].map((skill, index) => (
              <Card key={index} className="bg-black/30 backdrop-blur-lg border border-white/10 p-8 text-center hover:border-cyan-400/50 transform hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{skill.title}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Experience Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center mb-12 group">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 to-purple-600"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                  {exp.year.slice(-2)}
                </div>
                <Card className="ml-8 bg-black/30 backdrop-blur-lg border border-white/10 p-6 flex-1 hover:border-cyan-400/50 transform hover:scale-105 transition-all duration-500">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400">{exp.role}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <Badge className={`bg-gradient-to-r ${exp.color} text-white border-0`}>
                      {exp.year}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="border-cyan-400/50 text-cyan-400">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-black/30 backdrop-blur-lg border border-white/10 p-6 hover:border-cyan-400/50 transform hover:scale-105 transition-all duration-500 group">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>
                  <Badge className={`${project.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'} text-white border-0`}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline" className="border-purple-400/50 text-purple-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          
          <Button 
            size="lg"
            onClick={() => navigate('/submit-project')}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-12 py-6 border-0 relative overflow-hidden group transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              Get Started Now
              <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 backdrop-blur-lg bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-8 mb-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/privacy')}
              className="text-gray-400 hover:text-cyan-400"
            >
              Privacy Policy
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/terms')}
              className="text-gray-400 hover:text-cyan-400"
            >
              Terms & Conditions
            </Button>
          </div>
          <p className="text-gray-400">
            © 2024 DevMaster. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
