import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar.jsx'
import Header from './components/header.jsx'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div>
      <NavbarComponent></NavbarComponent>
      <Header></Header>
      <h1 class='texto'>Publicações</h1>
      <App></App>
   </div>
)