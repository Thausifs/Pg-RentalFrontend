import axios from "axios";
import config from "../config";

const getAllAdvanceBooking = async (token) => {
  const response = await axios.get(`${config.url}/api/listing/advanceBooking`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
const addNewAdanceBooking = async (body) => {
  const response = await axios.post(
    `${config.url}/api/listing/advanceBooking`,
    body
  );
  return response.data;
};
const updateAdvanceBooing = async (body, id) => {
  const response = await axios.patch(
    `${config.url}/api/listing/advanceBooking/${id}`,
    body
  );
  return response.data;
};

const advanceBookingApi = {
  getAllAdvanceBooking,
  addNewAdanceBooking,
  updateAdvanceBooing,
};
export default advanceBookingApi;
