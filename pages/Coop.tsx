
import React from 'react';
import { portfolioData } from '../content/profile.ts';
import { PageTransition } from '../components/Layout.tsx';
import { SectionHeader, TimelineItem, Tag } from '../components/UI.tsx';
import { GraduationCap } from 'lucide-react';

export const Coop: React.FC = () => {
  const { coopRoles } = portfolioData;
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader 
          title="Co-op Experience" 
          subtitle="Early career growth and academic internships." 
        />

        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-3xl p-8 mb-16 flex items-start gap-6">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm text-blue-600">
            <GraduationCap size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Academic Integration</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              These roles were completed as part of an integrated co-operative education program, combining classroom theory with practical, paid work experience.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {coopRoles.map((role) => (
            <TimelineItem 
              key={role.id}
              title={role.role}
              subtitle={role.company}
              period={role.period}
            >
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{role.location}</p>
              <ul className="space-y-3 mb-6">
                {role.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {role.techTags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
