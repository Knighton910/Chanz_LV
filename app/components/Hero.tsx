import React from 'react'
import Image from 'next/image'
// import blur from '../../public/blur.png'
import tarheel from '../../public/tarheel.png'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center py-24 bg-[#ecf0f3]'>
      <Image 
        src={tarheel}
        alt='artist image'
        quality={100}
        priority
        className='w-full sm:w-2/3 md:w-2/1 mb-1 lg:w-2/3'
      />

      {/* Main Text */}
      <div className='flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-40'>
        <h1 className='text-5xl sm:text-8x1 font-bold text-black tracking-tight'>A rapper {""}
          <span className='bg-gradient-to-r from-[#ff781f] to-[#ffaf7a] text-transparent bg-clip-text'>
            artist
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Hero