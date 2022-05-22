import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";
import chicken from "../Img/chicken.png";
import mealClose from "../Img/mealClose.png";
import pennePasta from "../Img/penne-pasta-tomato-sauce-with-chicken-tomatoes.png";
import pastaItalia from "../Img/penne-pasta-with-pesto-sauce-zucchini-green-peas-basil.png";

const Popularrecipe = () => {
  const [searchField, setSearchField] = useState("");

  const handleSearchField = (e) => {
    setSearchField(e.target.value);
  };
  const itemCategory = [
    { title: "Breakfast", active: true },
    { title: "Lunch" },
    { title: "Dinner" },
    { title: "Fast Food" },
  ];
  const catShowcase = [
    { title: "Grilled Marinata", price: 24, active: true, img: pennePasta },
    { title: "Chicken Sausage", price: 20, img: mealClose },
    { title: "Sardine Spaghetti", price: 18, img: pastaItalia },
  ];

  return (
    <div className="bg-popularRecipe">
      <div className="container mx-auto p-6 bg-bgTone py-10">
        <div className="header md:mb-10 flex flex-col space-y-4 md:flex-row items-center md:justify-between py-10">
          <h1 className="text-2xl font-bold text-gray-900">
            Popular Food Recipe
          </h1>
          <div className="input-group border border-gray-300 bg-white flex justify-between items-center rounded p-2">
            <AiOutlineSearch />
            <input
              type="text"
              placeholder="search food"
              onChange={handleSearchField}
              value={searchField}
              className="ml-2 bg-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-6 md:justify-between md:py-10">
          {/* item1 */}
          <div className="item w-full md:w-1/4 ">
            {itemCategory.map((item, i) => (
              <h1
                key={i}
                className={`text-md p-2 px-6 mt-10 rounded ${
                  item.active ? "bg-white" : "border"
                }`}
              >
                {item.title}
              </h1>
            ))}
          </div>
          {/* item2 */}
          <div className="hidden block item w-full md:w-3/4 md:flex space-y-12 md:space-y-0 md:flex-row md:space-x-6 ">
            {catShowcase.map((catItems, i) => (
              <div
                key={i}
                className="card flex flex-col space-y-6 border border-cartPadding2 bg-white text-center w-1/3 pb-6 relative p-3"
              >
                <img src={catItems.img} alt="" className="food-abs" />
                <div className="relative top-4 content flex flex-col text-center space-y-6">
                  <h3 className="text-lg mt-10 pt-10">{catItems.title}</h3>
                  <p className="text-gray-500" style={{ fontSize: "0.7rem" }}>
                    Your safety is our first priority. Everything we do, we do
                    to keep
                  </p>
                  <div className="flex justify-between items-center">
                    <small>
                      #{" "}
                      <span className="text-2xl font-bold">
                        {catItems.price}
                      </span>
                    </small>
                    <div className="p-2 text-brightYellow text-sm rounded flex space-x-1 items-center">
                      <AiFillStar />
                      <span className="text-black">5.0</span>
                    </div>
                  </div>
                  <div
                    className={`p-2 text-white text-center ${
                      catItems.active ? "bg-brightYellow" : "bg-gray-500"
                    } w-10 mx-auto flex items-center justify-center text-sm rounded`}
                  >
                    <AiOutlineShoppingCart />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="hidden p-3 text-center md:flex mx-auto px-6 rounded bg-brightYellow text-white">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Popularrecipe;
