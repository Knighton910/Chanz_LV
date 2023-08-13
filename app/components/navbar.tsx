"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Logo from '../chanzLogo.png'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='fixed w-full h-24 shadow-xl bg-white text-black z-10'>
      <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <Link href='/'>
            <Image
              src={Logo}
              alt="Chanz Logo"
              // className="dark:invert"
              width={80}
              priority
            />
        </Link>
        <div>
          <ul className='hidden sm:flex'>
            <Link href='/about'>
              <li className='ml-10 uppercase hover:border-b text-xl'>About Me</li>
            </Link>
            <Link href='/tour'>
              <li className='ml-10 uppercase hover:border-b text-xl'>Book Me</li>
            </Link>
            <Link href='/contact'>
              <li className='ml-10 uppercase hover:border-b text-xl'>Contact</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className='md:hidden cursor-pointer pl-24 color-blue no-focus-outline focus:ring-transparent'>
          <AiOutlineMenu size={25}  />
        </div>
      </div>
      <div className={
        menuOpen
        ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }>
        <div className='flex w-full items-center justify-end'>
          <div onClick={handleNav} className='cursor-pointer'>
            <AiOutlineClose size={25} />
          </div>
        </div>

        {/* Mobile Nav Items */}
        <div className='flex-col py-4'>
          <ul>
            <Link href='/'>
              <li
                onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer text-xl text-black'
              >
                Home
              </li>
            </Link>

            <Link href='/about'>
              <li
                onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer text-xl text-black'
              >
                About
              </li>
            </Link>

            <Link href='/tour'>
              <li
                onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer text-xl text-black'
              >
                Tour/Book Me
              </li>
            </Link>

            <Link href='/'>
              <li
                onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer text-xl text-black'
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>

        {/* social media Footer */}
        <div className='flex flex-row justify-around pt-10 items-center'>
          <AiOutlineInstagram size={30} className='cursor-pointer' />
          <AiOutlineFacebook size={30} className='cursor-pointer'  />
          <AiOutlineTwitter size={30} className='cursor-pointer'  />
        </div>

        <Link href='/'>
            <Image
              src={Logo}
              alt="Chanz Logo"
              className="cursor-pointer pt-7 ml-5"
              width={80}
              priority
            />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar