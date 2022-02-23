import Image from 'next/image';
import bannerBackground from '../public/bannerBackground.jpg';

function Banner() {
  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      <Image 
      src={bannerBackground} 
      layout="fill"
      objectFit="cover"
      />
      <div className="absolute top-2/3 w-full text-center">
        <p className="text-sm font-bold sm:text-lg md:text-3xl text-white ">
          Not sure Where to go? perfect.
        </p>

        <button
          className="my-3 rounded-full bg-white 
        px-10 py-4 font-bold shadow-md hover:shadow-xl active:scale-90 transition duration-150"
        >
          <p className="bg-gradient-to-r from-indigo-500 via-purple-500 
          to-pink-500 bg-clip-text text-2xl font-bold text-transparent">
            I'm flexible
          </p>
        </button>
      </div>
    </div>
  )
}

export default Banner;