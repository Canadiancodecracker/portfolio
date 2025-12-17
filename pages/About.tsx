
import React from 'react';
import { portfolioData } from '../content/profile.ts';
import { PageTransition } from '../components/Layout.tsx';
import { SectionHeader, Tag } from '../components/UI.tsx';
import { MapPin, Mail, Globe, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const { profile, academic } = portfolioData;
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader 
          title="About Me" 
          subtitle="My journey, philosophy, and expertise." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <Sparkles className="mr-2 text-blue-500" size={24} />
              The Narrative
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {profile.longBio}
            </p>
            
            <div className="pt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {academic.researchInterests.map((interest, i) => (
                  <Tag key={i}>{interest}</Tag>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Details</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-3 text-blue-500 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{profile.location}</span>
                </li>
                <li className="flex items-start">
                  <Mail className="mr-3 text-blue-500 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-600 dark:text-gray-300 break-all">{profile.email}</span>
                </li>
                <li className="flex items-start">
                  <Globe className="mr-3 text-blue-500 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Open for Worldwide Work</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white">
              <h4 className="font-bold text-lg mb-2">Want to collaborate?</h4>
              <p className="text-blue-100 text-sm mb-6">I'm always looking for interesting projects in the AI and Systems space.</p>
              <a href="mailto:alex.sterling@example.com" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors">
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
