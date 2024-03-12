import React, { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import '../styles/coverImage.css';

const CoverImage = ({ coverImages, onScrollDown }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScrollDown = () => {
    if (onScrollDown) {
      onScrollDown();
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % coverImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [coverImages]);

  return (
    <div className="cover-image-section">
      <img
        src={coverImages[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="w-full h-full object-cover cover-image"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="cover-image-text text-4xl font-bold text-white mb-4">RENT YOUR DREAM CAR TODAY</h1>
        <FaArrowDown className="text-white cursor-pointer" onClick={handleScrollDown} />
      </div>
    </div>
  );
}

export default CoverImage;
