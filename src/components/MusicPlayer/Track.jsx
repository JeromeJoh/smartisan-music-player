import React from 'react';
import record from '../../assets/record.png';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start relative">
    <div className="hidden sm:block h-16 w-16 mr-4">
      <img src={activeSong?.images?.coverart} alt="cover art" className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} rounded-full z-20 absolute top-4 left-8 h-10`} />
      <img src={record} alt="" className='absolute -top-4 left-0 h-24'/>
    </div>
    <div className="w-[50%] ml-10">
      <p className="truncate text-black font-bold text-lg">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate text-gray-500">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
