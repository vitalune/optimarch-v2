'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react'
import { Heart } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/amir-valizadeh104', label: 'LinkedIn' },
  { icon: Heart, href: 'https://huggingface.co/vitalune', label: 'Hugging Face' },
  { icon: Github, href: 'https://github.com/vitalune', label: 'GitHub' },
]

const footerSections = [
  {
    title: 'Services',
    links: [
      { label: 'Process Automation', href: '#services' },
      { label: 'Predictive Analytics', href: '#services' },
      { label: 'Custom AI Development', href: '#services' },
      { label: 'AI Integration', href: '#services' },
      { label: 'Consulting', href: '#services' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Case Studies', href: 'https://marketingassets.microsoft.com/gdc/gdcflXNT6/original' },
      { label: 'Contact', href: '#contact' },
    ]
  },
  {
    title: 'Connect',
    links: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/amir-valizadeh104' },
      { label: 'GitHub', href: 'https://github.com/vitalune' },
      { label: 'Hugging Face', href: 'https://huggingface.co/vitalune' },
      { label: 'Email', href: 'mailto:amirvalizadeh161@gmail.com' },
    ]
  }
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold mb-4">
                  <span className="gradient-text">Optimarch</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  Transforming businesses through intelligent AI automation solutions. 
                  I bridge the gap between cutting-edge technology and practical business results.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>amirvalizadeh161@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>+1 (240) 479-8419</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Arlington, VA</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                      >
                        {link.label}
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2024 Optimarch. All rights reserved. Built with AI-powered innovation.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-6"
        >
          <div className="text-center">
            <p className="text-gray-500 text-xs mb-2">
              Powered by cutting-edge AI technology and human expertise
            </p>
            <div className="flex justify-center space-x-8 text-xs text-gray-600">
              <span>🔒 Enterprise Security</span>
              <span>📊 99.9% Uptime</span>
              <span>🌐 Global Support</span>
              <span>⚡ Lightning Fast</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}