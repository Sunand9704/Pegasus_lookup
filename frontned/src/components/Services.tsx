import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ChevronLeft, ChevronRight, Cpu, Globe, Monitor, Smartphone, UsersRound } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  title: string[];
  gradient: string;
  glow: string;
}

interface TechnologySlide {
  id: string;
  title: string;
  description: string;
  image: string;
  panelGradient: string;
}

const services: ServiceItem[] = [
  {
    icon: Smartphone,
    title: ["Mobile", "Development"],
    gradient: "linear-gradient(150deg, #5A75FF 0%, #4457E9 100%)",
    glow: "0 14px 45px rgba(74, 101, 255, 0.35)",
  },
  {
    icon: Globe,
    title: ["Web", "Development"],
    gradient: "linear-gradient(150deg, #FF6C5A 0%, #FF4F63 100%)",
    glow: "0 14px 45px rgba(255, 91, 94, 0.35)",
  },
  {
    icon: Monitor,
    title: ["Desktop", "Development"],
    gradient: "linear-gradient(150deg, #A13BFF 0%, #6C3BDB 100%)",
    glow: "0 14px 45px rgba(146, 60, 245, 0.35)",
  },
  {
    icon: UsersRound,
    title: ["Staff", "Augmentation"],
    gradient: "linear-gradient(150deg, #FFB56A 0%, #EF8E48 100%)",
    glow: "0 14px 45px rgba(247, 165, 87, 0.35)",
  },
  {
    icon: Cpu,
    title: ["IoT/Emerging", "Tech"],
    gradient: "linear-gradient(150deg, #7FD34C 0%, #3EBA46 100%)",
    glow: "0 14px 45px rgba(94, 198, 77, 0.35)",
  },
];

const technologySlides: TechnologySlide[] = [
  {
    id: "wearables",
    title: "Wearable Health Platforms",
    description:
      "We build companion experiences for fitness bands and smart watches, including low-latency sync, activity analytics, and battery-aware background updates for daily engagement.",
    image: "/assets/tech-showcase/wearable-grid.svg",
    panelGradient: "linear-gradient(125deg, #7BE3E0 0%, #45C0CC 100%)",
  },
  {
    id: "cloud",
    title: "Cloud Orchestration Systems",
    description:
      "Our teams design cloud-native service layers with observable APIs, resilient queue workflows, and automation-first delivery pipelines that keep releases stable at scale.",
    image: "/assets/tech-showcase/cloud-orchestrator.svg",
    panelGradient: "linear-gradient(125deg, #8691FF 0%, #4F63E6 100%)",
  },
  {
    id: "ai",
    title: "AI Copilot Experiences",
    description:
      "From support assistants to internal productivity copilots, we ship secure AI features with prompt controls, grounded responses, and measurable business outcomes.",
    image: "/assets/tech-showcase/ai-copilot.svg",
    panelGradient: "linear-gradient(125deg, #B054FF 0%, #733CDB 100%)",
  },
  {
    id: "data",
    title: "Data Fabric Engineering",
    description:
      "We connect fragmented data sources into governed pipelines with event processing, live dashboards, and fault-tolerant flows that support product and operations teams.",
    image: "/assets/tech-showcase/data-fabric.svg",
    panelGradient: "linear-gradient(125deg, #4ADACA 0%, #24B4A7 100%)",
  },
  {
    id: "commerce",
    title: "Commerce Service Suites",
    description:
      "We develop modular commerce platforms covering catalog APIs, checkout services, and admin tooling so teams can roll out new channels without replatforming.",
    image: "/assets/tech-showcase/commerce-suite.svg",
    panelGradient: "linear-gradient(125deg, #8DDD53 0%, #4DB846 100%)",
  },
];

const ServiceCircle = ({ service, index }: { service: ServiceItem; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const Icon = service.icon;

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col items-center text-center"
    >
      <div
        className="relative flex h-[160px] w-[160px] items-center justify-center rounded-full md:h-[176px] md:w-[176px]"
        style={{ background: service.gradient, boxShadow: service.glow }}
      >
        <div className="absolute inset-[13%] rounded-full border border-white/20" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0)_40%)]" />
        <Icon size={56} className="relative z-[1] text-white" strokeWidth={1.8} />
      </div>
      <h3 className="mt-7 text-[19px] font-display font-bold leading-[1.1] text-white md:text-[21px]">
        {service.title[0]}
        <br />
        {service.title[1]}
      </h3>
    </motion.li>
  );
};

const TechnologyShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = technologySlides[activeIndex];

  const showPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + technologySlides.length) % technologySlides.length);
  };

  const showNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % technologySlides.length);
  };

  return (
    <div className="relative mt-24">
      <h3 className="mb-8 text-center text-2xl font-display font-extrabold uppercase tracking-[1px] text-white md:mb-10 md:text-4xl">
        Technology Highlights
      </h3>

      <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[#121827]">
        <div className="relative min-h-[560px] md:min-h-[620px]">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,#1A1F30_0%,#151A29_100%)]" />
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(24% 0, 100% 0, 78% 100%, 0 100%)",
              background: activeSlide.panelGradient,
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,16,27,0.62)_0%,rgba(12,16,27,0.26)_26%,rgba(12,16,27,0)_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(12,16,27,0.58)_0%,rgba(12,16,27,0.22)_26%,rgba(12,16,27,0)_44%)]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="relative z-[2] grid min-h-[560px] grid-cols-1 items-center gap-6 px-7 py-14 md:min-h-[620px] md:grid-cols-[1.05fr_1fr] md:gap-10 md:px-16"
            >
              <div className="flex items-center justify-center md:justify-start">
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="h-auto w-full max-w-[610px] rounded-[20px] border border-white/15 bg-[#121827]/25 shadow-[0_14px_42px_rgba(0,0,0,0.35)]"
                />
              </div>

              <div className="max-w-[560px] text-white">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[2px] text-white/80 md:text-xs">Technology + Services</p>
                <h4 className="mb-6 text-3xl font-display font-extrabold md:text-5xl">{activeSlide.title}</h4>
                <p className="text-[18px] leading-[1.65] text-white/92 md:text-[20px] md:leading-[1.68]">{activeSlide.description}</p>
                <button
                  type="button"
                  className="mt-9 rounded-full bg-white px-8 py-3.5 text-[15px] font-bold text-[#ff0044] transition-transform hover:translate-y-[-1px]"
                >
                  Explore stack
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous technology"
            className="absolute left-4 top-1/2 z-[3] flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:left-8"
          >
            <ChevronLeft size={36} strokeWidth={2.1} />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next technology"
            className="absolute right-4 top-1/2 z-[3] flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:right-8"
          >
            <ChevronRight size={36} strokeWidth={2.1} />
          </button>
        </div>

        <div className="relative z-[2] flex items-center justify-center gap-2 pb-8">
          {technologySlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${slide.title}`}
              className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/65"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const InquiryContactPanel = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const panelRef = useRef(null);
  const panelInView = useInView(panelRef, { once: true, margin: "-80px" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isConsentGiven) return;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2600);
  };

  return (
    <motion.div
      ref={panelRef}
      initial={{ opacity: 0, y: 34 }}
      animate={panelInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative mx-auto mt-20 w-[min(92vw,1540px)] overflow-hidden border border-white/10 bg-[linear-gradient(90deg,#121723_0%,#141A27_50%,#121723_100%)]"
      style={{ fontFamily: '"TT Hoves Pro", Arial, "Helvetica Neue", Helvetica, sans-serif' }}
    >
      <div className="relative z-[1] grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr]">
        <div className="border-b border-white/10 px-8 py-11 md:border-b-0 md:border-r md:px-[68px] md:py-[68px]">
          <h3 className="text-[40px] font-display font-black uppercase leading-[1.02] tracking-[1.1px] text-[#ff0044] md:text-[50px] md:whitespace-nowrap">
            Have Questions?
          </h3>
          <p className="mt-6 max-w-[430px] text-[18px] leading-[1.45] text-white/92 md:text-[20px] md:leading-[1.38]">
            Feel free to contact us and we will respond as soon as possible.
          </p>

          <div className="mt-14 flex flex-col gap-4 md:mt-[140px]">
            <a
              href="mailto:info@ferrettechnologies.com"
              className="w-fit text-[16px] font-display font-black uppercase tracking-[1.6px] text-[#ff0044] md:text-[19px]"
            >
              info@ferrettechnologies.com
            </a>
            <a href="tel:+14157702434" className="w-fit text-[32px] font-display font-extrabold tracking-[0.9px] text-white md:text-[36px] md:leading-none">
              +1 415 770 2434
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full px-8 py-11 md:px-[66px] md:py-[68px]">
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="min-w-0">
              <label htmlFor="service-form-name" className="mb-[10px] block text-[13px] font-medium leading-[1.5] tracking-[0.08px] text-white">
                Name <span className="text-[#ff0044]">*</span>
              </label>
              <input
                id="service-form-name"
                name="name"
                type="text"
                required
                className="h-[52px] w-full min-w-0 border border-white/15 bg-white/[0.04] px-4 text-[14px] text-white outline-none transition-colors focus:border-white"
              />
            </div>
            <div className="min-w-0">
              <label htmlFor="service-form-contact" className="mb-[10px] block text-[13px] font-medium leading-[1.5] tracking-[0.08px] text-white">
                Email or phone <span className="text-[#ff0044]">*</span>
              </label>
              <input
                id="service-form-contact"
                name="contact"
                type="text"
                required
                className="h-[52px] w-full min-w-0 border border-white/15 bg-white/[0.04] px-4 text-[14px] text-white outline-none transition-colors focus:border-white"
              />
            </div>
          </div>

          <div className="mt-8">
            <label htmlFor="service-form-description" className="mb-[10px] block text-[13px] font-medium leading-[1.5] tracking-[0.08px] text-white">
              A few words about your project
            </label>
            <textarea
              id="service-form-description"
              name="description"
              rows={4}
              className="h-[150px] w-full resize-none border border-white/15 bg-white/[0.04] px-4 py-3 text-[14px] text-white outline-none transition-colors focus:border-white"
            />
          </div>

          <label className="mt-8 flex max-w-[860px] items-start gap-3 text-[13px] leading-[1.45] text-white/70">
            <input
              type="checkbox"
              checked={isConsentGiven}
              onChange={(event) => setIsConsentGiven(event.target.checked)}
              className="mt-0.5 h-6 w-6 shrink-0 cursor-pointer appearance-none border border-white bg-white checked:border-[#ff0044] checked:bg-[#ff0044]"
            />
            <span>
              I accept the{" "}
              <a href="/privacy" className="underline decoration-white/40 underline-offset-4 hover:text-white">
                Privacy Policy
              </a>{" "}
              and consent to personal data processing.
            </span>
          </label>

          <button
            type="submit"
            disabled={!isConsentGiven}
            className="mt-9 inline-flex h-12 min-w-[178px] items-center justify-center gap-2 rounded-full bg-[#ff0044] px-8 text-[15px] font-semibold text-white transition-all hover:bg-[#ed164e] disabled:cursor-not-allowed disabled:opacity-55"
          >
            {isSubmitted ? "Sent" : "Next"}
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-[linear-gradient(90deg,#171A2B_0%,#1A1E31_50%,#171A2B_100%)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.04),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.035),transparent_30%)]" />

      <div className="relative mx-auto max-w-[1560px]">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-[1080px] text-center md:mb-20"
        >
          <h2 className="text-4xl font-display font-black uppercase tracking-[0.9px] text-white md:text-6xl">OUR SERVICES</h2>
          <p className="mx-auto mt-7 max-w-[1040px] text-[16px] font-medium leading-[1.72] text-white/90 md:text-[20px] md:leading-[1.65]">
            We plug into your workflow to design and ship reliable digital products, strengthen delivery teams,
            and accelerate technical outcomes across platforms without disrupting your core operations.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 justify-items-center gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <ServiceCircle key={service.title.join("-")} service={service} index={index} />
          ))}
        </ul>

        <TechnologyShowcase />
      </div>
    </section>
  );
};

export default Services;
