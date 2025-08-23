
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ShieldCheck, Zap } from 'lucide-react'; // Updated imports

export default function CurrentRoleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: ShieldCheck, // Changed icon
      title: "Operational Excellence", // Changed title
      stat: "90% Less", // Changed stat
      description: "Drove a 90% reduction in monitoring alerts for critical market data applications, enhancing system stability.", // Changed description
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Critical Support", // Changed title
      stat: "Primary Contact", // Changed stat
      description: "Serve as the primary contact for market data issues in Japan, facilitating knowledge transfer across global teams.", // Changed description
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Zap, // Changed icon
      title: "Automation & Efficiency", // Changed title
      stat: "Boosted", // Changed stat
      description: "Developed a Python automation tool for access mapping, significantly boosting operational efficiency for the team.", // Changed description
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section id="current-role" className="min-h-screen py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            WHAT I'M DOING NOW
          </Badge>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Associate, Nomura Securities {/* Updated title */}
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Supporting critical Java-based market data applications in Tokyo, driving automation, 
            and ensuring system reliability for global financial markets. {/* Updated description */}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="relative overflow-hidden h-full bg-white hover:shadow-2xl transition-all duration-500 border-0 group">
                  
                  <CardContent className="p-6 sm:p-8 relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${highlight.color} p-3 sm:p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
                        {highlight.stat}
                      </div>
                      <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-3">
                        {highlight.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>

                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Current focus areas */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-8">
            Skills & Interests {/* Updated heading */}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[ // Updated list of skills/interests
              'Software Engineering',
              'Automation',
              'Data Engineering',
              'Cloud Services',
              'Machine Learning',
              'Java',
              'Python',
              'AWS'
            ].map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-xs sm:text-sm bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 cursor-default"
                >
                  {area}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
