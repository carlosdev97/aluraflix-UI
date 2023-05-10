import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Carousel from './components/Carousel/Carousel/Carousel';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<React.Fragment> <Banner /> <Carousel /> </React.Fragment>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;