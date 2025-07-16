'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, Lightbulb, Globe, Zap } from 'lucide-react'

const stats = [
  { value: '50+', label: 'Projects Delivered', icon: Target },
  { value: '98%', label: 'Client Satisfaction', icon: Award },
  { value: '5+', label: 'Years Experience', icon: Users },
  { value: '24/7', label: 'Support Available', icon: Zap }
]

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Staying ahead of the curve, constantly exploring new AI technologies to deliver next-generation solutions.'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Client success through lasting partnerships, transparent communication and exceptional service.'
  },
  {
    icon: Award,
    title: 'Excellence Driven',
    description: 'Maintaining the highest standards in every project, ensuring quality, reliability, and measurable business impact.'
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Global expertise and cultural understanding applied to every AI implementation.'
  }
]


export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Optimarch</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="gradient-text">Core Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  )
}