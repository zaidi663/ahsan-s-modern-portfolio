import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code with best practices',
  },
  {
    icon: Palette,
    title: 'UI/UX Focus',
    description: 'Creating intuitive interfaces that users love',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for speed and user experience',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Efficient development without compromising quality',
  },
];

const skills = [
  'React', 'Next.js', 'TypeScript', 'JavaScript',
  'Tailwind CSS', 'Material UI', 'Shopify',
  'Laravel', 'MongoDB', 'REST APIs', 'Git'
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative">
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
              01. About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Crafting Digital Experiences
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate about building products that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a Frontend Developer with a passion for creating exceptional digital experiences. 
                  With expertise in modern JavaScript frameworks and e-commerce platforms, I help 
                  businesses build their online presence and scale their operations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in web development has led me to work on diverse projects—from 
                  interactive product customization tools to comprehensive e-commerce solutions. 
                  I believe in writing clean, efficient code that not only works but is a joy to maintain.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, I'm exploring new technologies, contributing to open-source 
                  projects, or helping businesses optimize their online stores for better conversions.
                </p>

                {/* Skills Pills */}
                <div className="pt-4">
                  <h3 className="text-sm font-semibold text-foreground mb-4">Technologies I work with:</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
