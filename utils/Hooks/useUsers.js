import { useState } from "react";
import { useQuery } from "react-query";

import { useAuthToken } from "../../contexts/authContext";
import userApi from "../Api/users.api";

const useUsers = () => {
  const token = useAuthToken();
  const [users, setUsers] = useState([]);
  const { refetch, isLoading } = useQuery({
    queryFn: () => userApi.getAllUsers(token),
    queryKey: "getAllUsers",
    onSuccess: (data) => {
      setUsers(data.data);
    },
  });
  return { users, refetch, isLoading };
};
export default useUsers;
