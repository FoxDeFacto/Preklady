import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllTranslations from './pages/AllTranslations';
import TranslationDetail from './pages/TranslationDetail';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/Preklady" element={<Home />} />
            <Route path="/Preklady/all" element={<AllTranslations />} />
            <Route path="/Preklady/detail/:id" element={<TranslationDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;