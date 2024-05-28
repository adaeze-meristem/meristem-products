import React from 'react';
import { Logo } from '../../assets';

const Navbar = () => {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 w-full border-black/30 py-3 gap-4 border-b bg-white z-10">
      <img
        src={Logo}
        alt="logo"
        className="w-36 border-r-2 border-black/60 pr-3"
      />
      <p className="pt-5 text-lg text-black/85 font-semibold">Products</p>
    </div>
  );
};

export { Navbar };
