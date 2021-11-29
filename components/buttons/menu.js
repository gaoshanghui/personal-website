import { useState } from 'react';

export const MenuButton = ({ menuIsOpen, setMenuIsOpen }) => {
  const handleOnClick = () => {
    console.log('clicked');
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <button
      onClick={handleOnClick}
      className="relative flex justify-center items-center w-10 h-10 border-solid border rounded-lg border-gray-300 transition hover:bg-gray-100"
    >
      <div>
        <span
          className={`block h-line w-5 bg-blue-600 rounded-full absolute  left-[calc(50%-10px)] transition transform ${
            menuIsOpen ? 'top-[calc(50%-1px)] rotate-45' : 'top-3'
          }`}
        ></span>
        <span
          className={`block h-line w-5 bg-blue-600 rounded-full absolute  left-[calc(50%-10px)] transition transform ${
            menuIsOpen ? 'top-[calc(50%-1px)] -rotate-45' : 'bottom-3'
          }`}
        ></span>
      </div>
    </button>
  );
};
