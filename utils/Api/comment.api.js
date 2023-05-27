import axios from "axios";
import config from "../config";

const getAllComment = async (listingId) => {
  const response = await axios.get(
    `${config.url}/api/listing/${listingId}/comment`
  );
  return response.data;
};
const editCommentById = async (id, body, token, residentId) => {
  const response = await axios.patch(
    `${config.url}/api/listing/${residentId}/comment/${id}`,
    body,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const deleteCommentbyId = async (id, token, residentId) => {
  const response = await axios.delete(
    `${config.url}/api/listing/${residentId}/comment/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const addNewComment = async (body, residentId, token) => {
  const response = await axios.post(
    `${config.url}/api/listing/${residentId}/comment`,
    body,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const commentApi = {
  getAllComment,
  addNewComment,
  deleteCommentbyId,
  editCommentById,
};
export default commentApi;
