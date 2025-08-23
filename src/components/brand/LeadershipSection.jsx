
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Video, BookOpen, Shield } from 'lucide-react';

export default function LeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const leadership = [
    {
      icon: Video,
      title: "Filmmaker & Storyteller",
      description: "Editor for the film making team at Inter IIT Cultural Meet. Now a freelance filmmaker capturing stories and perspectives.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: BookOpen,
      title: "Founder, Indian Philosophy Collective",
      description: "Started a community in Tokyo to explore and discuss Indian philosophy, fostering cross-cultural dialogue.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Batch Representative & Mentor",
      description: "Liaison between students and professors at IIT Ropar, ensuring effective feedback and training.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Team Player & Sportsman",
      description: "Central defender for the football team at the Inter IIT Sports Meet, embodying discipline and teamwork.",
      color: "from-green-500 to-teal-500"
    }
  ];

  const photos = [
    { 
      src: "assets/Nubra.jpg", 
      caption: "Nubra Valley, India", 
    },
    { 
      src: "assets/Zao.jpg", 
      caption: "Zao Onsen, Japan", 
    },
    { 
      src: "assets/Genoa.jpg", 
      caption: "Genoa, Italy", 
    },
    { 
      src: "assets/Interlaken.jpg", 
      caption: "Interlaken, Switzerland", 
    },
    { 
      src: "assets/Aso.jpg", 
      caption: "Aso, Japan", 
    },
    { 
      src: "assets/Ishigaki.jpg", 
      caption: "Ishigaki, Japan", 
    },
  ];

  return (
    <section id="leadership" className="min-h-screen py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <Badge className="mb-6 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
            LEADERSHIP & INITIATIVES
          </Badge>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Beyond the Code
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Creating meaningful connections through storytelling, community building, and collaborative leadership across cultures and disciplines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {leadership.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full rounded-2xl overflow-hidden relative">
                  {/* Background cards for visual depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
                  <div className="absolute -top-2 -left-2 w-full h-full bg-gray-100 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-full h-full bg-gray-200 rounded-2xl -z-20" />
                  
                  <CardContent className="p-6 sm:p-8 relative z-10">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className={`flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Life in Pictures */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Life in Pictures
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="relative rounded-lg sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer aspect-square"
              >
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-300" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white">
                    <p className="text-xs sm:text-sm font-medium transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{photo.caption}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
