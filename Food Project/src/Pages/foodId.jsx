import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllQuery } from '../Redux/TastyApi'
// import BsCheck2Circle from 'react-icons/bs'

const foodid = () => {
   const {id} = useParams()
   const { data: category, isFetching } = useGetAllQuery();
    const FoodList = category?.results;
    if (isFetching) return 'Loading'
    console.log(FoodList)
  

  return (
    <div>
      <div className="container w-full h-screen">
        <div className='w-screen h-96 bg-gradient-to-r from-purple-500 to-pink-500 text-center flex items-center justify-center'>
            <h1 className='text-4xl text-white font-bold '>{id}</h1>
        </div>
        </div>
        <div className="mt-3">
        {
          FoodList.map(foodItem => {
            if (foodItem.id == id) {

              <div className="content">
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6">
                <h1 className='text-2xl font-bold w-1/4'>Ingredients</h1>
                <div className="px-6 pt-4 pb-2 w-3/4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {
                      foodItem.tags.slice(0, 6).map(tag => (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag.name}</span>
                      ))
                    }
                  </span>
                </div>
              </div>
            </div>

            } else {
              <h1>Yet to upload content</h1>
            }
          })
        }
        </div>


    </div>
  )
}

export default foodid