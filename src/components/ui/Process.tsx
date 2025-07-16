'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Code, Rocket, Users, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    icon: Search,
    title: 'Discovery & Analysis',
    description: 'Optimarch analyzes current workflows and identifies automation opportunities that deliver maximum ROI.',
    details: ['Business Process Mapping', 'Pain Point Identification', 'ROI Assessment', 'Feasibility Study']
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Design',
    description: 'Optimarch designs comprehensive AI strategies tailored to specific business objectives.',
    details: ['Solution Architecture', 'Technology Selection', 'Implementation Roadmap', 'Risk Assessment']
  },
  {
    icon: Code,
    title: 'Development & Integration',
    description: 'Optimarch builds and seamlessly integrates AI solutions into existing systems and workflows.',
    details: ['Custom AI Development', 'System Integration', 'Quality Assurance', 'Security Implementation']
  },
  {
    icon: Rocket,
    title: 'Deployment & Launch',
    description: 'Careful deployment with comprehensive testing ensures smooth operation from day one.',
    details: ['Staging Environment', 'Performance Testing', 'User Training', 'Go-Live Support']
  },
  {
    icon: Users,
    title: 'Training & Adoption',
    description: 'Optimarch ensures teams are fully equipped to leverage new AI capabilities effectively.',
    details: ['User Training Programs', 'Documentation', 'Change Management', 'Adoption Support']
  },
  {
    icon: CheckCircle,
    title: 'Monitoring & Optimization',
    description: 'Continuous monitoring and optimization ensure peak performance and ongoing value.',
    details: ['Performance Monitoring', 'Continuous Optimization', 'Regular Updates', 'Support & Maintenance']
  }
]

export default function Process() {
  return (
    <section id="process" className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Proven Process</span>
          </h2>
        </motion.div>

        <div className="h-8"></div>
        
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
          
          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 lg:max-w-md">
                  <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group">
                    <div className="absolute top-4 right-4 text-6xl font-bold text-gray-800/30">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-sm text-gray-400">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 lg:max-w-md">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="w-full h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-center p-6">
                        <step.icon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <div className="text-lg font-semibold text-white mb-2">Phase {index + 1}</div>
                        <div className="text-gray-400">{step.title}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}