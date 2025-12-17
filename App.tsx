
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/Layout.tsx';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { Academics } from './pages/Academics.tsx';
import { Professional } from './pages/Professional.tsx';
import { Experience } from './pages/Experience.tsx';
import { Coop } from './pages/Coop.tsx';
import { Contact } from './pages/Contact.tsx';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/coop" element={<Coop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
};

export default App;
