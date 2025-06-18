
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Zap, Users, Calendar, Star, Github, Linkedin, Mail } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'Node.js/Express', level: 90 },
    { name: 'TypeScript', level: 92 },
    { name: 'Python/Django', level: 88 },
    { name: 'AWS/Cloud', level: 85 },
    { name: 'PostgreSQL/MongoDB', level: 90 }
  ];

  const experiences = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Inc.',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS.',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript']
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      description: 'Built enterprise-level applications and mentored junior developers.',
      skills: ['Python', 'Django', 'PostgreSQL', 'Docker']
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'Startup Ventures',
      description: 'Created responsive web applications and improved user experience.',
      skills: ['JavaScript', 'React', 'CSS', 'Redux']
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      image: '/placeholder.svg',
      tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      category: 'web'
    },
    {
      title: 'AI Dashboard',
      description: 'Real-time analytics dashboard with machine learning insights',
      image: '/placeholder.svg',
      tech: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      category: 'ai'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication',
      image: '/placeholder.svg',
      tech: ['React Native', 'Node.js', 'JWT', 'Redis'],
      category: 'mobile'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DevPortfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                onClick={() => navigate('/login')}
              >
                Client Login
              </Button>
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                onClick={() => navigate('/submit-project')}
              >
                Start Project
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className={`text-center max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">
              Available for Freelance Projects
            </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Full Stack
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Crafting exceptional digital experiences with cutting-edge technologies.
            <br />
            Transforming ideas into scalable, beautiful solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 text-lg"
              onClick={() => navigate('/submit-project')}
            >
              Start Your Project <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              View Portfolio
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with expertise in modern web technologies, 
              dedicated to creating exceptional digital experiences that drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <Code className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
                  <p className="text-gray-400 text-sm">Writing maintainable, scalable code following best practices</p>
                </Card>
                <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <Zap className="h-8 w-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-gray-400 text-sm">Quick turnaround without compromising on quality</p>
                </Card>
                <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <Users className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
                  <p className="text-gray-400 text-sm">Working closely with clients throughout the project</p>
                </Card>
                <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <Star className="h-8 w-8 text-yellow-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                  <p className="text-gray-400 text-sm">Delivering solutions that exceed expectations</p>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
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
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience Journey
            </h2>
            <p className="text-xl text-gray-300">
              My professional journey through the world of software development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>
                
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {exp.year}
                      </Badge>
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-blue-400 mb-3">{exp.company}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="border-purple-500/30 text-purple-400">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300">
              A showcase of my recent work and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-cyan-500/30 text-cyan-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's discuss your ideas and bring them to life with cutting-edge technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 text-lg"
              onClick={() => navigate('/submit-project')}
            >
              Submit Project Idea <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 DevPortfolio. Crafted with passion and cutting-edge technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
