'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      name: 'E-commerce Computer Vision System',
      description: 'Automated product recognition and categorization system using YOLOv8 and custom CNN architecture.',
      tech: ['Python', 'PyTorch', 'YOLOv8', 'FastAPI', 'Docker'],
      impact: 'Increased product catalog accuracy by 94%',
      link: '#',
    },
    {
      name: 'Real-time Object Detection Mobile App',
      description: 'Mobile application for real-time object detection with edge deployment using TensorFlow Lite.',
      tech: ['TensorFlow Lite', 'Flutter', 'Kotlin', 'MLKit'],
      impact: '99ms inference time on mid-range devices',
      link: '#',
    },
    {
      name: 'Medical Image Analysis Platform',
      description: 'Deep learning platform for automated medical image analysis with explainable AI features.',
      tech: ['PyTorch', 'MONAI', 'Grad-CAM', 'React', 'FastAPI'],
      impact: '85% reduction in manual review time',
      link: '#',
    },
    {
      name: 'Autonomous Vehicle Perception',
      description: 'Multi-modal perception system integrating LiDAR, cameras, and radar for autonomous navigation.',
      tech: ['ROS2', 'PointNet++, PyTorch', 'C++', 'CUDA'],
      impact: '0.08m positional accuracy in dense urban environments',
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A selection of my recent work in AI/ML, computer vision, and deep learning
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 border border-border rounded-xl hover:border-primary hover:bg-accent/50 transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 bg-accent rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="text-sm font-medium text-primary mb-4">
              Impact: {project.impact}
            </div>

            <a
              href={project.link}
              className="inline-flex items-center text-sm font-medium hover:underline"
            >
              View Details →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects