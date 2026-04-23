import axios from "axios";

const API = "http://localhost:5000/api/product";

// GET
export const getProducts = () => {
  return axios.get(API);
};

// GET by id
export const getProductById = (id) => {
  return axios.get(`${API}/${id}`);
};

// POST
export const createProduct = (data) => {
  return axios.post(API, data);
};

// PUT
export const updateProduct = (id, data) => {
  return axios.put(`${API}/${id}`, data);
};

// DELETE
export const deleteProduct = (id) => {
  return axios.delete(`${API}/${id}`);
};