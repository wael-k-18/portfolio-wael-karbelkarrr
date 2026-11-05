'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold font-heading mb-6">
          Wael Karbelkar
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          AI/ML Developer | Computer Vision | Deep Learning
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border rounded-full hover:bg-accent transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero