"use-client"
import React, { useEffect, useRef, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CustomLightbox from '../lightbox/LightBox';

const ProjectModal = ({ open, onClose, project }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = project.images.length; 

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const carouselRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      // Move to the next slide
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    } else if (event.key === 'ArrowLeft') {
      // Move to the previous slide
      setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    }
  };

  useEffect(() => {
    // Add event listener
    document.addEventListener('keydown', handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <Modal style={{ zIndex: 2 }} open={open} onClose={onClose}>
        <Box className="flex flex-col lg:flex-row items-center bg-white rounded-lg p-4 outline-none w-3/4 mx-auto mt-20">
          <div className="w-full lg:w-2/3 ">
            <Carousel
              selectedItem={currentSlide}
              onChange={(index) => setCurrentSlide(index)}
              ref={carouselRef} showThumbs={false} onClickItem={handleImageClick}>
              {project.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Project image ${index + 1}`} className="cursor-pointer " />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="w-full lg:w-1/3 p-4 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{project.site}</h2>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Project Type</h3>
              <p className="text-gray-700">{project.project_type}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Description</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Area</h3>
              <p className="text-gray-700">{project.area}</p>
            </div>
          </div>
        </Box>
      </Modal>
      {lightboxOpen && (
        <CustomLightbox
          slides={project.images.map(image => ({ src: image }))}
          open={lightboxOpen}
          index={currentIndex}
          close={handleCloseLightbox}
          prev={handlePrevSlide}
          next={handleNextSlide}
        />
      )}
    </div>
  );
};

export default ProjectModal;
