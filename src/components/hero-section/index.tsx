'use client'

import { motion } from 'framer-motion'
import { HeroHighlight } from '../ui/hero-highlight'
import React from 'react'

export type HeroSectionProps = {
  children: React.ReactNode
}

export const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <div className='relative overflow-hidden after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-t after:from-background after:via-transparent after:to-transparent after:content-[""]'>
      <HeroHighlight className="relative z-10">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-4xl lg:text-5xl lg:leading-snug "
        >
          {children}
        </motion.h1>
      </HeroHighlight>
    </div>
  )
}
