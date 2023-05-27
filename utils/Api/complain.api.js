import axios from "axios";
import config from "../config";

const getAllComplain = async (token) => {
  const response = await axios.get(`${config.url}/api/listing/complain`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
const editComplainbyId = async (id, body, token) => {
  const response = await axios.patch(`${config.url}/api/listing/complain/${id}`, body, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const deleteComplainById = async (id, token) => {
  const response = await axios.delete(`${config.url}/api/listing/complain/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const addNewComplain = async (body, token) => {
  const response = await axios.post(`${config.url}/api/listing/complain`, body, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const userApi = {
   getAllComplain,
  addNewComplain,
   deleteComplainById,
  editComplainbyId
};
export default userApi;
