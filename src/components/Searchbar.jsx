import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="px-2 text-gray-400 focus-within:text-gray-600 h-[70px]">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="relative flex flex-row justify-start items-center h-[70px]">
        <FiSearch aria-hidden="true" className="absolute left-4 top-[24px] w-5 h-[20px] ml-20" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-[1px] border-gray-500 placeholder-gray-500 outline-none text-base text-black px-10 py-[6px] rounded-3xl my-4 mx-20"
          placeholder="支持搜索歌名、歌手或专辑"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
