import React from 'react'
import {AiOutlineApple} from 'react-icons/ai'
import {FaGooglePlay} from 'react-icons/fa'
import Storebutton from './storebutton'
import mobileApp from '../Img/abillion.png'

const Downloadapp = () => {
  return (
    <div className='bg-popularRecipe'>
      <div className="container mx-auto p-6 bg-bgTone py-10">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-6 ">
          {/* left */}
          <div className="app-img text-center md:text-left">
            <img src={mobileApp} alt="" />
          </div>
          {/* right */}
          <div className="text-center md:text-left flex flex-col space-y-6 md:w-1/2">
            <div className="headers">
              <small className='text-sm text-yellow-400'>Download Our App</small>
              <p className="text-3xl font-bold mt-2">It's All Here.</p>
              <p className="text-3xl font-bold mt-4">All In One App.</p>
            </div>
            <p className='text-gray-400 my-6 text-sm max-w-sm'>Discover local on-demand delivery or pickup from restaurants, nearby grocery, convenience storesand more.</p>
            <div className="flex flex-row space-x-6">
              <Storebutton icon={<AiOutlineApple />} appstore={'AppleStore'} />
              <Storebutton icon={<FaGooglePlay/>} appstore={'PlayStore'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Downloadapp