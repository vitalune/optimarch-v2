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

const testimonials = [
  {
    quote: "Optimarch transformed our customer service operations. Response times improved by 70% and customer satisfaction reached an all-time high.",
    author: "Sarah Chen",
    role: "COO, TechFlow Solutions",
    company: "TechFlow"
  },
  {
    quote: "The AI automation solutions reduced our manual processing time by 80%. Our team can now focus on strategic initiatives that drive growth.",
    author: "Michael Rodriguez",
    role: "VP Operations, Global Logistics",
    company: "GlobalLog"
  },
  {
    quote: "Implementation was seamless and the ROI exceeded our expectations. We're seeing cost savings of over $2M annually.",
    author: "Emily Watson",
    role: "CFO, Manufacturing Corp",
    company: "ManufacturingCorp"
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Measurable <span className="gradient-text">Results</span> That Matter
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI automation solutions deliver quantifiable improvements across key business metrics, 
            driving sustainable growth and competitive advantage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our <span className="gradient-text">Clients Say</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-blue-500/30 transition-all duration-300">
                  <div className="text-4xl text-blue-400 mb-4">&quot;</div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-blue-400">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to See These Results in Your Business?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join hundreds of companies that have transformed their operations with our AI automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get Your ROI Analysis
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 rounded-full text-white font-semibold text-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}