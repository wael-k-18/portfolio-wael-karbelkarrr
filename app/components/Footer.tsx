'use client'

import React from 'react'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold font-heading">WK</p>
            <p className="text-sm text-muted-foreground mt-1">
              AI/ML Developer | Computer Vision | Deep Learning
            </p>
          </div>

          <div className="flex gap-6">
            {[
              { href: 'https://github.com/waelkarbelkar', label: 'GitHub' },
              { href: 'https://linkedin.com/in/waelkarbelkar', label: 'LinkedIn' },
              { href: 'https://twitter.com/waelkarbelkar', label: 'Twitter' },
              { href: 'mailto:wael.karbelkar@email.com', label: 'Email' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Wael Karbelkar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer