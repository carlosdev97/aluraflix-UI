import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Carousel from './components/Carousel/Carousel/Carousel';
import AddVideo from './components/Add/AddVideo/AddVideo';
import AddCategory from './components/Add/AddCategory/AddCategory';
import Footer from './components/Footer/Footer';
import LinearProgress from '@mui/material/LinearProgress';
import { search } from './api/api';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const url = '/';
  const urlVideos = '/videos';
  const urlCategories = '/categorias';
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        await search(urlVideos, setVideos);
        await search(urlCategories, setCategories);
        setLoading(false);
      } catch (error) {
      }
    }
  
    fetchData();
  }, [url]);

  function updateData() {
    search(urlVideos, setVideos);
    search(urlCategories, setCategories);
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<React.Fragment> <Banner /> { loading ? <LinearProgress /> : <Carousel categories={ categories }videos={ videos }/>}</React.Fragment>} />
        <Route path='/addvideo' element={ <AddVideo categories={ categories } /> } />
        <Route path='/addcategory' element={ <AddCategory categories={ categories } updateData={updateData}/> } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;