import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code, Users, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "MERN-Stack Developer",
      company: "softworldit.com",
      location: "Dhaka, Bangladesh",
      period: "2022 - Present",
      type: "REMOTE",
      description:
        "Building and maintaining scalable full-stack web applications with modern technologies and frameworks.",
      responsibilities: [
        "Developed and deployed full-stack applications using Next.js, Node.js, Express, and MongoDB",
        "Implemented RESTful APIs and optimized database queries with Mongoose and PostgreSQL",
        "Designed responsive and user-friendly UIs with Ant Design, Material UI, Shadcn, DaisyUI, and NextUI",
        "Integrated Redux for state management and TypeScript for type safety in large-scale projects",
        "Collaborated with cross-functional teams to define technical requirements and deliver solutions",
        "Mentored junior developers, performed code reviews, and ensured best practices",
      ],
      technologies: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "PostgreSQL",
        "Redux",
        "RESTful APIs",
        "Ant Design",
        "Material UI",
        "Shadcn",
        "DaisyUI",
        "NextUI",
      ],
      achievements: [
        "Improved API performance by 45% through query optimization",
        "Delivered 5+ full-stack applications with seamless frontend-backend integration",
        "Reduced development time by introducing reusable UI components across projects",
      ],
    },
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: [
        "JavaScript (ES6+)",
        "TypeScript",
      ],
    },
    {
      category: "Frontend Development",
      items: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "Redux",
        "Tailwind CSS",
        "Bootstrap",
        "SCSS",
        "Material UI",
        "Ant Design",
        "Next UI",
        "ShadCN",
        "Material Tailwind",
        "DaisyUI",
      ],
    },
    {
      category: "Backend Development",
      items: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "MongoDB",
        "Mongoose",
        "PostgreSQL",
        "Prisma",
        "Firebase",
        "Socket.io",
        "JWT",
        "RESTful APIs",
      ],
    },
    {
      category: "Concepts & Architecture",
      items: [
        "Full Stack Development",
        "SPA (Single Page Applications)",
        "Microservices",
        "API Development",
        "Async & Concurrency",
        "Design Patterns",
        "Distributed Systems",
        "Authentication",
        "Problem Solving",
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Git",
        "GitHub",
        "Docker",
        "Vercel",
        "Netlify",
        "CI/CD",
        "Hosting/Deployment",
        "CPanel",
        "Jest",
        "Axios",
      ],
    },
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
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="text-6xl mb-6"
          >
            💼
          </motion.div>
          <h1 className="text-5xl font-bold mb-4">Experience</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and the impact I've made in various roles across different
            organizations.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 to-purple-400"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute -left-10 top-8 w-4 h-4 bg-pink-400 rounded-full border-4 border-gray-900"
                />

                <motion.div
                  whileHover={{ scale: 1.01, y: -5 }}
                  className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-pink-400 mb-2">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-400 mb-2">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span className="bg-pink-500 bg-opacity-20 text-pink-400 px-3 py-1 rounded-full text-sm">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{exp.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-pink-400 mb-3 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-gray-400 text-sm flex items-start"
                          >
                            <span className="text-yellow-400 mr-2 mt-1">•</span>
                            {resp}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-pink-400 mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-2" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-pink-400 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-gray-400 text-sm flex items-start"
                          >
                            <span className="text-green-400 mr-2 mt-1">✓</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-750 transition-all duration-300"
              >
                <h3 className="font-semibold text-pink-400 mb-4 text-lg">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: "#ec4899" }}
                      className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300 hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Experience;