import React from "react";
import { Link } from "react-router-dom";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductCard = ({ item }) => {
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };
  return (
    <div>
      <Link to={`/products/${item.id}`}>
        <div className="m-5 shadow-md relative max-w-sm rounded-md cursor-pointer ">
          <div className="w-full h-[15rem]">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover rounded-t-md"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold capitalize">
              {item.title}
            </h2>
            <span className="flex items-center py-1">
              <Rating
                readOnly
                value={item.rating}
                style={{ maxWidth: 120, padding: 0, margin: 0 }}
                itemStyles={myStyles}
              />
              <p className="text-gray-500">({item.rating})</p>
            </span>
            <h4 className="text-2xl font-bold my-2">${item.price}</h4>
            <p className="text-green-700">Free Shipping</p>
          </div>
          <div className="absolute top-2 left-0 bg-red-600 text-white rounded-e-lg">
            <p className="px-2 py-1 text-sm">
              {item.discountPercentage}% OFF
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
