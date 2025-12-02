import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Front-End Developer & E-commerce Manager',
    company: 'Swishtag',
    location: 'Onsite',
    period: '2024 - Present',
    description: 'Full-time role focused on front-end development using React, Next.js, and modern UI libraries, alongside managing Shopify stores.',
    responsibilities: [
      'Front-end development using React, Next.js, and modern UI libraries',
      'Managing Shopify stores, including product catalogs, variants, filters, and shipping setups',
      'Building and customizing Shopify themes, templates, and store sections',
      'Improving UI/UX, optimizing store pages, and implementing dynamic components',
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Material UI', 'Shopify'],
  },
  {
    title: 'Front-End Developer & E-commerce Intern',
    company: 'Swishtag',
    location: 'Onsite',
    period: '2023 - 2024',
    description: 'Internship focused on e-commerce store setup, product management, and building responsive frontend components.',
    responsibilities: [
      'Assisted in e-commerce store setup and product management',
      'Built responsive frontend components using React and Next.js',
      'Improved UI layouts, navigation structures, and user flows',
      'Collaborated with senior developers to optimize site performance',
    ],
    tech: ['React', 'Next.js', 'Shopify', 'HTML/CSS', 'JavaScript'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm font-medium mb-4 block">
              02. Experience
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Where I've Worked
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey in web development and e-commerce
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-6 w-4 h-4 rounded-full bg-primary border-4 border-background left-0 md:left-1/2 -translate-x-1/2 z-10`} />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="glass-card p-6 hover:border-primary/50 transition-all duration-300">
                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    <p className={`text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description}
                    </p>

                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className={`text-primary mt-1.5 ${index % 2 === 0 ? 'md:order-last' : ''}`}>▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
