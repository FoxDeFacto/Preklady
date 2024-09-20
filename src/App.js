import React from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllTranslations from './pages/AllTranslations';
import TranslationDetail from './pages/TranslationDetail';

const App = () => {
  return (
    <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all" element={<AllTranslations />} />
              <Route path="/detail/:id" element={<TranslationDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </HashRouter>
  );
};

export default App;