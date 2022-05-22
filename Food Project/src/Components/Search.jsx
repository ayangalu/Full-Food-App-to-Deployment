import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetFoodCategoryQuery, useGetTagsQuery } from "../Redux/TastyApi";
import mealClose from "../Img/mealClose.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Search = () => {
  const [menuList, setmenuList] = useState("special_occasion");

  const { data: tags, isFetching } = useGetTagsQuery();
  const { data: category, isFetching2 } = useGetFoodCategoryQuery(menuList);

  const FoodList = category?.results;
  if (isFetching) return "Loading tags...";
  if (isFetching2) return "Loading category...";
  if (isFetching || isFetching2) return <Loader />;

  const TagSelect = tags?.results.slice(0, 10);
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae debitis ad obca,";

  const handleMenuList = (e) => {
    setmenuList(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="search-page">
        <div className="container mx-auto">
          <div className="header py-6 text-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-brightYellow mb-3">
                {menuList} Food Recipe
              </h1>
              <p className="text-gray-500 text-md">
                It's not just about food, It's an experience worth tasting
              </p>
              <select value={menuList} onChange={handleMenuList} className='px-6 py-2 md:mt-10 border border-gray-400 rounded mt-3 md:mt-0'>
                {TagSelect &&
                  TagSelect.map((tag) => (
                    <option value={tag.name} key={tag.id}>{tag.name}</option>
                  ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 px-6 md:px-0 gap-4 md:grid-cols-2 lg:grid-cols-4 text-center">
            {FoodList &&
              FoodList.map((foodItem) => (
                <div className="search__shadow resp  mt-4" key={foodItem.id}>
                  <Link to={`/food/${foodItem.id}`}>
                    <img
                      style={{ width: "100%", height: "12rem" }}
                      className="rounded b__shadow__foodImg -mt-6rem"
                      src={foodItem ? foodItem.thumbnail_url : mealClose}
                      alt={`${foodItem.name.substring(0, 40)}...`}
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-lg mb-2">{`${foodItem.name.substring(
                        0,
                        25
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

export default Search;
