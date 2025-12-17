
import React, { useState } from 'react';
import { PageTransition } from '../components/Layout.tsx';
import { SectionHeader } from '../components/UI.tsx';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Linkedin, Github, Mail } from 'lucide-react';
import { portfolioData } from '../content/profile.ts';

export const Contact: React.FC = () => {
  const { profile } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Let's build something extraordinary together." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Channels</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Whether you have a specific project in mind, want to discuss research collaborations, or just want to say hi — my inbox is always open.
              </p>
              
              <div className="space-y-6">
                <a href={profile.socialLinks.email} className="flex items-center group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</p>
                    <p className="text-gray-900 dark:text-white font-medium">{profile.email}</p>
                  </div>
                </a>
                
                <a href={profile.socialLinks.linkedIn} className="flex items-center group">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Linkedin size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">LinkedIn</p>
                    <p className="text-gray-900 dark:text-white font-medium">Connect Profile</p>
                  </div>
                </a>

                <a href={profile.socialLinks.github} className="flex items-center group">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 group-hover:bg-gray-900 dark:group-hover:bg-white dark:group-hover:text-black group-hover:text-white transition-all">
                    <Github size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">GitHub</p>
                    <p className="text-gray-900 dark:text-white font-medium">Open Source Contributions</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 bg-gray-900 text-white rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Send size={120} />
              </div>
              <h4 className="text-xl font-bold mb-4 relative z-10">Current Location</h4>
              <p className="text-gray-400 text-sm relative z-10">{profile.location}</p>
              <div className="mt-8 flex items-center text-blue-400 text-sm font-bold relative z-10">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2" />
                Available for remote & hybrid roles
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-gray-800/50 p-8 sm:p-10 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-blue-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Your Name</label>
                    <input 
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1 flex items-center"><AlertCircle size={12} className="mr-1" /> {errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                    <input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1 flex items-center"><AlertCircle size={12} className="mr-1" /> {errors.email}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                  <input 
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Collaboration Opportunity"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                  <textarea 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1 flex items-center"><AlertCircle size={12} className="mr-1" /> {errors.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center transition-all disabled:opacity-50 shadow-lg shadow-blue-600/20"
                >
                  {status === 'submitting' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
