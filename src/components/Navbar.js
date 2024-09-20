import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-gray-800">Česká Wiki Překladů</Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-800 hover:text-blue-600">Domů</Link>
            <Link to="/all" className="text-gray-800 hover:text-blue-600">Všechna slova</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
