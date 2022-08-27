import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
//import React from 'react';
//import { Container, Navbar, NavbarBrand } from 'reactstrap';
//import NucampLogo from './app/assets/img/logo.png';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
      <div className='App'>
          <Header />
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='contact' element={<ContactPage />} />
              <Route path='directory' element={<CampsitesDirectoryPage />} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;