import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
} from "lucide-react";

export const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    location: "Dhaka, Bangladesh",
    period: "2020 - 2022",
    gpa: "3.85/4.00",
    description:
      "Specialized in Machine Learning and Data Science with focus on deep learning algorithms and neural networks.",
    achievements: ["Dean's List", "Research Assistant", "Published 2 papers"],
    courses: [
      "Advanced Algorithms",
      "Machine Learning",
      "Data Mining",
      "Computer Vision",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "National University",
    location: "Dhaka, Bangladesh",
    period: "2016 - 2020",
    gpa: "3.72/4.00",
    description:
      "Strong foundation in computer science fundamentals with emphasis on software engineering and programming.",
    achievements: [
      "Magna Cum Laude",
      "Programming Contest Winner",
      "Student Council Member",
    ],
    courses: [
      "Data Structures",
      "Software Engineering",
      "Database Systems",
      "Web Development",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka College",
    location: "Dhaka, Bangladesh",
    period: "2014 - 2016",
    gpa: "5.00/5.00",
    description:
      "Science background with mathematics, physics, and chemistry as major subjects.",
    achievements: ["Board Scholarship", "Science Olympiad Winner"],
    courses: ["Mathematics", "Physics", "Chemistry", "Biology"],
  },
];

export const certifications = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "2023", icon: "☁️" },
  { name: "Google Cloud Professional Developer", issuer: "Google Cloud", date: "2023", icon: "🌐" },
  { name: "Meta React Native Specialist", issuer: "Meta", date: "2022", icon: "📱" },
  { name: "TensorFlow Developer Certificate", issuer: "TensorFlow", date: "2022", icon: "🤖" },
];

// ===== Motion Variants =====
const fadeUp = (delay = 0, y = 40) => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: "easeOut" } },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay } },
});

// ===== Component =====
const Education = () => {
  return (
    <div className="min-h-screen mt-10 bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div
            aria-hidden="true"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 1 }}
            className="text-6xl mb-6"
          >
            🎓
          </motion.div>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Education</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My academic journey and continuous learning path in technology and computer science.
          </p>
        </motion.header>

        {/* Education Timeline */}
        <section aria-label="Academic Background" className="mb-20">
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Academic Background
          </motion.h2>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 via-pink-500/60 to-purple-500" />

            {educationData.map((edu, index) => (
              <motion.article
                key={edu.degree + index}
                variants={fadeUp(index * 0.15, 60)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline Dot */}
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className="absolute -left-10 top-6 w-4 h-4 bg-pink-400 rounded-full border-4 border-gray-900 shadow-[0_0_0_4px_rgba(236,72,153,0.25)]"
                  aria-hidden="true"
                />

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-gray-800/90 backdrop-blur rounded-2xl p-8 border border-gray-700/40 hover:border-pink-400/40 transition-all duration-300 shadow-lg hover:shadow-pink-500/10"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-pink-400 mb-2 leading-snug">
                        {edu.degree}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-400 mb-2 text-sm md:text-base">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" /> {edu.institution}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {edu.location}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-400 text-sm md:text-base">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" /> {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="w-4 h-4" /> GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-pink-400 mb-3 flex items-center text-sm md:text-base tracking-wide">
                        <Award className="w-4 h-4 mr-2" /> Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={achievement + i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="text-gray-400 flex items-start gap-2 text-sm md:text-base"
                          >
                            <span className="text-yellow-400" aria-hidden="true">
                              ⭐
                            </span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Courses */}
                    <div>
                      <h4 className="font-semibold text-pink-400 mb-3 flex items-center text-sm md:text-base tracking-wide">
                        <BookOpen className="w-4 h-4 mr-2" /> Key Courses
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <motion.span
                            key={course + i}
                            variants={scaleIn(i * 0.05)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.08 }}
                            className="bg-gray-700/70 px-3 py-1 rounded-full text-xs md:text-sm text-gray-300 border border-gray-600/50 hover:border-pink-400/40 transition-colors"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section aria-label="Certifications">
          <motion.h2
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Certifications
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name + index}
                variants={fadeUp(index * 0.12, 30)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-800/90 backdrop-blur p-6 rounded-2xl text-center border border-gray-700/40 hover:border-pink-400/40 transition-all duration-300 shadow hover:shadow-pink-500/10"
              >
                <motion.div
                  aria-hidden="true"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="text-4xl mb-4 select-none"
                >
                  {cert.icon}
                </motion.div>
                <h3 className="font-semibold text-pink-400 mb-2 leading-snug text-sm md:text-base">
                  {cert.name}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs md:text-sm">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
