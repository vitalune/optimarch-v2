'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Bot, Zap, Target } from 'lucide-react'
import ParticleBackground from '../3d/ParticleBackground'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-4 mb-8"
          >
            <div className="p-3 bg-blue-500/10 rounded-full backdrop-blur-sm border border-blue-500/20">
              <Bot className="w-8 h-8 text-blue-400" />
            </div>
            <div className="p-3 bg-purple-500/10 rounded-full backdrop-blur-sm border border-purple-500/20">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <div className="p-3 bg-cyan-500/10 rounded-full backdrop-blur-sm border border-cyan-500/20">
              <Target className="w-8 h-8 text-cyan-400" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12"
          >
            <span className="block mb-2">Transform Your</span>
            <span className="block gradient-text">Business with AI</span>
          </motion.h1>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 max-w-4xl mx-auto"
          >
            <div className="text-center space-y-3">
              <div className="text-3xl font-bold text-blue-400">50%</div>
              <div className="text-gray-400">Faster Processing</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-3xl font-bold text-purple-400">90%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-3xl font-bold text-cyan-400">24/7</div>
              <div className="text-gray-400">Automated Operations</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}