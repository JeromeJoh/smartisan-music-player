import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { IoIosMusicalNote } from "react-icons/io";
import { TiGroup } from "react-icons/ti";
import { BsFillBarChartFill } from "react-icons/bs";
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';

const links = [
  { name: '云音乐', to: '/', icon: IoIosMusicalNote },
  { name: '艺术家', to: '/top-artists', icon: TiGroup },
  { name: '排行榜', to: '/top-charts', icon: BsFillBarChartFill },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-6">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-center items-center my-8 text-base font-medium text-[#787b80] hover:text-white py-6 hover:bg-[#242529] rounded pr-4"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[200px] pt-16 px-4 bg-[#303135]">
        <img src={logo} alt="logo" className="w-full h-28 object-contain mt-4" />
        <h1 className='text-white text-xl text-center mt-4 mb-1'>锤子音乐</h1>
        <h1 className='text-gray-400 text-sm text-center font-light'>Smartisan Music</h1>
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-0 right-3 z-10 cursor-pointer"
       onClick={ () => setMobileMenuOpen(!mobileMenuOpen)}>
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-4 mt-6 text-[#303135]" />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-4 mt-6 text-[#303135]" />
        )}
      </div>

      <div className={`absolute top-0 h-full w-2/3 bg-[#303135] z-10 pt-16 px-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-24 object-contain" />
        <h1 className='text-white text-xl text-center mt-4 mb-1'>锤子音乐</h1>
        <h1 className='text-gray-400 text-sm text-center font-light'>Smartisan Music</h1>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
