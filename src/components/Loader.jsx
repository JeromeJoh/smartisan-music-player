import React from 'react';

import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col mt-16">
    <img src={loader} alt="loader" className="w-28 h-28 object-contain animate-spin" />
    <h1 className="font-bold text-2xl text-gray-700 mt-2">{title || 'Loading'}</h1>
  </div>
);

export default Loader;
