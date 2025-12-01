import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 95 },
    ],
  },
  {
    title: 'Styling',
    skills: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Material UI', level: 85 },
      { name: 'CSS/SCSS', level: 88 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    title: 'E-commerce',
    skills: [
      { name: 'Shopify', level: 88 },
      { name: 'Liquid', level: 80 },
      { name: 'Stripe', level: 75 },
      { name: 'SEO', level: 82 },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'MongoDB', level: 75 },
      { name: 'REST APIs', level: 85 },
      { name: 'Git/GitHub', level: 90 },
    ],
  },
];

const techLogos = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#000000' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'MUI', color: '#007FFF' },
  { name: 'Shopify', color: '#96BF48' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Git', color: '#F05032' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-secondary/30">
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
              04. Skills
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              My Tech Stack
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Tech Icons Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {techLogos.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-20 h-20 rounded-2xl glass-card flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/50 transition-all"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                >
                  {tech.name.slice(0, 2)}
                </div>
                <span className="text-xs text-muted-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill Bars */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm font-mono text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: 0.5 + catIndex * 0.1 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                          className="h-full rounded-full"
                          style={{ backgroundImage: 'var(--gradient-primary)' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
