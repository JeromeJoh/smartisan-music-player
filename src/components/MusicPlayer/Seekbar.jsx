import React from 'react';

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center mt-4">
      <p className="text-[#b2b2b2]">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="form-range appearance-nono md:block w-24 md:w-56 2xl:w-96 h-2 mx-4 2xl:mx-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
      />
      <p className="text-[#b2b2b2]">{max === 0 ? '0:00' : getTime(max)}</p>
    </div>
  );
};

export default Seekbar;
