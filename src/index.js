import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ScrollToTop />
        <ToastContainer position={'bottom-right'} autoClose={2000}/>
        <App/>
      </FilterProvider>
    </Router>
  </React.StrictMode>
);

