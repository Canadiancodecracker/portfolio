
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Briefcase, Award } from 'lucide-react';
import { portfolioData } from '../content/profile.ts';
import { PageTransition } from '../components/Layout.tsx';

const Hero: React.FC = () => {
  const { profile } = portfolioData;
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide uppercase mb-6">
                Available for New Collaborations
              </span>
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">{profile.fullName}</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                {profile.shortBio}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/experience" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center group transition-all shadow-lg shadow-blue-600/20"
              >
                View Experience
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-blue-500 rounded-2xl font-bold transition-all shadow-sm"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <img 
                src={profile.avatarUrl || "https://picsum.photos/500/500"} 
                alt={profile.fullName}
                className="relative rounded-3xl w-72 h-72 sm:w-96 sm:h-96 object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const QuickHighlights: React.FC = () => {
  const items = [
    { icon: <BookOpen className="text-blue-500" />, label: "Academic Research", count: portfolioData.academic.publications.length, link: "/academics" },
    { icon: <Briefcase className="text-indigo-500" />, label: "Years Experience", count: "8+", link: "/experience" },
    { icon: <Award className="text-purple-500" />, label: "Global Awards", count: portfolioData.academic.awards.length + portfolioData.professional.awards.length, link: "/professional" },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <Link key={idx} to={item.link} className="block group">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 hover:border-blue-500/50 transition-all shadow-sm hover:shadow-xl">
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{item.count}</div>
                <div className="text-gray-500 dark:text-gray-400 font-medium">{item.label}</div>
              </div>
            </Link>
          ))}
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
    </PageTransition>
  );
};
