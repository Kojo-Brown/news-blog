import React from 'react'
import BreakingNews1 from '../assets/hero-5.jpeg'
import BreakingNews2 from '../assets/hero-3.jpeg'
import BreakingNews3 from '../assets/hero-2.jpeg'

const Hero = () => {
    return (
        <div className="text-white">
            <div className="lg:flex justify-between w-full sm:block">
                {/* Left */}
                <div className="lg:w-[40%] sm:w-full">
                    <div className="flex items-center gap-2">
                        <div className='flex items-center gap-2'> <div className='w-3 h-3 bg-red-600 rounded-full'></div> <span className='text-[.65rem] font-thin'>Hot Topic</span> </div>
                        <div className='w-0.5 h-3 bg-stone-400'></div>
                        <p className='font-light text-stone-400 text-[.65rem]'>September 23, 2022</p>
                    </div>
                    <h1 className='text-5xl py-4 leading-[1.2]'>A new wave of peaceful protests has just started in the capital</h1>
                    <h4 className='font-light py-4'>From Garoua to Douala, protests have hit the streets of Cameroon's length and breadth as the quest for a new president surges.</h4>
                    <span className='font-extralight text-stone-300 text-[.75rem]'>By: Jason Miller</span>
                </div>
                {/* Right */}
                <div className="h-[30rem] overflow-y-auto lg:w-[30%] sm:w-full">
                    <div className="">
                        <p className='font-light text-stone-400'>Health</p>
                        <p className='font-light text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum praesentium minus sapiente amet eius vero debitis doloremque, labore corrupti voluptas!</p>
                        <p className='text-[.75rem] font-light text-stone-400'>1 hour ago by <span className='text-red-600'>Kristina Schindler</span></p>
                    </div>

                    <div className="mt-5">
                         <p className='font-light text-stone-400'>Tech</p>
                         <p className='font-light text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum praesentium minus sapiente amet eius vero debitis doloremque, labore corrupti voluptas!</p>
                         <p className='text-[.75rem] font-light text-stone-400'>1 hour ago by <span className='text-red-600'>Amanda Khumalo</span></p>
                     </div>
                    <div className="mt-5">
                        <p className='font-light text-stone-400'>Culture</p>
                        <p className='font-light text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum praesentium minus sapiente amet eius vero debitis doloremque, labore corrupti voluptas!</p>
                        <p className='text-[.75rem] font-light text-stone-400'>1 hour ago by <span className='text-red-600'>Kristina Schindler</span></p>
                    </div>

                    <div className="mt-5">
                         <p className='font-light text-stone-400'>Food</p>
                         <p className='font-light text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum praesentium minus sapiente amet eius vero debitis doloremque, labore corrupti voluptas!</p>
                         <p className='text-[.75rem] font-light text-stone-400'>1 hour ago by <span className='text-red-600'>Amanda Khumalo</span></p>
                     </div>
                </div>
            </div>

            <div className="my-4">
                <div className="bg-red-600 w-fit px-4 py-2"> <span className='uppercase'>Breaking News</span> </div>
                <div className="grid gap-6 p-2 bg-white text-black xl:grid-cols-3  sm:grid-cols-1 lg:grid-cols-2">
                    <div className="flex gap-4">
                        <img src={BreakingNews1} className='w-24 h-24 object-cover' alt="" />
                        <div className="">
                            <div className=""> <span className='text-sm font-light text-stone-600'>27 minutes ago</span> <span>Thailand</span> </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, non.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img src={BreakingNews2} className='w-24 h-24 object-cover' alt="" />
                        <div className="">
                            <div className=""> <span className='text-sm font-light text-stone-600'>27 minutes ago</span> <span>Thailand</span> </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, non.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img src={BreakingNews3} className='w-24 h-24 object-cover' alt="" />
                        <div className="">
                            <div className=""> <span className='text-sm font-light text-stone-600'>27 minutes ago</span> <span>Thailand</span> </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, non.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero