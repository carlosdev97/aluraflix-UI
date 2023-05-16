import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Carousel from './components/Carousel/Carousel/Carousel';
import AddVideo from './components/Add/AddVideo/AddVideo';
import EditVideo from './components/Edit/EditVideo/EditVideo';
import Footer from './components/Footer/Footer';
import { search } from './api/api';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const url = '/';
  const urlVideos = '/videos';
  const urlCategories = '/categorias';
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    search(urlVideos, setVideos)
    search(urlCategories, setCategories)
  }, [url])


  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<React.Fragment> <Banner /> <Carousel videos={ videos } /> </React.Fragment>} />
        <Route path='/addvideo' element={ <AddVideo categories={ categories.map((categorie) => categorie.nombre) } /> } />
        <Route path='/editvideo' element={ <EditVideo videos={ videos }/> } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;