
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Video, Plane, BookOpen, Shield } from 'lucide-react';

export default function PersonalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const interests = [
    {
      icon: Video,
      title: "Filmmaking",
      description: "Freelance filmmaker and cultural editor",
      image: "🎬",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Exploring cultures and cuisines worldwide",
      image: "✈️",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: BookOpen,
      title: "Indian Philosophy",
      description: "Founder of a philosophy collective in Tokyo",
      image: "🧘",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Football",
      description: "Central defender and team player",
      image: "⚽",
      color: "from-blue-500 to-cyan-500"
    },
  ];

  const photos = [
    { src: "🎬", caption: "On set", size: "large" },
    { src: "✈️", caption: "Exploring Tokyo", size: "medium" },
    { src: "🧘", caption: "Philosophy meet-up", size: "medium" },
    { src: "🏔️", caption: "Himalayan travels", size: "large" },
    { src: "⚽", caption: "Game day", size: "small" },
    { src: "☕", caption: "Tokyo cafe", size: "small" },
  ];

  return (
    <section id="personal" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
            BEYOND WORK
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Life Outside the IDE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When I'm not engineering solutions, I'm capturing stories through a camera lens, 
            exploring new cultures, and debating philosophy.
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer h-full"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${interest.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl">{interest.image}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-gray-600">
                    {interest.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Photo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Life in Pictures
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                  photo.size === 'large' ? 'col-span-2 row-span-2' : 
                  photo.size === 'medium' ? 'col-span-2' : 'col-span-1'
                }`}
              >
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Placeholder for actual images */}
                  <div className="text-6xl opacity-40">{photo.src}</div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{photo.caption}</p>
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
