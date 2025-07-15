'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, Lightbulb, Globe, Zap } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Projects Delivered', icon: Target },
  { value: '98%', label: 'Client Satisfaction', icon: Award },
  { value: '50+', label: 'AI Specialists', icon: Users },
  { value: '24/7', label: 'Support Available', icon: Zap }
]

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We stay ahead of the curve, constantly exploring cutting-edge AI technologies to deliver next-generation solutions.'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our priority. We build lasting partnerships through transparent communication and exceptional service.'
  },
  {
    icon: Award,
    title: 'Excellence Driven',
    description: 'We maintain the highest standards in every project, ensuring quality, reliability, and measurable business impact.'
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Our diverse team brings worldwide expertise and cultural understanding to every AI implementation.'
  }
]

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Officer',
    expertise: 'Machine Learning, Neural Networks',
    description: 'Former Google AI researcher with 15+ years in enterprise AI solutions.'
  },
  {
    name: 'Michael Rodriguez',
    role: 'VP of Engineering',
    expertise: 'Cloud Architecture, MLOps',
    description: 'Led AI infrastructure at three unicorn startups, scaling to millions of users.'
  },
  {
    name: 'Emily Watson',
    role: 'Head of Strategy',
    expertise: 'Business Transformation, ROI Optimization',
    description: 'Ex-McKinsey consultant specializing in AI-driven business transformation.'
  },
  {
    name: 'David Kim',
    role: 'Lead Data Scientist',
    expertise: 'Predictive Analytics, NLP',
    description: 'PhD in Computer Science, published 20+ papers on enterprise AI applications.'
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
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Founded by AI pioneers and business strategists, Optimarch bridges the gap between 
            cutting-edge artificial intelligence and practical business solutions. We&apos;re not just 
            technologists—we&apos;re transformation partners committed to your success.
          </p>
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
            Our <span className="gradient-text">Core Values</span>
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet Our <span className="gradient-text">Leadership Team</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group text-center"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold group-hover:scale-105 transition-transform duration-300">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h4>
                
                <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
                
                <p className="text-sm text-gray-400 mb-3">{member.expertise}</p>
                
                <p className="text-sm text-gray-300 leading-relaxed">
                  {member.description}
                </p>
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
              Ready to Partner with AI Experts?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Let&apos;s discuss how our team&apos;s expertise can accelerate your AI transformation 
              and deliver measurable business results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}