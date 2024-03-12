import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import CoverImage from './components/CoverImage';
import BookACar from './components/BookACar';
import AvailableCars from './components/AvailableCars';
import FinanceOptions from './components/FinanceOptions';
import Reviews from './components/Reviews'
import Contact from './components/Contact'

const coverImages = [
  '/images/cover-image-one.jpg',
  '/images/cover-image-two.jpg',
  '/images/cover-image-three.jpg'
];

const carImages = [
  '/cars/bmw-3-series.png',
  '/cars/bmw-5-series.png',
  '/cars/bmw-7-series.png',
  '/cars/bmw-m2.png',
  '/cars/bmw-x5.png',
  '/cars/bmw-x7.png'
];

function App() {
  const bookACar = useRef();

  const scrollToBookACar = () => {
    if (bookACar.current) {
      bookACar.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header />
      <CoverImage coverImages={coverImages} onScrollDown={scrollToBookACar} />
      <BookACar carImages={carImages} ref={bookACar} />
      <AvailableCars />
      <FinanceOptions />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
