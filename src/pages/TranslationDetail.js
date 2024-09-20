import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { translations } from '../data/translations';

const TranslationDetail = () => {
  const { id } = useParams();
  const translation = translations.find(t => t.id === parseInt(id));

  if (!translation) return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Překlad nenalezen</h1>
      <Link to="/all" className="text-blue-500 hover:underline">Zpět na seznam překladů</Link>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 text-white p-4">
          <h1 className="text-3xl font-bold">{translation.english}</h1>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Český překlad:</h2>
            <p className="text-lg">{translation.czech.join(', ')}</p>
            {translation.verb && (
              <p className="text-gray-600 mt-2">Slovesný tvar: {translation.verb.join(', ')}</p>
            )}
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Etymologie:</h2>
            <p className="text-gray-700">{translation.etymology}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Důvod/postup překladu:</h2>
            <p className="text-gray-700">{translation.reason}</p>
          </div>
          {translation.example && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Příklad použití:</h2>
              <p className="text-gray-700 italic">"{translation.example}"</p>
            </div>
          )}
        </div>
        <div className="bg-gray-100 p-4">
          <Link to="/all" className="text-blue-500 hover:underline">← Zpět na seznam překladů</Link>
        </div>
      </div>
    </div>
  );
};

export default TranslationDetail;