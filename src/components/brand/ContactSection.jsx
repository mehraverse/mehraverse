
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Download, 
  Video,
  ArrowRight
} from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "For professional inquiries",
      action: "abhishekmehra1010@gmail.com",
      color: "from-blue-500 to-cyan-500",
      href: "mailto:abhishekmehra1010@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional networking",
      action: "/in/abhishekmehra19",
      color: "from-blue-600 to-blue-700",
      href: "https://linkedin.com/in/abhishekmehra19"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Code & projects",
      action: "/mehraverse",
      color: "from-gray-700 to-gray-900",
      href: "https://github.com/mehraverse"
    },
    {
      icon: Video,
      title: "Filmmaking",
      description: "For creative collaborations",
      action: "@mehraverse",
      color: "from-red-500 to-orange-500",
      href: "https://www.instagram.com/mehraverse"
    }
  ];

  const handleCardClick = (href) => {
    window.open(href, '_blank');
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e3dd84b79_MehraResume2025.pdf';
    link.download = 'Abhishek_Mehra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full text-sm font-medium">
            LET'S CONNECT
          </Badge>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to Build
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Something Together?
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you're interested in collaborating on projects, sharing ideas about technology, 
            or just want to chat about filmmaking and philosophy, I'd love to connect and learn from each other.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => handleCardClick(method.href)}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 group h-full cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gradient-to-br ${method.color} p-3 sm:p-4 mb-4`}
                        animate={{
                          scale: hoveredCard === index ? 1.1 : 1,
                          rotate: hoveredCard === index ? 5 : 0
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-full h-full text-white" />
                      </motion.div>
                      
                      <h3 className="text-lg font-bold text-white mb-1">
                        {method.title}
                      </h3>
                      <p className="text-gray-400 text-xs mb-3">
                        {method.description}
                      </p>
                      <div className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300 break-all">
                        {method.action}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-sm sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
            onClick={() => window.location.href = 'mailto:abhishekmehra1010@gmail.com'}
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Email
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white/20 hover:border-white/40 bg-white/10 text-white hover:bg-white/20 px-8 py-4 text-sm sm:text-lg rounded-full transition-all duration-300 group w-full sm:w-auto"
            onClick={handleResumeDownload}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center border-t border-white/10 pt-8 mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-400 mb-4 text-xs sm:text-base">
            "To write a great book, you must first become the book"
          </p>
          <p className="text-gray-500 text-[10px] sm:text-sm">
            © 2025 Abhishek Mehra. Built with passion, powered by curiosity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
