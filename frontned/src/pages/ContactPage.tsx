import { motion } from "framer-motion";
import { Clock3, Globe, MessageCircleMore, PhoneCall } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";

const offices = [
  {
    city: "San Francisco",
    timezone: "GMT-8",
    hours: "Mon-Fri, 9:00 AM - 6:00 PM",
  },
  {
    city: "New York",
    timezone: "GMT-5",
    hours: "Mon-Fri, 8:00 AM - 5:00 PM",
  },
  {
    city: "London",
    timezone: "GMT+0",
    hours: "Mon-Fri, 9:30 AM - 6:30 PM",
  },
];

const responseFlow = [
  {
    icon: MessageCircleMore,
    title: "Share Your Goals",
    detail: "Tell us what you are building, the timeline, and where you need support.",
  },
  {
    icon: PhoneCall,
    title: "Discovery Call",
    detail: "We align on requirements, risks, and the best delivery structure for your team.",
  },
  {
    icon: Clock3,
    title: "Plan in 48 Hours",
    detail: "You receive a high-level project plan, team recommendation, and start timeline.",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHero
        badge="Contact"
        title="Bring Us Your Next"
        highlight="Product Challenge"
        description="Whether you need a new build, modernization, or a delivery partner, we are ready to help you move fast with clarity."
        primaryCta={{ label: "See Services", to: "/services" }}
        secondaryCta={{ label: "Review Pricing", to: "/pricing" }}
      />

      <Contact />

      <section className="section-padding bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary">Global Presence</span>
            <h2 className="mt-3 text-3xl font-display font-bold md:text-5xl">
              Offices & <span className="gradient-text">Coverage</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {offices.map((office, index) => (
              <motion.article
                key={office.city}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className="glass-card-hover p-7"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Globe size={21} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold">{office.city}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Timezone: {office.timezone}</p>
                <p className="mt-1 text-sm text-muted-foreground">{office.hours}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary">What Happens Next</span>
            <h2 className="mt-3 text-3xl font-display font-bold md:text-5xl">
              Fast <span className="gradient-text">Response Flow</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {responseFlow.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="glass-card flex flex-col gap-4 p-6 md:flex-row md:items-start md:gap-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
