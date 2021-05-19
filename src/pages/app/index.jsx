import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ResultsProvider } from '../../context/Results';

import './style.css';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Routes from '../../routes';

const App = () => (
  <ResultsProvider>
    <Router>
      <div className="app-container">
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  </ResultsProvider>
);

export default App;
