import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Palette, Layers, Brain, Cloud } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", description: "Custom web applications built with modern frameworks for speed, scalability, and performance." },
  { icon: Smartphone, title: "Mobile App Development", description: "Native and cross-platform mobile apps that deliver seamless user experiences." },
  { icon: Palette, title: "UI/UX Design", description: "Human-centered design that creates intuitive, beautiful digital experiences." },
  { icon: Layers, title: "SaaS Development", description: "End-to-end SaaS product development from MVP to enterprise-grade platform." },
  { icon: Brain, title: "AI Integration", description: "Integrate intelligent AI solutions to automate processes and unlock insights." },
  { icon: Cloud, title: "Cloud Solutions", description: "Scalable cloud architecture and DevOps for reliable, high-availability systems." },
  { icon: Layers, title: "Blockchain Development", description: "Secure and transparent decentralized applications and smart contracts." },
  { icon: Smartphone, title: "AR/VR Experiences", description: "Immersive augmented and virtual reality solutions for next-gen engagement." },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card-hover p-8 group"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="text-lg font-display font-semibold mb-3">{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
    </motion.div>
  );
};

const Services = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We offer comprehensive digital solutions to transform your ideas into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
