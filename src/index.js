import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ScrollToTop } from './others/ScrollToTop';
import { FilterProvider, WishProvider, CartProvider} from './context/index';
import './index.css';
import './Style/master.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <WishProvider>
            <ScrollToTop />
            <ToastContainer  
              position= {"bottom-right"}  
              autoClose= {2000} 
              hideProgressBar= {true}
              closeOnClick= {false}
              pauseOnHover= {true}
              draggable= {true}
              progress= {undefined}
              theme= {"light"}
            />
            <App/>
          </WishProvider>
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);

