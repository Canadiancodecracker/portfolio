
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Briefcase, Award } from 'lucide-react';
import { portfolioData } from '../content/profile.ts';
import { PageTransition } from '../components/Layout.tsx';

const Hero: React.FC = () => {
  const { profile } = portfolioData;
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Dynamic Animated Background Blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div className="absolute top-0 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase">
                  Available for New Projects
                </span>
              </div>

              <h1 className="text-6xl sm:text-8xl font-black tracking-tighter text-gray-900 dark:text-white leading-[0.9]">
                Solving <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  Intelligent
                </span> <br />
                Puzzles.
              </h1>

              <p className="mt-8 text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed font-medium">
                I'm <span className="text-gray-900 dark:text-white font-bold">{profile.fullName}</span>. {profile.shortBio}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-wrap gap-5"
            >
              <Link
                to="/experience"
                className="px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-[2rem] font-bold flex items-center group transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-gray-900/20 dark:shadow-white/10"
              >
                Explore My Work
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/contact"
                className="px-10 py-5 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700/50 backdrop-blur-md rounded-[2rem] font-bold transition-all hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 shadow-sm"
              >
                Let's Talk
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative background for the image */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full blur-2xl opacity-20 animate-pulse" />

            <div className="relative z-10 group overflow-hidden rounded-[3rem]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src={profile.avatarUrl || "https://picsum.photos/500/500"}
                alt={profile.fullName}
                className="w-full aspect-square object-cover shadow-2xl transition-all duration-700 group-hover:scale-110"
              />
            </div>

            {/* Floating Tag */}
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 z-20 hidden sm:block"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Briefcase size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">Senior Architect</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">@ TechCorp Global</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CountUp: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = React.useState(0);
  const nodeRef = React.useRef(null);

  React.useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);

      // Easing function: easeOutExpo
      const easing = 1 - Math.pow(2, -10 * percentage);
      const currentCount = Math.floor(easing * end);

      setCount(currentCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

const QuickHighlights: React.FC = () => {
  const items = [
    {
      icon: <BookOpen />,
      label: "Academic Research",
      count: portfolioData.academic.publications.length,
      suffix: "",
      color: "blue",
      link: "/academics"
    },
    {
      icon: <Briefcase />,
      label: "Years Experience",
      count: 8,
      suffix: "+",
      color: "indigo",
      link: "/experience"
    },
    {
      icon: <Award />,
      label: "Global Awards",
      count: portfolioData.academic.awards.length + portfolioData.professional.awards.length,
      suffix: "",
      color: "purple",
      link: "/professional"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const colorMap: Record<string, string> = {
    blue: "text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/50",
    indigo: "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800/50",
    purple: "text-purple-600 bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800/50",
  };

  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-800/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {items.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link to={item.link} className="block group">
                <div className="relative h-full bg-white dark:bg-gray-800/40 backdrop-blur-sm p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Subtle hover background highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className={`p-4 rounded-2xl w-fit mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 border ${colorMap[item.color]}`}>
                      {React.cloneElement(item.icon as React.ReactElement, { size: 28, strokeWidth: 2 })}
                    </div>

                    <div className="text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                      <CountUp end={item.count} suffix={item.suffix} />
                    </div>

                    <div className="text-lg text-gray-500 dark:text-gray-400 font-semibold tracking-wide">
                      {item.label}
                    </div>

                    <div className="mt-6 flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Explore Details <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


const CoreExpertise: React.FC = () => {
  const skills = [
    { name: "Distributed Systems", level: 95, color: "blue" },
    { name: "Deep Learning", level: 90, color: "indigo" },
    { name: "Systems Architecture", level: 85, color: "purple" },
    { name: "Cloud Infrastructure", level: 88, color: "blue" },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
              Technical <span className="text-blue-600 dark:text-blue-400">Mastery</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Specialized in building high-performance systems and intelligent algorithms at scale.
            </p>
          </div>
          <Link to="/experience" className="text-blue-600 dark:text-blue-400 font-bold flex items-center hover:underline">
            View full roadmap <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900 dark:text-white">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color === 'blue' ? 'from-blue-500 to-blue-600' :
                        skill.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                          'from-purple-500 to-purple-600'
                      }`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {portfolioData.experiences[0].techTags.map((tag, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 flex items-center justify-center font-bold text-gray-700 dark:text-gray-300"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Home: React.FC = () => {
  return (
    <PageTransition>
      <Hero />
      <QuickHighlights />
      <CoreExpertise />
    </PageTransition>
  );
};

