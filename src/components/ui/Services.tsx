'use client'

import { motion } from 'framer-motion'
import { Brain, Workflow, BarChart3, Shield, Cpu, Cog } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Intelligent Process Automation',
    description: 'Transform repetitive tasks with AI-powered automation that learns and adapts to your business needs.',
    features: ['Document Processing', 'Data Entry Automation', 'Workflow Optimization'],
    color: 'blue'
  },
  {
    icon: Workflow,
    title: 'Custom AI Workflows',
    description: 'Design bespoke AI solutions tailored to your specific business processes and requirements.',
    features: ['Custom Model Training', 'API Integration', 'Scalable Architecture'],
    color: 'purple'
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Leverage machine learning to forecast trends, optimize resources, and make data-driven decisions.',
    features: ['Market Forecasting', 'Resource Planning', 'Risk Assessment'],
    color: 'cyan'
  },
  {
    icon: Shield,
    title: 'AI Security & Compliance',
    description: 'Ensure your AI implementations meet industry standards with robust security and compliance frameworks.',
    features: ['Security Audits', 'Compliance Monitoring', 'Risk Mitigation'],
    color: 'green'
  },
  {
    icon: Cpu,
    title: 'Infrastructure Optimization',
    description: 'Optimize your technical infrastructure for AI workloads with cloud-native solutions.',
    features: ['Cloud Migration', 'Performance Tuning', 'Cost Optimization'],
    color: 'orange'
  },
  {
    icon: Cog,
    title: 'AI Integration & Support',
    description: 'Seamless integration of AI solutions with ongoing support and continuous improvement.',
    features: ['System Integration', '24/7 Support', 'Performance Monitoring'],
    color: 'pink'
  }
]

const colorClasses = {
  blue: 'from-blue-500 to-blue-600',
  purple: 'from-purple-500 to-purple-600',
  cyan: 'from-cyan-500 to-cyan-600',
  green: 'from-green-500 to-green-600',
  orange: 'from-orange-500 to-orange-600',
  pink: 'from-pink-500 to-pink-600'
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">AI Solutions</span> for Every Business Need
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-blue-500/30 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}