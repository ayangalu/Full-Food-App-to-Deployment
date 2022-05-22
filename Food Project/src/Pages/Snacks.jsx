import React from 'react'
import { Link } from 'react-router-dom';
import { useGetFoodCategoryQuery, useGetTagsQuery } from '../Redux/TastyApi';
import Navbar from '../Components/Navbar';
import Loader from '../Components/Loader/Loader';

const Snacks = () => {
    const {data: Snacks , isFetching} = useGetFoodCategoryQuery('bake')
    const { data: tags, isFetching2 } = useGetTagsQuery();
    console.log("tags: ", tags);

    if (isFetching) return <Loader />
    const FoodList = Snacks?.results;

    console.log(FoodList)

    return (
      <div className="search-page">
        <Navbar />
        <div className="container w-full ">
          <div className={`w-screen h-96 bg__image flex items-center justify-center`}>
              <h1 className='text-4xl text-black font-bold '>Snacks Recipe</h1>
          </div>
        </div>
        <div className="container mx-auto">
          
          <div className="grid grid-cols-1 gap-4 text-center px-6 md:px-0 md:grid-cols-2 lg:grid-cols-4 ">
            {FoodList &&
              FoodList.map((foodItem) => (
                  <div className="max-w-sm rounded overflow-hidden mt-6 shadow-lg" key={foodItem.id} >
                    <Link to={'/'}>
                      <img className="w-full" src={foodItem.thumbnail_url} alt="Sunset in the mountains" />
                      <p className="px-1 py-4 font-bold text-sm mb-2 text-left">
                      {foodItem.name.substring(0,40)}
                      </p>
                      <div className="pt-4 pb-2 px-1">
                          <p className='text-left'>Cook Time : {foodItem.cook_time_minutes}</p> 
                      </div>
                    </Link>
                  </div>
              ))}
          </div>
        </div>
      </div>
    );
}

export default Snacks