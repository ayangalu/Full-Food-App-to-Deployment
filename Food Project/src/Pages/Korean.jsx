import React from "react";
import { Link } from "react-router-dom";
import { useGetFoodCategoryQuery } from "../Redux/TastyApi";
import mealClose from "../Img/mealClose.png";
import Navbar from "../Components/Navbar";
import Loader from "../Components/Loader/Loader";

const Korean = () => {
  const { data: Korean, isFetching } = useGetFoodCategoryQuery("korean");
  if (isFetching) return <Loader />;
  const FoodList = Korean?.results;
  
  return (
    <div>
      <Navbar />
      <div className="search-page">
        <div className="container mx-auto">
          <div className="header py-6 text-center">
            <div>
              <h1 className="text-3xl font-bold text-brightYellow mb-3">
                Korean Food Recipe
              </h1>
              <p className="text-gray-500 text-lg mb-6">
                It's not just about food, It's an experience worth tasting
              </p>
            </div>
          </div>
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
    </div>
  );
};

export default Korean;
