import axios from "axios";
import config from "../config";

const getAllRoomType = async () => {
  const response = await axios.get(`${config.url}/api/listing/roomType`);
  return response.data;
};
const addNewRoomType = async (body, token) => {
  const response = await axios.post(
    `${config.url}/api/listing/roomType`,
    body,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const deleteRoomTypeById = async (id, token) => {
  const response = await axios.delete(
    `${config.url}/api/listing/roomType/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const roomTypeAPi = {
  getAllRoomType,
  addNewRoomType,
  deleteRoomTypeById,
};
export default roomTypeAPi;
