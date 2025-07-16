'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, DollarSign, Users, Shield, Zap } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Efficiency',
    value: '300%',
    description: 'Average productivity improvement across automated workflows',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Clock,
    title: 'Time Savings',
    value: '40h',
    description: 'Hours saved per employee per week through intelligent automation',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    value: '60%',
    description: 'Reduction in operational costs within the first year',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Employee Satisfaction',
    value: '85%',
    description: 'Of employees report higher job satisfaction after AI implementation',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Shield,
    title: 'Error Reduction',
    value: '95%',
    description: 'Decrease in human errors through automated quality control',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Zap,
    title: 'Faster Processing',
    value: '10x',
    description: 'Faster data processing and decision-making capabilities',
    color: 'from-yellow-500 to-orange-500'
  }
]


export default function Benefits() {
  return (
    <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Measurable <span className="gradient-text">Results</span> That Matter
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-28">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-blue-500/30 transition-all duration-300 text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {benefit.value}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}