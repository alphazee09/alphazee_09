
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Palette, 
  Database, 
  Star, 
  Users, 
  Trophy, 
  Zap,
  Download,
  ExternalLink,
  Mail,
  Calendar,
  Award,
  BookOpen,
  Heart,
  MessageCircle,
  Clock,
  CheckCircle,
  TrendingUp,
  Globe,
  Sparkles,
  Flag
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

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern technologies",
      features: ["React/Next.js", "Node.js", "Database Design", "API Development"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: ["React Native", "Flutter", "iOS/Android", "App Store Deployment"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered design experiences",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and deployment solutions",
      features: ["AWS/Azure", "Docker", "CI/CD", "Monitoring"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      link: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure banking application with biometric authentication",
      image: "/placeholder.svg", 
      tags: ["React Native", "Firebase", "Biometrics"],
      link: "#"
    },
    {
      title: "AI Dashboard",
      description: "Data visualization platform with machine learning insights",
      image: "/placeholder.svg",
      tags: ["Python", "TensorFlow", "D3.js", "PostgreSQL"],
      link: "#"
    }
  ];

  const aboutStats = [
    { icon: Trophy, label: "Projects Completed", value: "200+", color: "text-yellow-400" },
    { icon: Users, label: "Happy Clients", value: "120+", color: "text-green-400" },
    { icon: Award, label: "Years Experience", value: "13+", color: "text-blue-400" },
    { icon: Star, label: "Client Rating", value: "4.9/5", color: "text-purple-400" }
  ];

  const skills = [
    { name: "React/Next.js", level: 95, color: "bg-blue-500" },
    { name: "Node.js", level: 90, color: "bg-green-500" },
    { name: "Python", level: 85, color: "bg-yellow-500" },
    { name: "UI/UX Design", level: 88, color: "bg-purple-500" },
    { name: "Mobile Development", level: 82, color: "bg-cyan-500" },
    { name: "DevOps", level: 78, color: "bg-orange-500" }
  ];

  const timeline = [
    {
      year: "2025",
      title: "AI Integration & Innovation",
      description: "Leading cutting-edge AI-powered development solutions for global clients",
      icon: Sparkles,
      isActive: true
    },
    {
      year: "2022",
      title: "Senior Full-Stack Developer",
      description: "Expanded services to include mobile development and cloud solutions",
      icon: Globe
    },
    {
      year: "2020",
      title: "Founded Alphazee09",
      description: "Started freelance development with focus on quality and innovation",
      icon: Zap
    },
    {
      year: "2012",
      title: "Software Engineer",
      description: "Began career in tech industry, specializing in web development",
      icon: Code
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hi@mazinyahia.com",
      action: () => window.open('mailto:hi@mazinyahia.com')
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+968 78008637",
      action: () => window.open('https://wa.me/96878008637')
    },
    {
      icon: Calendar,
      label: "Schedule Call",
      value: "Book a meeting",
      action: () => window.open('https://calendly.com/alphazee09')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Cursor */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 hidden md:block"
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

      {/* Navigation */}
      <nav className="relative z-10 p-6 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center">
            <Zap className="mr-2 h-6 w-6 text-cyan-400" />
            Alphazee09
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-cyan-400 transition-colors cursor-pointer">Services</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors cursor-pointer">About</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors cursor-pointer">Portfolio</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</a>
          </div>
          <Button onClick={() => navigate('/login')} className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none">
            Client Login
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Building Digital Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ideas into powerful digital solutions with cutting-edge technology and innovative design
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 text-white border-none overflow-hidden group"
                onClick={() => navigate('/submit-project')}
              >
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg">
                  <div className="absolute inset-0 border-2 border-white/30 rounded-lg animate-pulse"></div>
                  <div className="absolute inset-0 border-t-2 border-cyan-400 rounded-lg animate-spin" style={{ animationDuration: '3s' }}></div>
                </div>
                <span className="relative z-10 flex items-center">
                  Start Your Dream Project Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              What I Offer
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-black/20 backdrop-blur-lg border border-white/10 p-6 hover:bg-white/5 transform hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${service.color} w-fit mb-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="relative z-10 px-6 py-20 bg-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Alphazee09
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate developer with a mission to create exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Section */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="/mazinyahia.png" 
                  alt="Mazin Yahia Profile" 
                  className="w-64 h-64 rounded-full mx-auto lg:mx-0 object-cover border-4 border-gradient-to-r from-cyan-500 to-purple-600"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="/sdn.jpg" 
                    alt="Sudan Flag" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2">Mazin Yahia MohamedElhassan</h3>
                <p className="text-cyan-400 mb-4">Senior Full-Stack Developer & UI/UX Designer</p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With over 13 years of experience in the tech industry, I specialize in creating innovative 
                  digital solutions that drive business growth. My passion lies in combining cutting-edge 
                  technology with beautiful design to deliver exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Stats & Skills */}
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {aboutStats.map((stat, index) => (
                  <Card key={index} className="bg-black/20 backdrop-blur-lg border border-white/10 p-4 text-center">
                    <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </Card>
                ))}
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Technical Expertise</h4>
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Professional Journey</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className={`bg-black/20 backdrop-blur-lg border border-white/10 p-4 relative overflow-hidden ${item.isActive ? 'border-cyan-400' : ''}`}>
                      {item.isActive && (
                        <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg">
                          <div className="absolute inset-0 border-t-2 border-purple-400 rounded-lg animate-spin" style={{ animationDuration: '3s' }}></div>
                        </div>
                      )}
                      <div className="relative z-10">
                        <div className={`font-bold text-lg ${item.isActive ? 'text-cyan-400' : 'text-cyan-400'}`}>{item.year}</div>
                        <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </Card>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center relative z-10 ${item.isActive ? 'animate-pulse' : ''}`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-white">Let's Connect</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index} 
                  className="bg-black/20 backdrop-blur-lg border border-white/10 p-6 hover:bg-white/5 transition-colors cursor-pointer"
                  onClick={method.action}
                >
                  <method.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-white font-semibold mb-1">{method.label}</div>
                  <div className="text-gray-400 text-sm">{method.value}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400">Recent work that showcases my expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-black/20 backdrop-blur-lg border border-white/10 overflow-hidden group hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <Button variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-white text-white hover:bg-white/20 bg-transparent">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-white/10 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Start?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's discuss your project and bring your ideas to life
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 text-white border-none overflow-hidden"
              onClick={() => navigate('/submit-project')}
            >
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg">
                <div className="absolute inset-0 border-t-2 border-cyan-400 rounded-lg animate-spin" style={{ animationDuration: '3s' }}></div>
              </div>
              <span className="relative z-10 flex items-center">
                Submit Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent"
              onClick={() => window.open('mailto:hi@mazinyahia.com')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-lg border-t border-white/10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-cyan-400 mr-2" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Alphazee09
                </span>
              </div>
              <p className="text-gray-400 max-w-md">
                Transforming ideas into exceptional digital experiences with cutting-edge technology and innovative design.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <div><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Services</a></div>
                <div><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">About</a></div>
                <div><a href="#portfolio" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Portfolio</a></div>
                <div><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Contact</a></div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <div><Button variant="link" className="text-gray-400 hover:text-cyan-400 p-0 h-auto" onClick={() => navigate('/privacy')}>Privacy Policy</Button></div>
                <div><Button variant="link" className="text-gray-400 hover:text-cyan-400 p-0 h-auto" onClick={() => navigate('/terms')}>Terms of Service</Button></div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <div className="flex items-center justify-center space-x-2">
              <p>&copy; 2025 Alphazee09. All rights reserved. Crafted & Created By Eng.MazinYahia</p>
              <img 
                src="/footer.png" 
                alt="Sudan Flag Heart" 
                className="w-6 h-6 inline-block"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
