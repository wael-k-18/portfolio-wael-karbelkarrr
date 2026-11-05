'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          About Me
        </h2>
        <div className="prose prose-invert max-w-none text-left">
          <p className="mb-4 text-lg">
            I'm Wael Karbelkar, an AI/ML Developer passionate about building intelligent systems that solve real-world problems.
            With a strong foundation in Computer Vision and Deep Learning, I specialize in developing end-to-end ML solutions —
            from data preprocessing and model architecture design to deployment and monitoring.
          </p>
          <p className="mb-4 text-lg">
            My expertise spans across PyTorch, TensorFlow, and modern MLOps practices. I've worked on projects ranging from
            real-time object detection systems to large-scale image classification pipelines, always focusing on production-ready
            solutions that deliver measurable impact.
          </p>
          <p className="text-lg">
            When I'm not training models, you'll find me contributing to open-source projects, reading the latest ML research papers,
            or experimenting with new architectures and techniques.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          { title: 'Computer Vision', desc: 'Object detection, segmentation, classification' },
          { title: 'Deep Learning', desc: 'CNNs, Transformers, GANs, Diffusion models' },
          { title: 'MLOps', desc: 'Model deployment, monitoring, CI/CD pipelines' },
        ].map((skill, i) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            className="p-6 border border-border rounded-xl hover:border-primary transition-colors"
          >
            <h3 className="text-xl font-bold font-heading mb-2">{skill.title}</h3>
            <p className="text-muted-foreground">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default About