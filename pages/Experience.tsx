
import React, { useState } from 'react';
import { portfolioData } from '../content/profile.ts';
import { PageTransition } from '../components/Layout.tsx';
import { SectionHeader, TimelineItem, Tag, Badge } from '../components/UI.tsx';
import { Briefcase, MapPin, ExternalLink, Filter } from 'lucide-react';
import { ExperienceType } from '../types.ts';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;
  const [filter, setFilter] = useState<ExperienceType | 'All'>('All');

  const filtered = experiences.filter(exp => filter === 'All' || exp.type === filter);

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader 
          title="Work Experience" 
          subtitle="A history of building, leading, and innovating in tech." 
        />

        <div className="flex items-center gap-4 mb-16 overflow-x-auto pb-4 scrollbar-hide">
          <Filter className="text-gray-400 flex-shrink-0" size={18} />
          {['All', ...Object.values(ExperienceType)].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap border transition-all ${
                filter === type 
                ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-500'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="relative">
          {filtered.length > 0 ? (
            filtered.map((exp) => (
              <TimelineItem 
                key={exp.id}
                title={exp.role}
                subtitle={exp.company}
                period={exp.period}
              >
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-400 mb-6">
                  <div className="flex items-center">
                    <MapPin size={12} className="mr-1" />
                    {exp.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase size={12} className="mr-1" />
                    {exp.type}
                  </div>
                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center hover:underline">
                      Website <ExternalLink size={12} className="ml-1" />
                    </a>
                  )}
                </div>
                
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.techTags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </TimelineItem>
            ))
          ) : (
            <p className="text-center text-gray-500 py-10">No experience found for this category.</p>
          )}
        </div>
      </div>
    </PageTransition>
  );
};
