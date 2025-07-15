'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Code, Rocket, Users, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    icon: Search,
    title: 'Discovery & Analysis',
    description: 'We analyze your current workflows and identify automation opportunities that deliver maximum ROI.',
    details: ['Business Process Mapping', 'Pain Point Identification', 'ROI Assessment', 'Feasibility Study']
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Design',
    description: 'Our experts design a comprehensive AI strategy tailored to your specific business objectives.',
    details: ['Solution Architecture', 'Technology Selection', 'Implementation Roadmap', 'Risk Assessment']
  },
  {
    icon: Code,
    title: 'Development & Integration',
    description: 'We build and seamlessly integrate AI solutions into your existing systems and workflows.',
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
    description: 'We ensure your team is fully equipped to leverage new AI capabilities effectively.',
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
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Proven Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We follow a systematic approach to ensure successful AI implementation 
            that delivers measurable results and long-term value.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
          
          <div className="space-y-12">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6">
              Let&apos;s discuss how our proven process can deliver AI automation solutions 
              that drive real results for your organization.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Start Your AI Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}