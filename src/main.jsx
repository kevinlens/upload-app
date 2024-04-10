import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
// import "primereact/resources/themes/vela-green/theme.css"; //theme
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; //flex
import './index.css';
import 'rsuite/dist/rsuite-no-reset.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
