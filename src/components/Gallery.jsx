// Gallery.jsx
import React, { useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen'; // Adjust the path as needed
import ProcessScroll from '../hooks/ProcessScroll'; // Adjust the path as needed
import { galleryImages } from '../constants/index'; // Adjust the path as needed

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  const updateActiveImage = (index) => {
    setActiveImage(index);
  };

  return (
    <div className="overflow-hidden">
      {/* Gallery items */}
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-item relative flex justify-center items-center h-screen"
          >
            <div className="absolute z-10 text-center text-white p-4 w-full">
              <h1 className="text-3xl font-bold">{image.title}</h1>
              <h2 className="text-xl">{image.subtitle}</h2>
              <p className="text-lg">{image.category}</p>
            </div>
            <div
              className="gallery-item-image w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Horizontal scroll section */}
      <ProcessScroll />
    </div>
  );
};

export default Gallery;
