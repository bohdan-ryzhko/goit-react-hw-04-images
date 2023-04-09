import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'components/App';
import { SearchContext } from 'components/SearchContext/SearchContext';
import { contextValue } from 'services/contextValue';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchContext.Provider value={contextValue}>
      <App />
    </SearchContext.Provider>
  </React.StrictMode>
);
