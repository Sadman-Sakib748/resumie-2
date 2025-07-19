import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
    Github,
    Linkedin,
    Twitter,
    Instagram,
    Download,
    ArrowDown,
} from "lucide-react";
import { Link } from "react-router"; // FIXED
import Navigation from "../Navigation";

// ================== Helper Components ==================

/* Animated Name Component */
const AnimatedName = ({ text }) => {
    const letters = text.split("");
    return (
        <motion.h1
            className="text-5xl lg:text-7xl font-bold leading-tight gradient-name shine relative inline-block"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
            }}
        >
            {letters.map((ch, i) => (
                <motion.span
                    key={i + ch}
                    className="inline-block"
                    variants={{
                        hidden: { opacity: 0, y: 40, rotateX: -90 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            transition: { type: "spring", stiffness: 500, damping: 30 },
                        },
                    }}
                    whileHover={{
                        y: -6,
                        scale: 1.15,
                        rotate: 3,
                        transition: { type: "spring", stiffness: 400, damping: 12 },
                    }}
                >
                    {ch === " " ? "\u00A0" : ch}
                </motion.span>
            ))}
        </motion.h1>
    );
};

/* Pure React Typewriter */
const Typewriter = ({
    words = [],
    typeSpeed = 90,
    deleteSpeed = 45,
    delayBetween = 1400,
}) => {
    const [index, setIndex] = useState(0); // which word
    const [subIndex, setSubIndex] = useState(0); // char pos
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (!words.length) return;
        if (!deleting && subIndex === words[index].length) {
            const timeout = setTimeout(() => setDeleting(true), delayBetween);
            return () => clearTimeout(timeout);
        }
        if (deleting && subIndex === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (deleting ? -1 : 1));
        }, deleting ? deleteSpeed : typeSpeed);
        return () => clearTimeout(timeout);
    }, [subIndex, deleting, index, words, typeSpeed, deleteSpeed, delayBetween]);

    return <span>{words[index].substring(0, subIndex)}</span>;
};

// ================== Main Component ==================

