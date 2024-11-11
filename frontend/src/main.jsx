import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { Login } from './components/Login';
import Layout from './layout/Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login /> */}
    <Layout />
  </React.StrictMode>
);
