import React from 'react'
import { Link } from 'react-router-dom';
import { useGetFoodCategoryQuery} from '../Redux/TastyApi';
import Navbar from '../Components/Navbar';
import Loader from '../Components/Loader/Loader';

const French = () => {
    const {data: French , isFetching} = useGetFoodCategoryQuery('whisk')
    if (isFetching) return <Loader />
    const FoodList = French?.results;

    return (
      <div className="search-page">
        <Navbar />
        <div className="container w-full ">
          <div className={`w-screen h-96 bg__image flex items-center justify-center`}>
              <h1 className='text-4xl text-black font-bold '>Other Recipe</h1>
          </div>
        </div>
        <div className="container mx-auto">
          
        <div className="grid grid-cols-1 gap-4 text-center px-6 md:px-0 md:grid-cols-2 lg:grid-cols-4  ">
            {FoodList &&
              FoodList.map((foodItem) => (
                <div className="korean__shadow mt-4 resp" key={foodItem.id}>
                  <Link to={`/food/${foodItem.id}`}>
                    <img
                      style={{ width: "100%", height: "12rem" }}
                      className="rounded b__shadow__foodImg -mt-6rem"
                      src={foodItem ? foodItem.thumbnail_url : mealClose}
                      alt={`${foodItem.name.substring(0, 25)}...`}
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-lg text-left mb-2">{`${foodItem.name.substring(
                        0,
                        40
                      )}...`}</div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
}

export default French