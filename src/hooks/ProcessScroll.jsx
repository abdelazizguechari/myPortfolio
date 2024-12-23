import React, { useRef } from 'react';
import { useLocoScroll } from './useLocoScroll'; // Custom hook for Locomotive Scroll
import { galleryImages } from '../constants'; // Import your gallery images

const ProcessScroll = () => {
  const scrollContainerRef = useRef(null);
  const locoScrollRef = useLocoScroll(scrollContainerRef, { smooth: true });

  return (
    <div
      ref={scrollContainerRef}
      data-scroll-container
      className="overflow-hidden h-screen" // Tailwind class for height
    >
      <div
        data-scroll
        data-scroll-direction="horizontal" // Make sure horizontal scroll is enabled
        data-scroll-speed="1"
        className="flex space-x-4"
      >
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="text-center text-white p-4">
              <h1 className="text-3xl font-bold">{image.title}</h1>
              <p className="text-lg">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessScroll;
