import React, { useState } from 'react';
import './slider.css'; // Import your CSS styles
import a from '../LOGO/a.jpg'
import b from '../LOGO/b.jpg'
import c from '../LOGO/c.jpg'
import d from '../LOGO/d.jpg'
import e from '../LOGO/e.jpg'
import f from '../LOGO/f.jpg'
import g from '../LOGO/g.jpg'

const SimpleSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: a,
      caption: 'Karakoram Highway Tours',
    },
    {
      image: b,
      caption: 'Lahore City Tours',
    },
    {
      image: c,
      caption: 'Northern Mountain Tours',
    },
    {
      image: d,
      caption: 'Sikh Yatra Tours',
    },
    {
      image: e,
      caption: 'South Punjab Tours',
    },
    {
      image: f,
      caption: 'Explore Pakistan Tours',
    },
    {
      image: g,
      caption: 'Hunza Valley Tours',
    }
    // Add more image URLs and captions as needed
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <h1 className='amz'>Unveiling Pakistan's Beauty Through Travel</h1>
      <div className="slider-container">

        <button onClick={prevSlide} className="slider-button">
          &lt;
        </button>
        <div className="slide-content">
          <img src={slides[currentSlide].image} alt={`Slide ${currentSlide}`} className="slider-image" />
          <p className="slider-caption">{slides[currentSlide].caption}</p>
        </div>
        <button onClick={nextSlide} className="slider-button">
          &gt;
        </button>
      </div>
    </>
  );
};

export default SimpleSlider;
