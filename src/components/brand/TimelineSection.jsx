
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Calendar, Award } from 'lucide-react';

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const timeline = [
    {
      year: "Oct 2022 - Present",
      role: "Associate",
      company: "Nomura Securities, Tokyo",
      logo: "📈",
      outcome: "Achieved a 90% reduction in monitoring alerts for market data applications.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      year: "Oct 2020 - Oct 2022",
      role: "Software Engineer",
      company: "Yokogawa Electric, Tokyo",
      logo: "⚙️",
      outcome: "Led Service CRM rollout for India/UAE and developed RESTful APIs.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      year: "May - Jul 2019",
      role: "Data Science Intern",
      company: "Yokogawa Electric, Tokyo",
      logo: "🔬",
      outcome: "Built a semantic search Q&A forum using AWS and Elasticsearch.",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50"
    },
    {
      year: "Aug 2016 - Jun 2020",
      role: "B.Tech, Civil Engineering",
      company: "Indian Institute of Technology (IIT), Ropar",
      logo: "🎓",
      outcome: "Graduated with Department Rank 4 (CGPA 8.25/10).",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section id="timeline" className="min-h-screen py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
            CAREER JOURNEY
          </Badge>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Path of Growth
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From engineering fundamentals at IIT to building robust financial systems in Tokyo, 
            my journey is driven by a constant desire to learn and create impact.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - responsive positioning */}
          <motion.div
            className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 2, delay: 0.5 }}
            style={{ minHeight: '600px' }}
          />

          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                } justify-start`}
              >
                {/* Content - responsive width and positioning */}
                <div className={`w-full pl-20 md:pl-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                }`}>
                  <motion.div
                    className={`p-6 sm:p-8 rounded-2xl ${item.bgColor} border border-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`text-xl sm:text-3xl`}>{item.logo}</div>
                      <div>
                        <h3 className="text-base sm:text-xl font-bold text-gray-900">{item.role}</h3>
                        <p className="text-sm sm:text-base text-gray-600 font-medium">{item.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-500 text-xs sm:text-sm font-medium">{item.year}</span>
                    </div>
                    
                    <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">{item.outcome}</p>
                  </motion.div>
                </div>

                {/* Timeline dot - responsive positioning */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <div className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r ${item.color} border-2 sm:border-4 border-white shadow-lg`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
