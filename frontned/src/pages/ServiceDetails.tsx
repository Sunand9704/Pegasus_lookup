import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Smartphone, Globe, Monitor, UsersRound, Cpu, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

const serviceData = {
    "mobile-development": {
        title: "Mobile Development",
        icon: Smartphone,
        color: "#5A75FF",
        description: "Build cutting-edge mobile applications that provide seamless experiences across iOS and Android. Our mobile development team focuses on performance, scalability, and user-centric design.",
        features: [
            "Native iOS & Android Development",
            "Cross-platform Solutions (React Native, Flutter)",
            "Mobile UI/UX Design",
            "App Store Optimization",
            "Ongoing Maintenance & Updates"
        ]
    },
    "web-development": {
        title: "Web Development",
        icon: Globe,
        color: "#FF6C5A",
        description: "Creating responsive, fast, and secure web applications tailored to your business needs. We use the latest technologies to ensure your web presence is powerful and effective.",
        features: [
            "Full-stack Web Development",
            "Progressive Web Apps (PWA)",
            "E-commerce Solutions",
            "Custom CMS Development",
            "API Integration & Development"
        ]
    },
    "desktop-development": {
        title: "Desktop Development",
        icon: Monitor,
        color: "#A13BFF",
        description: "Robust and high-performance desktop applications for Windows, macOS, and Linux. We build powerful tools that take full advantage of desktop hardware.",
        features: [
            "Cross-platform Desktop Apps",
            "Performance Optimization",
            "System Integration",
            "Offline Functionality",
            "Custom Enterprise Tools"
        ]
    },
    "staff-augmentation": {
        title: "Staff Augmentation",
        icon: UsersRound,
        color: "#FFB56A",
        description: "Scale your team quickly with our skilled developers and designers. We provide the expertise you need to accelerate your project without the overhead of full-time hiring.",
        features: [
            "Dedicated Project Teams",
            "Technical Lead & Architecture Support",
            "UI/UX Designers & Researchers",
            "QA & DevOps Specialists",
            "Flexible Engagement Models"
        ]
    },
    "iot-emerging-tech": {
        title: "IoT / Emerging Tech",
        icon: Cpu,
        color: "#7FD34C",
        description: "Stay ahead of the curve with our expertise in Internet of Things and other emerging technologies. We help you innovate and lead in your industry.",
        features: [
            "IoT Hardware & Software Integration",
            "AI & Machine Learning Implementation",
            "Blockchain Solutions",
            "Edge Computing",
            "Custom Innovation Labs"
        ]
    }
};

const ServiceDetails = () => {
    const { id } = useParams<{ id: string }>();
    const service = serviceData[id as keyof typeof serviceData];

    if (!service) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/" className="text-primary hover:underline">Return to Home</Link>
                </div>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <div className="min-h-screen bg-[#0c0d16] text-white">
            <Navbar />

            <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-[#ff0044] transition-colors mb-12">
                    <ArrowLeft size={20} />
                    <span>Back to Services</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
                            style={{ backgroundColor: service.color, boxShadow: `0 10px 30px ${service.color}44` }}
                        >
                            <Icon size={40} className="text-white" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-black uppercase mb-8 leading-tight">
                            {service.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10">
                            {service.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl"
                    >
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-[#ff0044] rounded-full"></span>
                            Key Capabilities
                        </h2>

                        <ul className="space-y-6">
                            {service.features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex items-center gap-4 text-lg text-white/70"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff0044]" />
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-12 p-8 rounded-2xl bg-[#ff0044]/10 border border-[#ff0044]/20">
                            <h3 className="text-xl font-bold mb-4 text-[#ff0044]">Ready to Start?</h3>
                            <p className="text-white/60 mb-6">Let's discuss how our {service.title} expertise can help your business grow.</p>
                            <Link
                                to="/contact"
                                className="inline-block w-full py-4 bg-[#ff0044] hover:bg-[#ff0044]/90 text-white font-bold rounded-xl text-center transition-colors"
                            >
                                Schedule a Consultation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Decorative background elements */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[#ff0044] opacity-[0.03] blur-[100px] pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-[#4f68ff] opacity-[0.03] blur-[100px] pointer-events-none" />
        </div>
    );
};

export default ServiceDetails;
