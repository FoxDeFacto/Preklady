import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../data/translations';

const ITEMS_PER_PAGE = 10;

const AllTranslations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  
  const filteredTranslations = useMemo(() => {
    return translations.filter(translation =>
      translation.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      translation.czech.some(word => word.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const pageCount = Math.ceil(filteredTranslations.length / ITEMS_PER_PAGE);
  const paginatedTranslations = filteredTranslations.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Všechny překlady</h1>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Hledat překlad..."
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);  // Reset to first page on new search
                }}
          />
        </div>
        <div className="grid gap-4">
          {paginatedTranslations.map(translation => (
            <Link 
              key={translation.id} 
              to={`/detail/${translation.id}`} 
              className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold text-lg">{translation.english}</span>
                  <span className="block text-gray-600">{translation.czech.join(', ')}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
        <br></br>
        <div className="flex justify-center space-x-2">
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default AllTranslations;