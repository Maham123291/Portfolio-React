import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Project from './components/Project';
import Contactus from './components/Contactus';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
