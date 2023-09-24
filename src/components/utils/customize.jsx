import React from 'react';

const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  return (
    <div className="flex items-center justify-between px-4">
      <button
        className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
        onClick={() => previous()}
      >
        Previous
      </button>
      <button
        className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
        onClick={() => next()}
      >
        Next
      </button>
    </div>
  );
};

export default CustomButtonGroup;
