// src/components/Footer.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [note, setNote] = useState('');

  useEffect(() => {
    // Zde můžete přidat logiku pro načítání vtipů z API nebo ze seznamu
    const notes = [
      "Nejoblíbenější ovoce Václava Jahody jsou borůvky",
      "Antonymum slova polytechnické je monotechnické",
      "Vokativ > Nominativ - teda většinou",
      "Dělat API v C/C++ je pro zdraví více škodlivé, než vykouřit 10 krabek denně"
    ];
    setNote(notes[Math.floor(Math.random() * notes.length)]);
  }, []);

  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">O projektu</h3>
            <p>Česká Wiki Překladů je můj malý projekt zaměřený na překlad moderních anglických výrazů do češtiny.</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Užitečné odkazy</h3>
            <ul>
              <li><Link to="/" className="text-blue-600 hover:underline">Domů</Link></li>
              <li><a href="https://slovnikcestiny.cz/uvod.php" className="text-blue-600 hover:underline">Slovník češtiny</a></li>
              <li><a href="https://github.com/FoxDeFacto" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub repozitář</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Poznámka</h3>
            <p className="italic">"{note}"</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Česká Wiki Překladů. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
};

export default Footer;