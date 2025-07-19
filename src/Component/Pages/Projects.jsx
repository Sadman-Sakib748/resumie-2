import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description:
        "A full-featured e-commerce mobile application built with Flutter and Firebase, featuring real-time inventory, payment integration, and user analytics.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Firebase", "Stripe", "Node.js", "MongoDB"],
      category: "Mobile App",
      status: "Completed",
      duration: "4 months",
      team: "5 developers",
      features: [
        "Real-time inventory management",
        "Secure payment processing",
        "Push notifications",
        "Analytics dashboard",
        "Multi-language support",
      ],
      metrics: { downloads: "10K+", rating: "4.8/5", users: "5K+ active" },
      links: { live: "#", github: "#" },
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "A comprehensive analytics dashboard with machine learning capabilities for business intelligence and data visualization.",
      image: "/placeholder.svg",
      technologies: ["React", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
      category: "Web App",
      status: "Completed",
      duration: "6 months",
      team: "3 developers",
      features: [
        "Predictive analytics",
        "Interactive data visualization",
        "Real-time data processing",
        "Custom report generation",
        "API integrations",
      ],
      metrics: { accuracy: "94%", performance: "2x faster", users: "500+ companies" },
      links: { live: "#", github: "#" },
    },
    {
      title: "Social Media Management Tool",
      description:
        "A comprehensive social media management platform for scheduling posts, analyzing engagement, and managing multiple accounts.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Express.js", "Redis", "AWS", "React Native"],
      category: "SaaS Platform",
      status: "In Progress",
      duration: "8 months",
      team: "7 developers",
      features: [
        "Multi-platform posting",
        "Engagement analytics",
        "Content calendar",
        "Team collaboration",
        "Automated responses",
      ],
      metrics: { posts: "1M+ scheduled", accounts: "50K+ managed", engagement: "+150%" },
      links: { live: "#", github: "#" },
    },
    {
      title: "Blockchain Voting System",
      description:
        "A secure and transparent voting system built on blockchain technology ensuring vote integrity and anonymity.",
      image: "/placeholder.svg",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      category: "Blockchain",
      status: "Completed",
      duration: "5 months",
      team: "4 developers",
      features: [
        "Immutable vote records",
        "Anonymous voting",
        "Real-time results",
        "Smart contract validation",
        "Audit trail",
      ],
      metrics: { votes: "100K+ cast", security: "Zero breaches", transparency: "100%" },
      links: { live: "#", github: "#" },
    },
    {
      title: "IoT Home Automation",
      description:
        "Smart home automation system with mobile app control, voice commands, and energy monitoring capabilities.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Arduino", "Raspberry Pi", "MQTT", "Firebase"],
      category: "IoT",
      status: "Completed",
      duration: "3 months",
      team: "2 developers",
      features: [
        "Voice control integration",
        "Energy monitoring",
        "Automated scheduling",
        "Security alerts",
        "Remote access",
      ],
      metrics: { devices: "50+ supported", energy: "30% savings", response: "<100ms" },
      links: { live: "#", github: "#" },
    },
    {
      title: "Learning Management System",
      description:
        "A comprehensive LMS platform for online education with video streaming, assessments, and progress tracking.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Redis", "AWS S3"],
      category: "Education",
      status: "Completed",
      duration: "7 months",
      team: "6 developers",
      features: [
        "Video streaming",
        "Interactive assessments",
        "Progress tracking",
        "Discussion forums",
        "Certificate generation",
      ],
      metrics: { students: "10K+ enrolled", courses: "500+ available", completion: "85% rate" },
      links: { live: "#", github: "#" },
    },
  ];

  const categories = [
    "All",
    "Mobile App",
    "Web App",
    "SaaS Platform",
    "Blockchain",
    "IoT",
    "Education",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
            🚀
          </motion.div>
            <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my work spanning mobile apps, web applications, and
            innovative solutions across various domains.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-pink-500 text-white shadow-lg shadow-pink-500/30"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-all duration-300 border border-gray-700/40"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-pink-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Meta */}
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{project.team}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={tech + i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {project.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-pink-400 mr-2">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="mb-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(project.metrics).map(([k, v]) => (
                      <div
                        key={k}
                        className="bg-gray-700/60 p-3 rounded-lg"
                      >
                        <div className="text-pink-400 font-bold text-sm">
                          {v}
                        </div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-wide">
                          {k}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => window.open(project.links.live, "_blank")}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                  <button
                    onClick={() => window.open(project.links.github, "_blank")}
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gray-800 rounded-2xl border border-gray-700/40"
        >
          <h2 className="text-3xl font-bold mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting
            projects. Let's create something amazing together!
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
