'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, Lightbulb, Globe, Zap, Brain, Code, Rocket } from 'lucide-react'

const founderInfo = {
  name: 'Amir Valizadeh',
  title: 'CEO & Founder',
  age: 18,
  location: 'Arlington, Virginia',
  education: 'Computer Science Student at University of Pittsburgh',
  vision: 'To advance deep learning and neural network technologies, contributing to pioneering AI projects worldwide.',
  skills: ['Python', 'JavaScript', 'TypeScript', 'C', 'Java', 'AI/ML', 'OpenAI API', 'RAG Systems']
}

const values = [
  {
    icon: Brain,
    title: 'AI Innovation',
    description: 'Passionate about developing cutting-edge AI technologies including RAG ChatBots and Large Language Models from scratch.'
  },
  {
    icon: Code,
    title: 'Technical Excellence',
    description: 'Harvard CS50 certified with hands-on experience in multiple programming languages and advanced AI implementations.'
  },
  {
    icon: Rocket,
    title: 'Startup Vision',
    description: 'At 18, building the future of AI automation with a fresh perspective and relentless drive for innovation.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Committed to becoming a driving force in AI research and development, creating solutions that transform businesses worldwide.'
  }
]


export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="h-8"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the <span className="gradient-text">Founder</span>
          </h2>
        </motion.div>

        <div className="h-8"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-28"
        >
          <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{founderInfo.name}</h3>
              <p className="text-xl text-blue-400 mb-4">{founderInfo.title}</p>
              <p className="text-gray-300 mb-6">{founderInfo.education}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Location</h4>
                <p className="text-gray-300">{founderInfo.location}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Age</h4>
                <p className="text-gray-300">{founderInfo.age} years old</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-3">Vision</h4>
              <p className="text-gray-300 leading-relaxed">{founderInfo.vision}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {founderInfo.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="h-8"></div>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Drives <span className="gradient-text">Optimarch</span>
          </h3>
          
          <div className="h-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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