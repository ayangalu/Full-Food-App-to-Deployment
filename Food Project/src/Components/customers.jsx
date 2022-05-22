import React from 'react'
import avatar1 from '../Img/avatar-ali.png'
import avatar2 from '../Img/avatar-anisha.png'
import avatar3 from '../Img/avatar-richard.png'
import {AiFillStar} from 'react-icons/ai'

const Customers = () => {

  const reviewList = [ 
    {name: 'Alisijang Blren', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo similique harum officiis quae, culpa.', position: 'CEO, apple product'},
    {name: 'Boris John', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo similique harum officiis quae, culpa.', position: 'Marketer, Xmers'},
    {name: 'Ahmad Fahd', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo similique harum officiis quae, culpa.', position: 'Manager, Sony'}
]

  return (
    <div className="bgTone">
      <div className='container p-6 mx-auto my-10'>
      <h1 className='text-2xl font-bold text-gray-900  text-center mb-10'>What our customers are saying</h1>
      <div className="review flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-6">
        {
          reviewList.map((review, i) => (
            <div className="card1 p-4 bg-gray-50 md:w-1/3 flex flex-col space-y-6 items-center" key={review+i}>
              <p className="text-sm text-center">{review.review}</p>
            <div className="flex space-x-6 items-center">
              <div>
                <img src={avatar1} className='w-10' alt="" />
              </div>
              <div>
                <p className='font-bold text-lg'>{review.name} </p>
                <small className='text-md'>{review.position}</small>
              </div>
            </div>
        </div>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Customers