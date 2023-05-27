import axios from "axios";
import config from "../config";

const getAllRentPayment = async (token) => {
  const response = await axios.get(`${config.url}/api/listing/rentPayment`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
const addNewRentPayment = async (body, token) => {
  const response = await axios.post(
    `${config.url}/api/listing/rentPayment`,
    body,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const updateRentPayment = async (body, id, token) => {
  const response = await axios.patch(
    `${config.url}/api/listing/rentPayment/${id}`,
    body,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const featureApi = {
  getAllRentPayment,
  addNewRentPayment,
  updateRentPayment,
};
export default featureApi;
