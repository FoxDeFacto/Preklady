import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../data/translations';

const Home = () => {
  const popularTranslations = translations.slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Vítejte ve Slovníku Novočeštiny</h1>
        <p className="text-xl mb-8 text-center text-gray-600">
          Objevte české ekvivalenty pro moderní anglické výrazy, které zatím nemají ustálený překlad.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Výběr slov:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularTranslations.map(translation => (
              <Link 
                key={translation.id} 
                to={`/detail/${translation.id}`} 
                className="block p-4 border border-gray-200 rounded hover:bg-blue-50 transition duration-300"
              >
                <span className="font-semibold text-lg">{translation.english}</span>
                <span className="block text-gray-600">{translation.czech[0]}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link 
            to="/all" 
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Zobrazit všechna slova
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;