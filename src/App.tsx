import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SofaTradicional from './pages/SofaTradicional';
import SofaBarcelona from './pages/SofaBarcelona';
import SofaSobMedida from './pages/SofaSobMedida';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sofa-tradicional" element={<SofaTradicional />} />
          <Route path="/sofa-barcelona" element={<SofaBarcelona />} />
          <Route path="/sofa-sob-medida" element={<SofaSobMedida />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;