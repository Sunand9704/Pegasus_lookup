import { motion } from "framer-motion";
import { ArrowUpRight, Gauge, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";

const caseStudies = [
  {
    client: "NexaPay",
    challenge: "Replace a fragile legacy dashboard while serving live financial data.",
    result: "Launched a new analytics suite with 99.95% uptime and 3x faster report rendering.",
    metric: "3x faster insights",
  },
  {
    client: "CareBridge",
    challenge: "Scale telehealth scheduling across multiple hospital networks.",
    result: "Built a resilient booking workflow that reduced failed appointments by 41%.",
    metric: "41% fewer no-shows",
  },
  {
    client: "SupplyHive",
    challenge: "Unify fragmented logistics tracking across seven regional systems.",
    result: "Shipped a centralized control panel and event stream with real-time visibility.",
    metric: "62% faster incident response",
  },
];

const outcomeHighlights = [
  {
    icon: Target,
    title: "Clear Product Goals",
    text: "Every engagement starts with measurable success criteria tied to business outcomes.",
  },
  {
    icon: Gauge,
    title: "Reliable Delivery Pace",
    text: "Tight sprint loops and weekly demos keep teams aligned and shipping with confidence.",
  },
  {
    icon: TrendingUp,
    title: "Compounding Growth",
    text: "We build technical foundations that keep performance and release velocity improving over time.",
  },
];

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHero
        badge="Work"
        title="Products Built for"
        highlight="Real-World Impact"
        description="A snapshot of the digital platforms we have designed, engineered, and scaled with client teams."
        primaryCta={{ label: "Discuss Your Idea", to: "/contact" }}
        secondaryCta={{ label: "View Pricing", to: "/pricing" }}
      />

      <Portfolio />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary">Case Studies</span>
            <h2 className="mt-3 text-3xl font-display font-bold md:text-5xl">
              Project <span className="gradient-text">Outcomes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className="glass-card-hover p-7"
              >
                <div className="mb-4 inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {study.client}
                </div>
                <h3 className="text-lg font-display font-semibold">Challenge</h3>
                <p className="mt-2 text-sm text-muted-foreground">{study.challenge}</p>
                <h3 className="mt-5 text-lg font-display font-semibold">Result</h3>
                <p className="mt-2 text-sm text-muted-foreground">{study.result}</p>
                <p className="mt-6 text-sm font-semibold gradient-text">{study.metric}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-80px" }}
              className="glass-card p-8"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-primary">Execution Lens</span>
              <h3 className="mt-3 text-2xl font-display font-bold md:text-3xl">
                Why Teams Choose <span className="gradient-text">Our Delivery Style</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our role is to reduce product risk while accelerating quality releases. We operate as a partner that translates strategy into shipped outcomes.
              </p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-all hover:border-primary/50 hover:bg-card"
              >
                See Service Models
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>

            <div className="space-y-4">
              {outcomeHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="glass-card p-6"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h4 className="font-display text-lg font-semibold">{item.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkPage;
