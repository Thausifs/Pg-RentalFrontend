import axios from "axios";
import config from "../config";

const getAllScheduleVisits = async (token) => {
  const response = await axios.get(`${config.url}/api/listing/scheduleVisit`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
const addNewScheduleVisit = async (body) => {
  const response = await axios.post(
    `${config.url}/api/listing/scheduleVisit`,
    body
  );
  return response.data;
};
const updateNewScheduleVisit = async (body, id, token) => {
  const response = await axios.patch(
    `${config.url}/api/listing/scheduleVisit/${id}`,
    body,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
const deleteScheduleVisit = async (id, token) => {
  const response = await axios.delete(
    `${config.url}/api/listing/scheduleVisit/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const scheduleVisitApi = {
  getAllScheduleVisits,
  addNewScheduleVisit,
  updateNewScheduleVisit,
  deleteScheduleVisit,
};
export default scheduleVisitApi;
