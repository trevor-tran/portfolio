// bootstrap must be the first import
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import SEO from "./components/SEO";
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <SEO
        title="Trevor Tran"
        description="Trevor Tran is a Software Engineer who is motivated to learn and grow, ready to make an impact"
        name="Trevor Tran"
        type="website" />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
