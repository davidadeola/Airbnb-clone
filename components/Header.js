import Image from "next/image";
import airbnb from '../public/airbnb.png';

import { 
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
  SearchIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* Left */}
      <div
        className="relative my-auto flex h-10
        cursor-pointer items-center "
      >
        <Image
          src={airbnb}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div
        className="flex items-center rounded-full 
        py-1 md:border-2 md:shadow-sm sm:py-1 ">
        <input
          className="flex-grow bg-transparent pl-5 outline-none
          text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="start your search"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 cursor-pointer 
          rounded-full bg-red-400 p-2
          text-white md:mx-2"
        />
      </div>

      {/* Right */}
      <div className='flex items-center space-x-2
      justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer 
        p-2 rounded-full hover:bg-gray-100 px-3 text-black'>Become a host</p>
        <div className='p-2 cursor-pointer
        rounded-full  hover:bg-gray-100'>
        <GlobeAltIcon className='h-6 text-gray-700' />
        </div>

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full ' >
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  )
}

export default Header;