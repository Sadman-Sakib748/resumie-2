import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";

const navItems = [
    { name: "Home", to: "/" },
    { name: "Education", to: "/education" },
    { name: "Experience", to: "/experience" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Add scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? "bg-gray-900/95 border-b border-gray-800" : "bg-gray-900/80"} backdrop-blur-md transition-all duration-300 text-gray-200`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className="text-xl font-bold"
                >
                    <Link to="/" className="block px-2 py-1">{`<Sakib />`}</Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                    {navItems.map((item, index) => {
                        const active = currentPath === item.to;
                        return (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 + index * 0.07 }}
                                className="relative"
                            >
                                <Link
                                    to={item.to}
                                    className={`relative px-4 py-2 text-sm transition-colors ${active
                                            ? "text-pink-400"
                                            : "hover:text-pink-400 text-gray-300"
                                        }`}
                                >
                                    {item.name}
                                    {active && (
                                        <motion.span
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-pink-400 rounded-full"
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                    className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                    {isOpen ? (
                        <X className="w-5 h-5" />
                    ) : (
                        <Menu className="w-5 h-5" />
                    )}
                </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-nav"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-gray-800/95 backdrop-blur-lg border-t border-gray-700"
                    >
                        <div className="px-4 py-3 space-y-1">
                            {navItems.map((item, index) => {
                                const active = currentPath === item.to;
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ 
                                            delay: 0.05 + index * 0.05,
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20
                                        }}
                                    >
                                        <Link
                                            to={item.to}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-3 rounded-md text-base transition-colors ${active
                                                    ? "text-pink-400 bg-gray-700/50"
                                                    : "text-gray-300 hover:text-pink-400 hover:bg-gray-700/30"
                                                }`}
                                        >
                                            {item.name}
                                            {active && (
                                                <motion.span
                                                    layoutId="mobileActiveTab"
                                                    className="block mt-1 w-6 h-0.5 bg-pink-400 rounded-full"
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navigation;