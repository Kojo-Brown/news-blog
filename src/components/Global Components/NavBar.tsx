import React from 'react'
import {BiHome, BiHealth, BiHappy, BiCar} from 'react-icons/bi'
import {FaBalanceScale} from 'react-icons/fa'
import {MdOutlineBusinessCenter, MdOutlineComputer, MdSportsSoccer, MdOutlineFastfood, MdOutlinePeople} from 'react-icons/md'

const NavBar = () => {
  return (
    <nav className='text-white lg:flex-primary py-2 sm:block'>
      <ul className='flex gap-5 flex-wrap'>
        <li className='flex-primary-gap-cursor-hover'> <BiHome /> Home</li>
        <li className='flex-primary-gap-cursor-hover'> <FaBalanceScale /> Politics</li>
        <li className='flex-primary-gap-cursor-hover'> <BiHealth /> Health</li>
        <li className='flex-primary-gap-cursor-hover'> <MdOutlineBusinessCenter /> Business</li>
        <li className='flex-primary-gap-cursor-hover'> <MdOutlineComputer /> Tech</li>
        <li className='flex-primary-gap-cursor-hover'> <MdSportsSoccer /> Sports</li>
        <li className='flex-primary-gap-cursor-hover'> <BiHappy /> Style</li>
        <li className='flex-primary-gap-cursor-hover'> <MdOutlineFastfood /> Food</li>
        <li className='flex-primary-gap-cursor-hover'> <MdOutlinePeople /> Culture</li>
        <li className='flex-primary-gap-cursor-hover'> <BiCar /> Travel</li>
      </ul>
      <input type="search" className='border border-black py-1 px-2 outline-0 text-black md:w-fit focus:border-white sm:my-4 w-full' placeholder='Search' />
    </nav>
  )
}

export default NavBar