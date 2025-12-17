
import React, { useState, useMemo } from 'react';
import { portfolioData } from '../content/profile.ts';
import { PageTransition } from '../components/Layout.tsx';
import { SectionHeader, Card, Tag, Badge } from '../components/UI.tsx';
import { Search, ExternalLink, Calendar, Users, FileText, Award } from 'lucide-react';
import { AcademicItemType } from '../types.ts';

export const Academics: React.FC = () => {
  const { academic } = portfolioData;
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<AcademicItemType | 'All'>('All');

  const filteredItems = useMemo(() => {
    return academic.publications.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.venue.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === 'All' || item.type === activeFilter;
      return matchesSearch && matchesFilter;
    }).sort((a, b) => b.year - a.year);
  }, [searchTerm, activeFilter, academic.publications]);

  const filterOptions: ('All' | AcademicItemType)[] = [
    'All',
    AcademicItemType.PUBLICATION,
    AcademicItemType.PATENT,
    AcademicItemType.TALK,
    AcademicItemType.POSTER
  ];

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader 
          title="Academic Achievements" 
          subtitle="Research publications, patents, and contributions to the scientific community." 
        />

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search by title, author, or venue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white shadow-sm"
            />
          </div>
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 scrollbar-hide">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`whitespace-nowrap px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeFilter === opt 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <Card key={item.id} className="group">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant={item.type === AcademicItemType.PUBLICATION ? 'success' : 'default'}>
                        {item.type}
                      </Badge>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Users size={16} className="mt-1 flex-shrink-0" />
                      <span>{item.authors}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <FileText size={16} className="mt-1 flex-shrink-0" />
                      <span className="font-semibold italic">{item.venue}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-all border border-gray-100 dark:border-gray-700"
                        title="View Publication"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {item.doi && (
                      <div className="text-[10px] text-gray-400 font-mono tracking-tighter">
                        DOI: {item.doi}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-500 dark:text-gray-400">No matching publications found.</p>
            </div>
          )}
        </div>

        {/* Other Academic Sections */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="mr-3 text-blue-500" />
              Patents
            </h3>
            <div className="space-y-6">
              {academic.patents.map((p, i) => (
                <div key={i} className="p-6 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl">
                  <Badge variant="warning">{p.status}</Badge>
                  <h4 className="font-bold text-gray-900 dark:text-white mt-3 mb-1">{p.title}</h4>
                  <p className="text-xs text-gray-500">{p.number} • {p.year}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="mr-3 text-blue-500" />
              Awards
            </h3>
            <div className="space-y-6">
              {academic.awards.map((a, i) => (
                <div key={i} className="p-6 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900 dark:text-white">{a.name}</h4>
                    <span className="text-xs font-bold text-blue-600">{a.year}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{a.org}</p>
                  <p className="text-sm mt-3 text-gray-600 dark:text-gray-300">{a.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
