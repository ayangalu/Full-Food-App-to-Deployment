import React from 'react'
import {AiOutlineApple} from 'react-icons/ai'
import {FaGooglePlay} from 'react-icons/fa'

const Storebutton = ({icon, appstore}) => {
  return (
    <a href="" className='flex space-x-4 bg-playStoreBtn text-white items-center rounded px-3'>
        <span className='text-2xl'>{icon}</span>
        <div>
            <span className='smallFont text-gray-300'>Download on the</span>
            <p className='text-lg text-gray-400'>{appstore}</p>
        </div>
    </a>
  )
}

export default Storebutton