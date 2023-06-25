import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './others/ScrollToTop';
import { FilterProvider } from './context/index';
import './index.css';
import './Style/master.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <ScrollToTop/>
        <App/>
      </FilterProvider>
    </Router>
  </React.StrictMode>
);

