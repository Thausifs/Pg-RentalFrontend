import { useState } from "react";
import { useQuery } from "react-query";
import teamMemberApi from "../Api/teamMember.api";

const useTeamMember = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const { refetch, isLoading } = useQuery({
    queryFn: teamMemberApi.getAllTeamMember,
    queryKey: "getAllTeamMembers",
    onSuccess: (data) => {
      setTeamMembers(data.data);
    },
  });
  return { teamMembers, refetch, isLoading };
};
export default useTeamMember;
