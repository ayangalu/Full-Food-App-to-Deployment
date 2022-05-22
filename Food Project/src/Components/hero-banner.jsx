import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import chicken from '../Img/chicken.png'
import mealClose from '../Img/mealClose.png'
import pennePasta from '../Img/penne-pasta-tomato-sauce-with-chicken-tomatoes.png'

const bannerItem = [
                    {title: 'Mushroom', cost: 20, img: chicken}, 
                    {title: 'quinia lettuce', cost: 24, img:mealClose}, 
                    {title: 'Quinoa nuts', cost: 18, img:pennePasta}
                  ]

const Herobanner = () => {
  return (
    <div className="container mx-auto md:p-6 bg-bgTone md:my-10 md:py-10 ">
      <div className="hidden md:flex space-x-12 justify-between text-center items-center flex-row">
        {/* item1 */}
        {
        bannerItem.map(({title, cost, img}) => (
          <div className="flex flex-row space-x-6" key={title+cost} title={title} cost={cost}>
            <div className="img w-1/3 hidden md:flex ">
              <img src={img} alt="" className='hidden md:flex w-20 h-20' />
            </div>
            <div className="info mt-4 card-box bg-white p-2 px-4">
              <h1 className="text-md">{title}</h1>
              <div className="flex flex-row space-x-4 mt-4 ">
                <small># <span className='text-lg font-bold'>{cost}</span></small>
                <div className='p-2 bg-cartPadding text-white text-sm rounded'><AiOutlineShoppingCart /></div>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Herobanner