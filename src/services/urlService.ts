import axios from "axios";

const API_URL = "http://localhost:8000/api/urls/";

export const getUrls = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const saveUrl = async (url: string) => {
  const response = await axios.post(API_URL, { url });
  return response.data;
};

export const deleteUrl = async (id: string) => {
  const response = await axios.delete(`${API_URL}${id}`);
  return response.data;
};

export const updateUrl = async (id: string, url: string) => {
  const response = await axios.put(`${API_URL}${id}`, { url });
  return response.data;
};
