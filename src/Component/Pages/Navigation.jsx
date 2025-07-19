import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router"; // fixed

const navItems = [
    { name: "Home", to: "/" },
    { name: "Education", to: "/education" },
    { name: "Experience", to: "/experience" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 text-gray-200"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold">
                    <Link to="/">{`< Sakib />`}</Link>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
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
                                    className={`relative px-3 py-2 transition-colors ${active
                                            ? "text-pink-400"
                                            : "hover:text-pink-400 text-gray-300"
                                        }`}
                                >
                                    {item.name}
                                    {active && (
                                        <motion.span
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400 rounded-full"
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile Menu Toggle */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen((o) => !o)}
                    aria-label="Toggle navigation menu"
                    className="md:hidden p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="mobile"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700"
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navItems.map((item, index) => {
                                const active = currentPath === item.to;
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ x: -40, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.05 + index * 0.06 }}
                                    >
                                        <Link
                                            to={item.to}
                                            className={`block px-3 py-2 rounded-lg transition-colors ${active
                                                    ? "text-pink-400 bg-gray-700"
                                                    : "text-gray-300 hover:text-pink-400 hover:bg-gray-700"
                                                }`}
                                        >
                                            {item.name}
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
