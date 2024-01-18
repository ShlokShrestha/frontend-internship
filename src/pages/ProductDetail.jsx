import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "../api/DataApi";
import { FaPlus, FaMinus, FaHeart, FaCartPlus } from "react-icons/fa6";
import Loader from "../components/Loader";
const ProductDetail = () => {
  const [qtn, setQtn] = useState(1);
  if (qtn < 1) {
    setQtn(1);
  }
  const { id } = useParams();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["productDetail", id],
    queryFn: () => getProductDetail(id),
  });
  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <div className="max-w-screen-lg mx-auto my-10 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 px-5">
        <div>
          <img src={data.thumbnail} alt={data.title} />
        </div>
        <div className="capitalize lg:ps-10 py-2">
          <h4 className="text-xl font-semibold mt-5 mb-3">{data.category}</h4>
          <h4 className="text-3xl font-bold mb-3">{data.title}</h4>
          <h6 className="text-lg font-bold mb-3">${data.price}</h6>
          <span className="text-gray-500">Description:</span>
          <p className="my-2 font-medium">{data.description}</p>
          <div className="flex items-center">
            <button className="bg-gray-500 p-2  text-white">
              <FaMinus onClick={() => setQtn((pre) => pre - 1)} />
            </button>
            <input
              type="number"
              className="bg-gray-200 outline-none py-1 px-2 w-10 text-center"
              value={qtn}
              readOnly
            />
            <button className="bg-gray-500 p-2 text-white">
              <FaPlus onClick={() => setQtn((pre) => pre + 1)} />
            </button>
          </div>
          <div className="mt-7 flex gap-5">
            <button className="outline outline-1 outline-gray-600 flex items-center gap-2 p-2  rounded-sm">
              <FaHeart />
              Favourites
            </button>
            <button className="bg-red-600 flex items-center gap-2 p-2 text-white rounded-sm ">
              <FaCartPlus />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
