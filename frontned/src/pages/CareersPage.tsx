import { motion } from "framer-motion";
import { Briefcase, Code, Database, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

const openings = [
    {
        role: "Senior Full Stack Engineer",
        type: "Remote / Hybrid",
        team: "Product Engineering",
        icon: Code,
    },
    {
        role: "Product Designer (UI/UX)",
        type: "Remote",
        team: "Design System",
        icon: Users,
    },
    {
        role: "Backend Architect",
        type: "Remote",
        team: "Platform Core",
        icon: Database,
    },
    {
        role: "Technical Project Manager",
        type: "Remote",
        team: "Delivery & Client Success",
        icon: Briefcase,
    },
];

const CareersPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <PageHero
                badge="Careers"
                title="Build The Future"
                highlight="With Us"
                description="We're looking for passionate problem solvers to join our team. Work on challenging projects, learn from the best, and make an impact."
                primaryCta={{ label: "View Openings", to: "#openings" }}
                secondaryCta={{ label: "Learn About Us", to: "/about" }}
            />

            <section id="openings" className="section-padding">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-80px" }}
                        className="mb-12 text-center"
                    >
                        <span className="text-sm font-medium uppercase tracking-wider text-primary">Open Positions</span>
                        <h2 className="mt-3 text-3xl font-display font-bold md:text-5xl">
                            Join Our <span className="gradient-text">Squad</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {openings.map((job, index) => {
                            const Icon = job.icon;
                            return (
                                <motion.div
                                    key={job.role}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    className="glass-card-hover group flex items-start gap-5 p-6 cursor-pointer"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                                        <Icon size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">{job.role}</h3>
                                        <p className="mt-1 text-sm text-muted-foreground">{job.team} • {job.type}</p>
                                        <div className="mt-4 flex items-center text-xs font-medium uppercase tracking-wider text-primary">
                                            Apply Now <span className="ml-2">→</span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CareersPage;
