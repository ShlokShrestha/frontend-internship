import React, { useEffect } from "react";
import TextInput from "../components/form/InputBox";
import Button from "../components/button/button";
import TextArea from "../components/form/TextArea";
import Dropdown from "../components/form/Dropdown";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { postProduct } from "../api/DataApi";

const AddPost = () => {
  const category = [
    { title: "Laptop" },
    { title: "SmartPhone" },
    { title: "Bag" },
  ];
  const values = [
    {
      label: "Product Name",
      type: "text ",
      placeholder: "Enter product name",
      name: "title",
    },
    {
      label: "Brand",
      type: "text",
      placeholder: "Enter product brand",
      name: "brand",
    },
    {
      label: "Price",
      type: "number",
      placeholder: "Enter product Price",
      name: "price",
    },
    {
      label: "Discount",
      type: "number",
      placeholder: "Enter product discount",
      name: "discountPercentage",
    },
    {
      label: "Stock",
      type: "number",
      placeholder: "Enter product stock",
      name: "stock",
    },
    {
      label: "Rating",
      type: "number",
      placeholder: "Enter product rating",
      name: "rating",
    },
    {
      label: "Thumbnail",
      type: "text ",
      placeholder: "Enter product image",
      name: "thumbnail",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();
  const mutation = useMutation({
    mutationFn: (formData) => postProduct(formData),
    onSuccess: () => {
      toast.success("Product added successfully");
    },
    onError: (error) => {
      console.error("API Error:", error);
      toast.error("Failed to add product");
    },
  });
  const onSubmit = (data) => {
    const formData = {
      ...data,
      rating: parseFloat(data.rating),
      discountPercentage: parseFloat(data.discountPercentage),
      stock: parseInt(data.stock),
      price: parseFloat(data.price),
    };
    console.log(formData);
    mutation.mutate(formData);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);
  return (
    <>
      <div className="lg:max-w-lg md:max-w-max mx-auto mt-5 py-2">
        <h1 className="text-center py-3 text-2xl font-bold">Add Product</h1>

        <form
          className="mx-auto p-3 grid lg:grid-cols-2 grid-cols-1 gap-2"
          onSubmit={handleSubmit(onSubmit)}
          method="post"
        >
          {values &&
            values.map((data, index) => (
              <TextInput values={data} key={index} register={register} />
            ))}
          <Dropdown option={category} register={register} />
          <div className="md:col-span-2 col-span-1">
            <TextArea register={register} />
          </div>
          <Button />
        </form>
      </div>
    </>
  );
};

export default AddPost;
