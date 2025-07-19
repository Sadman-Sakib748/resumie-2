import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    Twitter,
    Instagram
} from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
    const SERVICE_ID = "service_3pqmbuh";
    const TEMPLATE_ID = "template_c9ozus8";
    const PUBLIC_KEY = "-KlgDyeN2DcGB3PGO";

    const form = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!form.current) return;

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all required fields!");
            return;
        }

        setIsSubmitting(true);

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                toast.success("Message Sent! Thank you for reaching out!");
                form.current.reset();
                setFormData({ name: "", email: "", subject: "", message: "" });
            })
            .catch((err) => {
                console.error("EmailJS Error:", err);
                toast.error("Oops! Something went wrong. Please try again later.");
            })
            .finally(() => setIsSubmitting(false));
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "sadman.sakib34523@gmail.com",
            link: "mailto:shakil.atik@example.com"
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+8801703104167",
            link: "tel:+8801703104167"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Tangail, Dhaka, Bangladesh",
            link: "#"
        }
    ];

    const socialLinks = [
        { icon: Github, href: "https://github.com/Sadman-Sakib748" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/sadman-sakib-442804372/" },
        { icon: Twitter, href: "https://x.com/Sadmansakib6163" },
        { icon: Instagram, href: "https://www.instagram.com/sakib1223123/" }
    ];

    return (
        <div className="min-h-screen mt-10 bg-gray-900 text-white px-6 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        className="text-6xl mb-6"
                    >
                        📧
                    </motion.div>
                    <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                            <p className="text-gray-400 mb-8">
                                I'm always interested in hearing about new opportunities.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        className="p-3 bg-pink-500 bg-opacity-20 rounded-full"
                                    >
                                        <info.icon className="w-6 h-6 text-pink-400" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-semibold text-white">{info.title}</h3>
                                        <a
                                            href={info.link}
                                            className="text-gray-400 hover:text-pink-400 transition-colors"
                                        >
                                            {info.value}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-gray-800 rounded-full hover:text-pink-400 transition-all duration-300"
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Status */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="p-6 bg-purple-500 bg-opacity-40 border border-green-500 border-opacity-20 rounded-lg"
                        >
                            <div className="flex items-center space-x-3">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-3 h-3 bg-green-400 rounded-full"
                                />
                                <div>
                                    <h3 className="font-semibold text-black-400">Available for Work</h3>
                                    <p className="text-gray-400 text-sm">
                                        Currently accepting new projects
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-22"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent text-white placeholder-gray-400"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent text-white placeholder-gray-400"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>


                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent text-white placeholder-gray-400 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
