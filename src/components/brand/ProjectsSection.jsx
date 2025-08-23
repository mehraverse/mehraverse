
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BrainCircuit, Bot, FileText, Github, Globe, Binary } from 'lucide-react';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "AI-Powered Article Summarizer",
      description: "Developed a Chrome extension using OpenAI GPT for instant article summarization, Q&A, and smart caching, demonstrating a practical application of LLMs to enhance content consumption.",
      tech: ["OpenAI GPT", "JavaScript", "Chrome APIs", "HTML/CSS"],
      icon: "🤖",
      githubLink: "https://github.com/mehraverse/chrome-summarizer-project",
      chromeLink: "https://chromewebstore.google.com/detail/quick-summarizer/ddgdbfoodaccemjnbghdgejklbiamoej?authuser=1&hl=en"
    },
    {
      title: "Abstractive Text Summarizer",
      description: "Built and evaluated an LSTM sequence-to-sequence model for abstractive text summarization as an IIT Ropar project. This work, evaluated with the ROUGE metric, solidified my fundamentals in deep learning and NLP.",
      tech: ["Python", "LSTM", "TensorFlow/Keras", "NLP"],
      icon: "📝",
      reportLink: "https://drive.google.com/file/d/1zxVeL_D94YU4AZKfFQFJ-VG0H_axhtnm/view"
    }
  ];

  const certifications = [
    { title: "Neural Networks and Deep Learning", org: "Coursera (deeplearning.ai)", icon: BrainCircuit, link: "https://www.coursera.org/account/accomplishments/certificate/XRMVXTZ83LE3" },
    { title: "Data Structures", org: "Coursera (UC San Diego)", icon: Bot, link: "https://www.coursera.org/account/accomplishments/certificate/NWNFCD4NW3ZZ" },
    { title: "Algorithmic Toolbox", org: "Coursera (UC San Diego)", icon: Binary, link: "https://www.coursera.org/account/accomplishments/certificate/MBL26JJJRLYW" },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <Badge className="mb-6 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            FEATURED PROJECTS
          </Badge>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Innovation in Action
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Applying AI and Natural Language Processing to solve information overload, creating tools that distill complex text into concise, actionable insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            >
              <Card className="bg-white h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 rounded-2xl overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 p-4 sm:p-6 bg-white">
                  <div className={`text-2xl sm:text-4xl`}>{project.icon}</div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900">{project.title}</h3>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 flex-grow">
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-100 border-gray-200/50 text-gray-700 font-medium text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 sm:p-6 bg-gray-50/50 flex gap-3">
                  {project.githubLink && (
                      <Button 
                          onClick={() => window.open(project.githubLink, '_blank')}
                          variant="outline"
                          size="sm"
                          className="group text-xs flex-1 justify-center"
                      >
                          GitHub
                          <Github className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                  )}
                  {project.chromeLink && (
                      <Button 
                          onClick={() => window.open(project.chromeLink, '_blank')}
                          variant="outline"
                          size="sm"
                          className="group text-xs flex-1 justify-center"
                      >
                          Chrome Store
                          <Globe className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      </Button>
                  )}
                  {project.reportLink && (
                      <Button 
                          onClick={() => window.open(project.reportLink, '_blank')}
                          variant="outline"
                          size="sm"
                          className="group text-xs flex-1 justify-center"
                      >
                          Project Report
                          <FileText className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => window.open(cert.link, '_blank')}
                  className="cursor-pointer group h-full"
                >
                  <Card className="bg-white shadow-lg border-0 h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4 h-full min-h-[80px]">
                      <div className="p-2 sm:p-3 bg-green-100 rounded-lg flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight mb-1">{cert.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-500">{cert.org}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
