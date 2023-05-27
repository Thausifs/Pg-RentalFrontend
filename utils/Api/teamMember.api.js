import axios from "axios";
import config from "../config";

const getAllTeamMember = async (token) => {
  const response = await axios.get(`${config.url}/api/teamMember`,);
  return response.data;
};
const addNewTeamMember = async (body,token) => {
  const response = await axios.post(
    `${config.url}/api/teamMember`,
    body,
    {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
  );
  return response.data;
};

const deleteTeamMember = async (id, token) => {
  const response = await axios.delete(
    `${config.url}/api/teamMember/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const teamMemberApi = {
  getAllTeamMember,
  addNewTeamMember,
  deleteTeamMember,
};
export default teamMemberApi;
