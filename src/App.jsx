import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Carousel from './components/Carousel/Carousel/Carousel';
import AddVideo from './components/Add/AddVideo/AddVideo';
import Footer from './components/Footer/Footer';
import { search } from './api/api';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const url = '/videos';
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    search(url, setVideos)
  }, [url])


  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<React.Fragment> <Banner /> <Carousel videos={ videos } /> </React.Fragment>} />
        <Route path='/addvideo' element={ <AddVideo /> } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;