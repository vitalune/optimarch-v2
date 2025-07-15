'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'

interface LazySectionProps {
  children: React.ReactNode
  className?: string
}

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
    />
  </div>
)

export default function LazySection({ children, className = "" }: LazySectionProps) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className={className}>
        {children}
      </div>
    </Suspense>
  )
}