import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App.jsx';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';  
import 'primeicons/primeicons.css';  
import 'primeflex/primeflex.css';  
import './index.css';
import 'rsuite/dist/rsuite-no-reset.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
