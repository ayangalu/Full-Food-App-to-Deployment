import React from 'react'
import { Link } from 'react-router-dom';
import { useGetFoodCategoryQuery } from '../Redux/TastyApi';
import mealClose from "../Img/mealClose.png";
import Navbar from '../Components/Navbar';
import Loader from '../Components/Loader/Loader';

const Italian = () => {

    const {data: Italian , isFetching} = useGetFoodCategoryQuery('italian')
    if (isFetching) return <Loader />;
    const FoodList = Italian?.results;
    
  return (
    <div>
    <Navbar />
    <div className="search-page mt-3">
      <div className="container mx-auto">
        <div className="header py-6 text-center">
          <div>
            <h1 className="text-4xl font-bold text-brightYellow mb-3">
              Italian Food Recipe
            </h1>
            <p className="text-gray-500 text-lg mb-6">
              It's not just about food, It's an experience worth tasting
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 text-center px-6 md:px-0 md:grid-cols-2 lg:grid-cols-4 ">
          {FoodList &&
            FoodList.map((foodItem) => (
              <div className="max-w-sm resp rounded overflow-hidden mt-6 shadow-lg">
                <Link to={`/food/${foodItem.id}`}>
                  <img
                    style={{ width: "100%", height: "12rem" }}
                    className="rounded b__shadow__foodImg -mt-6rem"
                    src={foodItem ? foodItem.thumbnail_url : mealClose}
                    alt={`${foodItem.name.substring(0, 25)}...`}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-lg mb-2">{`${foodItem.name.substring(
                      0,
                      25
                    )}...`}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Italian