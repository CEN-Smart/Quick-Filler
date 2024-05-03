import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({ image, btnTitle, rating, onClick }) {
  const totalStars = 5;

  const Star = ({ filled }) => (
    <span className={filled ? "text-yellow-400" : "text-gray-300"}>
      <FaRegStar />
    </span>
  );

  const RatingStars = ({ rating }) => (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );

  return (
    <div>
      <RatingStars rating={rating} />

    <Link to={`/${btnTitle.toLowerCase().replace(" ", "-")}`} className="no-underline">
      <div
        className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <img className="rounded-t-lg w-full h-48 object-cover" src={image} alt={btnTitle}  />
        <div className=" text-center my-3">
        <button className="bg-[#189A59] text-white py-1 px-4">
          {btnTitle}
        </button>
        </div>
      </div>
    </Link>

    </div>
  );
}

export default ProductCard;
