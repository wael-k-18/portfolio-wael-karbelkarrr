'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillsData = [
    {
      category: 'Languages & Frameworks',
      skills: ['Python', 'C++', 'PyTorch', 'TensorFlow', 'FastAPI', 'CUDA', 'SQL'],
    },
    {
      category: 'Computer Vision',
      skills: ['OpenCV', 'YOLO', 'Segment Anything (SAM)', 'CLIP', 'Hugging Face', 'DINO'],
    },
    {
      category: 'Deep Learning',
      skills: ['CNNs', 'Transformers', 'GANs', 'Diffusion Models', 'GNNs', 'Explainable AI'],
    },
    {
      category: 'MLOps & Deployment',
      skills: ['Docker', 'Kubernetes', 'AWS (Sagemaker)', 'GCP', 'MLflow', 'GitHub Actions'],
    },
    {
      category: 'Data Science',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Streamlit', 'Weights & Biases'],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-accent/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of the tools and technologies I use to build intelligent systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-border rounded-2xl bg-background hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold font-heading mb-6 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills