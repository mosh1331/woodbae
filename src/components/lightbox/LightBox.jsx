import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CustomLightbox = ({ slides, open, index, close, prev, next }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <button
        className="absolute top-0 right-0 m-4 text-white"
        onClick={close}
      >
        <CloseIcon fontSize="large" />
      </button>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="text-white"
          onClick={prev}
        >
          <ArrowBackIosNewIcon fontSize="large" />
        </button>
        <img src={slides[index].src} alt={`Slide ${index}`} className="max-h-screen max-w-screen" />
        <button
          className="text-white"
          onClick={next}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default CustomLightbox;
