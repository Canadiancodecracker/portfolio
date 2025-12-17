
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = "" }) => (
  <div className={`mb-10 ${className}`}>
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-gray-600 dark:text-gray-400">
        {subtitle}
      </p>
    )}
    <div className="mt-4 h-1 w-20 bg-blue-600 rounded-full" />
  </div>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className={`bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all ${className}`}
  >
    {children}
  </motion.div>
);

export const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50">
    {children}
  </span>
);

export const Badge: React.FC<{ children: React.ReactNode; variant?: 'success' | 'warning' | 'default' }> = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${variants[variant]}`}>
      {children}
    </span>
  );
};

export const TimelineItem: React.FC<{ 
  title: string; 
  subtitle: string; 
  period: string; 
  children: React.ReactNode 
}> = ({ title, subtitle, period, children }) => (
  <div className="relative pl-8 pb-10 border-l-2 border-gray-200 dark:border-gray-800 last:pb-0">
    <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-blue-600 bg-white dark:bg-gray-900" />
    <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{period}</span>
    </div>
    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">{subtitle}</p>
    <div className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
      {children}
    </div>
  </div>
);
