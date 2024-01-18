import React from "react";
import { getAllProduct } from "../api/DataApi";
import { useQuery } from "@tanstack/react-query";

import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const HomePage = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
  });

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div>
        <div>
          <h1 className="text-center text-2xl font-semibold my-5">
            All Product Details
          </h1>
          <div className="max-w-[1280px] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1  mx-auto">
            {data.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
