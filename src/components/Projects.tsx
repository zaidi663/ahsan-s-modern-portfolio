import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Legacy Gallery',
    description: 'A bidding platform developed in React JS with artwork listings, bidding functionality, and a user-friendly dashboard.',
    image: '/placeholder-legacy.jpg',
    tech: ['React', 'JavaScript', 'REST APIs', 'CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Fickle Flight',
    description: 'A React-powered flight booking platform with advanced search, filtering, and a smooth reservation flow.',
    image: '/placeholder-flight.jpg',
    tech: ['React', 'JavaScript', 'REST APIs', 'CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Xecutor',
    description: 'A comprehensive MES-style dashboard for managing print-on-demand operations, including orders, production batches, analytics, and user activity.',
    image: '/placeholder-xecutor.jpg',
    tech: ['React', 'Material UI', 'REST APIs', 'Dashboard'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm font-medium mb-4 block">
              03. Projects
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Things I've Built
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? 'md:text-right' : ''
                }`}
              >
                {/* Project Image */}
                <div
                  className={`md:col-span-7 relative group ${
                    index % 2 === 1 ? 'md:order-last' : ''
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-video bg-secondary">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Folder className="w-20 h-20 text-primary/30" />
                    </div>
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button variant="secondary" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button variant="secondary" size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`md:col-span-6 ${
                    index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-6'
                  } md:absolute md:inset-y-0 flex flex-col justify-center z-10`}
                >
                  <span className="text-primary font-mono text-sm mb-2">Featured Project</span>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                  <div className="glass-card p-6 mb-4">
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
