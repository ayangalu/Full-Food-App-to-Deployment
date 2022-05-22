import React from "react";
import shrimpRice from "../Img/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food-removebg-preview.png";
import spag from "../Img/comida-lifestyle-spaghetti-foodie-gastronomy-removebg-preview.png";
import stirFried from "../Img/stir-fried-rice-noodles-with-soy-sauce-pork-white.png";

const Heroheader = () => {
  return (
    <div className="container mx-auto p-6 ">
      <div className="flex flex-col space-y-6 md:space-y-0 md:space-x-6 md:flex-row items-center">
        {/* right */}
        <div className="text-center md:text-left flex flex-col space-y-8 items-center md:w-1/2 md:items-start my-10">
          <h1 className="text-4xl md:text-5xl font-bold max-w-md">
            Simple and Tasty Recipe
          </h1>
          <p className="text-md text-gray-700">
            The food destinations are in a friendly neighbourhood serving
            international cuisine all year round.
          </p>
          <button className="p-3 px-6 rounded bg-brightYellow text-white">
            Order Now
          </button>
        </div>
        {/* left */}
        <div className="right flex justify-center items-center md:w-1/2 relative">
          <img src={shrimpRice} alt="" />
          <img src={spag} alt="" className="absolute food-img food-image1" />
          <img
            src={stirFried}
            alt=""
            className="absolute food-img food-image2"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroheader;
