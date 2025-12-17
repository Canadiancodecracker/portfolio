
import React from 'react';
import { portfolioData } from '../content/profile.ts';
import { PageTransition } from '../components/Layout.tsx';
import { SectionHeader, Card, Badge } from '../components/UI.tsx';
import { Award, ShieldCheck, Calendar, ExternalLink } from 'lucide-react';

export const Professional: React.FC = () => {
  const { professional } = portfolioData;
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader 
          title="Professional Milestones" 
          subtitle="Certifications, industry recognition, and career achievements." 
        />

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <ShieldCheck className="mr-3 text-blue-500" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professional.certificates.map((cert, i) => (
              <Card key={i} className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="text-xs font-bold text-gray-400">{cert.year}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-tight">{cert.name}</h4>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">{cert.issuer}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">{cert.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-[10px] font-mono text-gray-400">{cert.credentialId}</span>
                  {cert.link && (
                    <a href={cert.link} className="text-xs font-bold text-blue-600 flex items-center hover:underline">
                      Verify <ExternalLink size={12} className="ml-1" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Award className="mr-3 text-blue-500" />
            Professional Awards
          </h3>
          <div className="space-y-6">
            {professional.awards.map((award, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 bg-gray-50 dark:bg-gray-800/30 rounded-3xl border border-gray-100 dark:border-gray-700">
                <div className="flex-shrink-0 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm text-yellow-500">
                  <Award size={32} />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{award.name}</h4>
                    <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded uppercase">{award.year}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">{award.org}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{award.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
