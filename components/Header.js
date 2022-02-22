import Image from "next/image";
import airbnb from '../public/airbnb.png';

import { SearchIcon } from '@heroicons/react/solid';

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
      <div className="flex items-center rounded-full md:border-2 py-2 md:shadow-sm">
        <input
          className="flex-grow bg-transparent pl-5 outline-none"
          type="text"
          placeholder="start your search"
        />
        <SearchIcon className="h-8 cursor-pointer 
        rounded-full bg-red-400 p-2
        text-white md:mx-2" />
      </div>

      {/* Right */}
      <div></div>
    </header>
  )
}

export default Header;