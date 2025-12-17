
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../content/profile.ts';

interface LayoutProps {
  children: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Professional', path: '/professional' },
    { name: 'Experience', path: '/experience' },
    { name: 'Co-op', path: '/coop' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {portfolioData.profile.fullName.split(' ')[0]}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <FileText size={14} />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-lg text-base font-medium transition-colors ${isActive
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-3 text-center bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg text-sm font-semibold"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer: React.FC = () => {
  const { profile } = portfolioData;
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {profile.fullName}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-sm">
              {profile.shortBio}
            </p>
          </div>
          <div className="flex justify-end space-x-6">
            {profile.socialLinks.github && (
              <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Github size={20} />
              </a>
            )}
            {profile.socialLinks.linkedIn && (
              <a href={profile.socialLinks.linkedIn} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            )}
            {profile.socialLinks.email && (
              <a href={profile.socialLinks.email} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-xs">
            © {new Date().getFullYear()} {profile.fullName}. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