const Home = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const floatingDots = [
        { top: "30%", left: "25%", color: "bg-pink-400" },
        { top: "55%", left: "70%", color: "bg-purple-400" },
        { top: "40%", left: "60%", color: "bg-pink-400" },
        { top: "65%", left: "35%", color: "bg-purple-400" },
        { top: "50%", left: "15%", color: "bg-pink-400" },
    ];

    // Loading state
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (API/image preload)
        const timer = setTimeout(() => setIsLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-gray-900 md:mt-13 mt-16 text-white overflow-hidden relative"
        >
            <Navigation />

            {/* ================== LOADING OVERLAY ================== */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="loader"
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-900"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <motion.div
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 160, damping: 20 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <div className="loader-ring" />
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                                className="text-3xl md:text-4xl font-bold gradient-name shine relative"
                            >
                                {"Loading Sakib Portfolio".split("").map((ch, i) => (
                                    <motion.span
                                        key={i}
                                        className="inline-block"
                                        variants={{
                                            hidden: { opacity: 0, y: 30, scale: 0.8 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                transition: { type: "spring", stiffness: 400, damping: 28 },
                                            },
                                        }}
                                    >
                                        {ch === " " ? "\u00A0" : ch}
                                    </motion.span>
                                ))}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.6 }}
                                transition={{ repeat: Infinity, duration: 1.2, repeatType: "reverse" }}
                                className="uppercase tracking-widest text-xs text-pink-300"
                            >
                                Preparing Experience...
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ================== MAIN CONTENT (Hidden while loading) ================== */}
            <motion.section
                style={{ y, opacity }}
                className={`min-h-screen max-w-7xl mx-auto flex items-center justify-between px-6 transition-opacity duration-700 ${isLoading ? "opacity-0 pointer-events-none select-none" : "opacity-100"
                    }`}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: isLoading ? -100 : 0, opacity: isLoading ? 0 : 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: isLoading ? 0 : 0.1 }}
                        className="space-y-6"
                    >
                        {/* Animated Name */}
                        <AnimatedName text="Sadman Sakib" />

                        {/* Typewriter Titles */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-2xl lg:text-3xl font-medium"
                        >
                            I'm{" "}
                            <span className="text-pink-400 font-semibold">
                                <Typewriter
                                    words={[
                                        "Web Developer",
                                        "Frontend Engineer",
                                        "MERN Stack Developer",
                                        "Open Source Contributor",
                                    ]}
                                    typeSpeed={85}
                                    deleteSpeed={45}
                                    delayBetween={1400}
                                />
                            </span>
                            <span className="type-cursor" />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="text-gray-400 text-lg max-w-md"
                        >
                            Focused on providing programming excellence with modern
                            technologies and innovative solutions.
                        </motion.p>

                        {/* Social Icons */}
                        <motion.div
                            className="flex space-x-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                        >
                            {[
                                { Icon: Github, href: "https://github.com/shakilahmedatik" },
                                { Icon: Linkedin, href: "#" },
                                { Icon: Twitter, href: "#" },
                                { Icon: Instagram, href: "#" },
                            ].map(({ Icon, href }, idx) => (
                                <motion.a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
                            transition={{ delay: 1.1, duration: 0.8 }}
                            className="flex space-x-4"
                        >
                            <a
                                href="https://drive.google.com/file/d/1zQ2X6ZG0s-6vIzh04wAjXYat_hsMLQhX/view?usp=sharing"
                                download
                                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 group transition-all duration-300"
                            >
                                <Download className="w-5 h-5 group-hover:animate-bounce" />
                                <span>Download Resume</span>
                            </a>
                            <Link to="/projects">
                                <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-8 py-3 rounded-lg font-semibold bg-transparent transition-all duration-300">
                                    View Projects
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: isLoading ? 100 : 0, opacity: isLoading ? 0 : 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="relative md:ml-[200px]"
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 2, -2, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative z-10"
                        >
                            <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                                <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="text-6xl"
                                    >
                                         <img src="https://i.ibb.co/N6Kg0tjv/480333197-645221228030124-8691638388967413239-n.jpg" alt="" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {floatingDots.map((dot, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    x: [0, 15, -10, 0],
                                    y: [0, -12, 8, 0],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 4 + i,
                                    repeat: Infinity,
                                    delay: i * 0.4,
                                    ease: "easeInOut",
                                }}
                                className={`absolute w-4 h-4 rounded-full ${dot.color}`}
                                style={{ top: dot.top, left: dot.left }}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Scroll Indicator */}
            {!isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center space-y-2 text-gray-400"
                    >
                        <span className="text-sm">Scroll to explore</span>
                        <ArrowDown className="w-5 h-5" />
                    </motion.div>
                </motion.div>
            )}

            {/* Quick Overview */}
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: isLoading ? 0 : 1, y: isLoading ? 100 : 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="py-20 px-6"
            >
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl font-bold mb-12"
                    >
                        What I Do
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Mobile Development",
                                description:
                                    "Creating beautiful and functional mobile apps using Flutter and React Native",
                                icon: "📱",
                                link: "/experienc",
                            },
                            {
                                title: "Web Development",
                                description:
                                    "Building responsive and modern web applications with React and Node.js",
                                icon: "💻",
                                link: "/projects",
                            },
                            {
                                title: "Data Science",
                                description:
                                    "Analyzing data and building ML models using Python and modern frameworks",
                                icon: "📊",
                                link: "/education",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{
                                    opacity: isLoading ? 0 : 1,
                                    y: isLoading ? 50 : 0,
                                }}
                                transition={{ delay: index * 0.2 + 0.3 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-all duration-300 cursor-pointer"
                            >
                                <Link to={item.link}>
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-semibold mb-4 text-pink-400">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;
