import React, { useState, useCallback, useEffect } from 'react'
import { BsEnvelope } from 'react-icons/bs'
import { BiUser, BiMenuAltRight, BiNews } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import axios from 'axios'
import { OpenWeatherProps } from '../../types/openWeather'

const AppBar = () => {
  const [showAppBarItems, setShowAppBarItems] = useState(true)
  const [weather, setWeather] = useState<OpenWeatherProps>()
  const [isLoading, setIsLoading] = useState(false)

  const handleShowAppBarItems = () => {
    setShowAppBarItems(!showAppBarItems)
  }

  const handleWeatherData = useCallback(async () => {
    setIsLoading(true)
    const API_KEY = 'b6825025e3bebb151ef97430abbdc2a2'
    const latitude = 5.60
    const longitude = -0.19
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )
    setWeather(response.data)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    handleWeatherData()
  }, [handleWeatherData])

  console.log(weather);

  const toDegreeCelsius = (weather?.main.temp! - 273.15).toFixed(2)

  return (
    <nav className='flex-primary'>
        <div className="flex-primary gap-4 text-white">
            <div className='flex-primary-gap'> <BiNews color='red' className='bg-gray-900 p-1 w-10 h-10 rounded' /> <span className='font-bold text-xl text-red-600 sm:text-sm'> Blog Time</span> </div> 
            {!isLoading ?
            <div className="font-light text-sm">
              <span> {weather?.name}, {toDegreeCelsius}° </span>
            </div>
            : <h6 className='text-sm'>Loading...</h6>}
        </div>

        <div className="sm:hidden md:flex-primary gap-5 font-light text-white">
            <span className='flex-primary-gap'> <BsEnvelope /> Newsletter</span>
            <div className="">
                <span className='flex-primary-gap'> <BiUser /> Profile</span>
            </div>
        </div>

        <button onClick={handleShowAppBarItems} className='text-white sm:inline-block md:hidden'> {showAppBarItems ? <BiMenuAltRight size={25} /> : <div className="bg-white"> <GrClose color='blue' /></div>} </button>
        {!showAppBarItems && (
            <ul className='absolute right-5 top-10 font-light bg-white z-10 py-2 px-4 rounded text-black'>
                <li className='py-1 cursor-pointer hover:text-red-400'> <span className='flex items-center gap-1'> <BsEnvelope /> Newsletter</span> </li>
                <li className='py-1 cursor-pointer hover:text-red-400'> <span className='flex items-center gap-1'> <BiUser /> Profile</span> </li>
            </ul>
        )}
    </nav>
  )
}

export default AppBar