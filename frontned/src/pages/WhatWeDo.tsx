import React from "react";
import { motion } from "framer-motion";
import {
    Smartphone,
    Cpu,
    Monitor,
    Watch,
    Palette,
    Globe,
    Terminal,
    ShieldCheck,
    Search,
    Accessibility,
    Zap,
    Users,
    HeartPulse,
    Activity,
    Bluetooth,
    Wifi,
    Code2,
    Tv,
    Apple,
    ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TwinklingStars from "@/components/TwinklingStars";

const serviceBubbles = [
    // Center bubble - Mobile Development (fully visible, largest)
    { id: "mobile", label: "Mobile Development", icon: Smartphone, size: "xl", color: "#3b62f6", x: 0, y: 0, delay: 0, morph: "35% 65% 65% 35% / 45% 45% 55% 55%", illustration: "phone" },

    // Above Mobile - AI Features Integration (overlapped by Mobile, no icon, oval shape)
    { id: "ai-features", label: "AI Features Integration", icon: Cpu, size: "oval", color: "#f43f5e", x: 0, y: -220, delay: 0.3, morph: "50% 50% 50% 50% / 50% 50% 50% 50%" },

    // Top-left corner - Cutting Edge (overlapped by Mobile and AI Features, has icon)
    { id: "cutting-edge", label: "Cutting Edge", icon: Zap, size: "large", color: "#4ade80", x: -200, y: -140, delay: 0.1, morph: "40% 60% 40% 60% / 60% 40% 60% 40%", illustration: "watch" },

    // Top-right corner - Digital Transformation (overlapped by Mobile and AI Features, has icon)
    { id: "digital", label: "Digital Transformation", icon: Monitor, size: "large", color: "#8b5cf6", x: 200, y: -140, delay: 0.2, morph: "30% 70% 50% 50% / 50% 50% 70% 30%", illustration: "tablet" },

    // Bottom-left corner - Web Development (overlapped by Mobile, has icon)
    { id: "web", label: "Web Development", icon: Globe, size: "large", color: "#f43f5e", x: -200, y: 240, delay: 0.7, morph: "35% 65% 65% 35% / 65% 35% 35% 65%", illustration: "laptop" },

    // Bottom-right corner - Design (overlapped by Mobile, has icon)
    { id: "design", label: "Design", icon: Palette, size: "largePlus", color: "#f59e0b", x: 200, y: 240, delay: 0.9, morph: "45% 55% 35% 65% / 65% 35% 65% 35%", illustration: "hand" },

    // Smaller bubbles without icons - positioned around
    { id: "accessible", label: "Accessible & Compliant", icon: Accessibility, size: "smallPlus", color: "#e11d48", x: -420, y: -80, delay: 0.4, morph: "70% 30% 60% 40% / 40% 60% 30% 70%" },
    { id: "discovery", label: "Discovery", icon: Search, size: "small", color: "#0ea5e9", x: -380, y: 60, delay: 0.5, morph: "40% 60% 70% 30% / 40% 40% 60% 60%" },
    { id: "qa", label: "Quality Assurance", icon: ShieldCheck, size: "smallPlus", color: "#a855f7", x: -400, y: 180, delay: 0.6, morph: "50% 50% 30% 70% / 70% 30% 70% 30%" },
    { id: "ai-assisted", label: "AI Assisted Development", icon: Terminal, size: "medium", color: "#f43f5e", x: 0, y: 320, delay: 0.8, morph: "60% 40% 60% 40% / 40% 60% 40% 60%" },
    { id: "wearables", label: "Wearable Devices", icon: Watch, size: "smallPlus", color: "#f43f5e", x: 420, y: 120, delay: 1.0, morph: "40% 60% 60% 40% / 60% 40% 40% 60%" },
    { id: "desktop", label: "Desktop Development", icon: Monitor, size: "smallPlus", color: "#4ade80", x: 440, y: -20, delay: 1.1, morph: "70% 30% 40% 60% / 60% 40% 70% 30%" },
];

const verticals = [
    {
        label: "Staff Augmentation",
        icon: Users,
        color: "from-blue-500 to-indigo-600",
        description: "We provide teams capable of increasing the velocity of your development or extending your technical capabilities."
    },
    {
        label: "Healthcare",
        icon: HeartPulse,
        color: "from-rose-400 to-rose-600",
        description: "We deliver innovative healthcare software solutions that improve patient outcomes and streamline medical workflows."
    },
    {
        label: "Fitness and Wellness",
        icon: Activity,
        color: "from-violet-500 to-fuchsia-600",
        description: "Gain insights into our development process and see how we create best in class, custom applications for the Health and Fitness industries.",
        hasLearnMore: true
    },
    {
        label: "Other",
        icon: Search,
        color: "from-orange-400 to-orange-600",
        description: "We have vast expertise in many other areas — Automotive, Sales, Entertainment, Social Networking, and can help our customers with a project of any scale and complexity."
    },
];

const techItems = [
    {
        id: "ble",
        label: "Bluetooth Low Energy",
        icon: Bluetooth,
        color: "bg-[#3b82f6]",
        detail: "Mercury has extensive experience providing solutions for BLE devices, from industrial sensors to consumer health trackers."
    },
    {
        id: "ibeacon",
        label: "iBeacon",
        icon: Wifi,
        color: "bg-[#22c55e]",
        detail: "App for conferences leverages personal badges with integrated iBeacons to help trade show organizers engage visitors and get valuable metrics."
    },
    {
        id: "sdk",
        label: "SDK",
        icon: Code2,
        color: "bg-[#f59e0b]",
        detail: "We create custom software development kits that allow for seamless integration of your platform with external services and hardware."
    },
    {
        id: "smart-tv",
        label: "Smart TV",
        icon: Tv,
        color: "bg-[#8b5cf6]",
        detail: "Apps make smart TV rich and more useful, and we help to create outstanding experience for smart TV users across all major platforms."
    },
    {
        id: "wearables",
        label: "Wearable Devices",
        icon: Watch,
        color: "bg-[#06b6d4]",
        detail: "From watch face design to complex biometric data processing, we build apps that make the most of wearable hardware capabilities."
    },
    {
        id: "appletv",
        label: "Apple TV",
        icon: Apple,
        color: "bg-[#f43f5e]",
        detail: "We used sophisticated video and audio processing algorithms in apple TV apps to deliver optimum viewing and listening experience to customers."
    },
];

const WhatWeDo = () => {
    return (
        <div className="min-h-screen bg-[#0c0d15] text-white ferret-home">
            <Navbar />

            {/* Combined Hero & Bubble Section with shared background */}
            <div className="relative">
                <div className="absolute inset-x-0 top-0 z-0 h-full w-full">
                    <div className="absolute inset-0 bg-[#0c0d15]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(48,64,156,0.15)_0%,rgba(12,13,32,0)_70%)]" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
                </div>

                <TwinklingStars />

                <div className="absolute inset-x-0 top-0 z-[1] h-full w-full pointer-events-none">
                    <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[10%] top-[10%] h-3 w-3 rotate-45 border border-white/20 bg-white/5" />
                    <motion.div animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute right-[15%] top-[15%] h-2 w-2 rotate-45 border border-white/20 bg-white/5" />
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute left-[20%] top-[40%] h-4 w-4 rotate-45 border border-white/20 bg-white/5" />
                    <motion.div animate={{ rotate: [45, 225, 45], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute right-[25%] top-[50%] h-6 w-6 border border-white/10" />
                </div>

                <section className="relative flex flex-col items-center justify-start overflow-hidden px-4 pt-32 pb-0 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 max-w-5xl"
                    >
                        <h1 className="mb-4 font-display text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                            End-to-End Development Services
                        </h1>
                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                            From an idea to deployment and support, Ferret Technologies can assist you on every step of the development cycle, making a launch of a new venture or improving an existing solution seamless.
                        </p>
                    </motion.div>
                </section>

                {/* Bubble Cluster Section integrated into the same relative context */}
                <section className="relative min-h-[650px] overflow-hidden pt-0 pb-16 z-10">
                    <div className="relative w-full flex items-center justify-center">
                        <div className="relative h-[650px] w-full" style={{ maxWidth: '100vw' }}>
                            {serviceBubbles.map((bubble) => {
                                const Icon = bubble.icon;
                                const sizeClasses = {
                                    xl: "h-[380px] w-[380px] z-[50]",
                                    largePlus: "h-[340px] w-[340px] z-[20]",
                                    large: "h-[320px] w-[320px] z-[20]",
                                    medium: "h-[200px] w-[200px] z-[15]",
                                    oval: "h-[140px] w-[280px] z-[15]",
                                    smallPlus: "h-[170px] w-[170px] z-[10]",
                                    small: "h-[150px] w-[150px] z-[5]"
                                };
                                const currentSizeClass = sizeClasses[bubble.size as keyof typeof sizeClasses] || sizeClasses.medium;

                                return (
                                    <div key={bubble.id} className="absolute left-1/2 top-1/2" style={{ transform: `translate(calc(-50% + ${bubble.x}px), calc(-50% + ${bubble.y}px))` }}>
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            whileHover={{ scale: 1.05, borderRadius: bubble.morph, transition: { type: "spring", stiffness: 100, damping: 30, duration: 0.6 } }}
                                            className={`flex flex-col items-center justify-center text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] pointer-events-auto cursor-pointer transition-colors duration-500 overflow-visible ${currentSizeClass}`}
                                            style={{ borderRadius: bubble.size === 'oval' ? '50%' : '50%', backgroundColor: bubble.color }}
                                        >
                                            <div className="relative z-[100] flex flex-col items-center px-10" style={{ pointerEvents: 'none' }}>
                                                {bubble.illustration === "phone" ? (
                                                    <div className="relative mb-8 h-56 w-full flex items-center justify-center">
                                                        <svg viewBox="0 0 120 180" className="h-full drop-shadow-2xl">
                                                            <rect x="30" y="15" width="60" height="110" rx="10" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="2.5" />
                                                            <rect x="33" y="20" width="54" height="95" rx="6" fill="white" fillOpacity="0.15" />
                                                            <circle cx="60" cy="130" r="4" fill="white" fillOpacity="0.6" />
                                                            <rect x="45" y="35" width="30" height="20" rx="2" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1" />
                                                            <rect x="45" y="58" width="30" height="20" rx="2" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1" />
                                                            <rect x="45" y="81" width="30" height="20" rx="2" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1" />
                                                        </svg>
                                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] flex gap-2">
                                                            <Apple size={18} className="text-white/90" />
                                                            <Smartphone size={18} className="text-white/90" />
                                                        </div>
                                                    </div>
                                                ) : bubble.illustration === "watch" ? (
                                                    <div className="relative mb-6 h-32 w-32 flex items-center justify-center">
                                                        <svg viewBox="0 0 100 100" className="h-full rotate-[-15deg]">
                                                            <rect x="35" y="10" width="30" height="80" rx="4" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1" />
                                                            <rect x="30" y="30" width="40" height="40" rx="8" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="2" />
                                                            <circle cx="50" cy="50" r="10" stroke="white" fill="none" strokeWidth="1" strokeDasharray="2 2" />
                                                        </svg>
                                                    </div>
                                                ) : bubble.illustration === "tablet" ? (
                                                    <div className="relative mb-6 h-36 w-48 flex items-center justify-center">
                                                        <svg viewBox="0 0 150 100" className="h-full">
                                                            <rect x="20" y="10" width="110" height="80" rx="6" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="2" />
                                                            <rect x="25" y="15" width="100" height="65" rx="3" fill="white" fillOpacity="0.4" />
                                                            <circle cx="135" cy="50" r="2" fill="white" />
                                                        </svg>
                                                    </div>
                                                ) : bubble.illustration === "laptop" ? (
                                                    <div className="relative mb-6 h-32 w-48 flex items-center justify-center">
                                                        <svg viewBox="0 0 150 100" className="h-full">
                                                            <rect x="30" y="20" width="90" height="55" rx="4" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2" />
                                                            <path d="M20 75 L130 75 L140 85 L10 85 Z" fill="white" fillOpacity="0.4" />
                                                            <rect x="65" y="78" width="20" height="3" rx="1" fill="white" />
                                                        </svg>
                                                    </div>
                                                ) : bubble.illustration === "hand" ? (
                                                    <div className="relative mb-6 h-40 w-40 flex items-center justify-center">
                                                        <svg viewBox="0 0 100 100" className="h-full">
                                                            <path d="M20 80 Q40 40 60 50 Q80 60 90 40" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                                                            <circle cx="40" cy="40" r="15" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1" />
                                                            <rect x="70" y="20" width="20" height="25" rx="2" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1" />
                                                        </svg>
                                                    </div>
                                                ) : null}
                                                <span className={`font-display font-black leading-none uppercase tracking-tighter text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${bubble.size === "xl" ? "text-2xl" : bubble.size === "large" || bubble.size === "largePlus" ? "text-lg" : bubble.size === "oval" ? "text-sm" : bubble.size === "medium" ? "text-base" : "text-sm"}`} style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,0.5)' }}>
                                                    {bubble.label.split(' ').map((word, i) => (
                                                        <React.Fragment key={i}>{word}<br /></React.Fragment>
                                                    ))}
                                                </span>
                                            </div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>

            {/* Verticals Section */}
            <section className="bg-[#0c0d15] py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 opacity-5">
                    <Users size={300} />
                </div>
                <div className="container mx-auto px-6 text-center max-w-6xl relative z-10">
                    <h2 className="mb-3 font-display text-4xl font-black md:text-5xl">Verticals</h2>
                    <p className="mx-auto mb-12 max-w-2xl text-sm md:text-base text-white/60">
                        We've gained ample experience in app development for a wide range of industries, and making our solutions compliant with the specific requirements.
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                        {verticals.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`group relative flex h-[500px] flex-col items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-b ${v.color} p-6 text-white transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20`}
                                >
                                    {/* Icon Container - Moves much higher on hover to leave space */}
                                    <div className="flex flex-col items-center transition-all duration-500 group-hover:-translate-y-24">
                                        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-rose-500 shadow-xl">
                                            <Icon size={36} />
                                        </div>
                                        <h3 className="text-center text-xl font-black uppercase leading-tight md:text-2xl px-2">
                                            {v.label.split(' ').map((word, idx) => (
                                                <React.Fragment key={idx}>{word}<br /></React.Fragment>
                                            ))}
                                        </h3>
                                    </div>

                                    {/* Description Container - Fades in below the shifted title */}
                                    <div className="absolute bottom-8 left-0 right-0 px-8 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 text-center">
                                        <p className="mb-6 text-sm leading-relaxed opacity-90 font-medium line-clamp-4">
                                            {v.description}
                                        </p>
                                        <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold text-rose-500 hover:bg-rose-50 hover:scale-105 transition-all">
                                            Learn More <Zap size={12} />
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Cutting Edge Technologies */}
            <section className="bg-black py-0 text-center relative overflow-hidden">
                <div className="container mx-auto px-0 max-w-full">
                    <div className="bg-[#0c0d15] py-24 px-4">
                        <h2 className="mb-6 font-display text-4xl font-black md:text-6xl">Cutting Edge Technologies</h2>
                        <p className="mx-auto  max-w-3xl text-base md:text-lg text-white/60">
                            We offer advanced solutions to implement our clients' ideas, which require innovative technologies such as proximity and pressure sensors, augmented reality, and many more.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 min-h-[700px]">
                        {techItems.map((item, idx) => {
                            const Icon = item.icon;
                            // Custom sizing for specific grid placements to match reference
                            const isLarge = item.id === 'ibeacon' || item.id === 'appletv';
                            return (
                                <div
                                    key={item.id}
                                    className={`group relative flex items-center justify-center p-8 transition-all duration-500 ${item.color} ${isLarge ? 'md:col-span-2' : 'md:col-span-1'} min-h-[350px] overflow-hidden`}
                                >
                                    {/* Default View: Icon + Label */}
                                    <div className="flex flex-col items-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-90">
                                        <Icon size={isLarge ? 64 : 48} className="mb-6" />
                                        <h3 className={`${isLarge ? 'text-4xl' : 'text-2xl'} font-black uppercase text-center`}>
                                            {item.label}
                                        </h3>
                                    </div>

                                    {/* Hover View: Content Description */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto text-left">
                                        <div className="w-full max-w-md">
                                            <h3 className="mb-4 text-3xl font-black uppercase">{item.label}</h3>
                                            <p className="text-base md:text-lg leading-relaxed mb-8 opacity-90 font-medium whitespace-pre-wrap">
                                                {item.detail}
                                            </p>
                                            <button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest hover:translate-x-2 transition-transform">
                                                Read More
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/50">
                                                    <ArrowRight size={14} />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default WhatWeDo;
