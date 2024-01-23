import axios from "axios";

export const getAllProduct = async () => {
  const res = await axios.get("http://localhost:3000/products");
  return res.data;
};
export const getProductDetail = async (id) => {
  const res = await axios.get(`http://localhost:3000/products/${id}`);

  return res.data;
};
export const postProduct = async (formData) => {
  const res = await axios.post("http://localhost:3000/products/", formData);

  return res.data;
};
