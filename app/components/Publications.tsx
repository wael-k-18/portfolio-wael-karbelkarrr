'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Publications = () => {
  const publications = [
    {
      title: 'Efficient Object Detection for Edge Devices using Knowledge Distillation',
      venue: 'CVPR 2024',
      authors: 'W. Karbelkar, A. Smith, J. Chen',
      link: '#',
    },
    {
      title: 'Self-Supervised Learning for Medical Image Segmentation with Limited Labels',
      venue: 'MICCAI 2023',
      authors: 'W. Karbelkar, M. Johnson, R. Patel',
      link: '#',
    },
    {
      title: 'Real-Time Semantic Segmentation on Mobile GPUs: A Comprehensive Study',
      venue: 'ICCV Workshop 2023',
      authors: 'W. Karbelkar, S. Williams',
      link: '#',
    },
    {
      title: 'Adversarial Robustness in Autonomous Vehicle Perception Systems',
      venue: 'NeurIPS 2022',
      authors: 'W. Karbelkar, K. Brown, L. Davis',
      link: '#',
    },
  ]

  return (
    <section id="publications" className="py-20 md:py-32 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          Publications
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Research papers and contributions to the ML/CV community
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-6">
        {publications.map((pub, index) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 border border-border rounded-xl hover:border-primary hover:bg-accent/30 transition-all duration-300 group"
          >
            <h3 className="text-lg font-bold font-heading mb-2 group-hover:text-primary transition-colors">
              {pub.title}
            </h3>
            <p className="text-muted-foreground mb-2">{pub.authors}</p>
            <p className="text-sm font-medium text-primary mb-4">{pub.venue}</p>
            <a
              href={pub.link}
              className="inline-flex items-center text-sm font-medium hover:underline"
            >
              View Paper →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Publications