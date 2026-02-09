import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">
            Let's <span className="gradient-text">Talk</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Ready to start your project? Reach out and let's build something great together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all neon-glow"
            >
              {submitted ? "Message Sent! ✓" : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {[
              { icon: Mail, label: "Email", value: "hello@pepslookup.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
              { icon: MapPin, label: "Location", value: "San Francisco, CA" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="glass-card p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
