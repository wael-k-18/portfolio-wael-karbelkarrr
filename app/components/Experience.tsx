'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Innovations Corp',
      role: 'Senior AI/ML Developer',
      period: '2023 - Present',
      description: 'Leading the Computer Vision team in developing advanced object recognition systems and MLOps infrastructure.',
      achievements: [
        'Reduced model inference latency by 45% using TensorRT optimization',
        'Implemented a scalable data labeling pipeline handling 1M+ images/month',
        'Led the transition to a cloud-native ML infrastructure using Kubernetes and Kubeflow',
      ],
    },
    {
      company: 'Future Mobility Systems',
      role: 'ML Developer',
      period: '2021 - 2023',
      description: 'Developed perception algorithms for autonomous delivery robots and small-scale AV platforms.',
      achievements: [
        'Achieved 98.5% mAP on custom pedestrian detection datasets',
        'Implemented sensor fusion algorithms combining LiDAR and stereo camera data',
        'Optimized models for deployment on edge devices like NVIDIA Jetson Nano',
      ],
    },
    {
      company: 'Data Science Hub',
      role: 'Junior Data Scientist',
      period: '2020 - 2021',
      description: 'Worked on predictive analytics and natural language processing tasks for enterprise clients.',
      achievements: [
        'Developed sentiment analysis models for customer feedback automation',
        'Automated ETL pipelines reducing manual data prep time by 70%',
        'Built interactive dashboards for model performance monitoring',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-16 text-center">
          Work Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="flex flex-col md:flex-row md:gap-12 group">
                <div className="md:w-1/3 text-left md:text-right mb-4 md:mb-0">
                  <div className="text-lg font-bold font-heading group-hover:text-primary transition-colors">
                    {exp.company}
                  </div>
                  <div className="text-sm text-muted-foreground">{exp.period}</div>
                </div>

                <div className="md:w-2/3 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-primary rounded-full hidden md:block" />

                  <h3 className="text-xl font-bold font-heading mb-4">{exp.role}</h3>
                  <p className="text-muted-foreground mb-6">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience