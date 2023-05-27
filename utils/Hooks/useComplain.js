import { useState } from "react";
import { useQuery } from "react-query";

import { useAuthToken } from "../../contexts/authContext";
import complainApi from "../Api/complain.api";

const useComplains = () => {
  const token = useAuthToken();
  const [complains, setComplains] = useState([]);
  const { refetch, isLoading } = useQuery({
    queryFn: () => complainApi.getAllComplain(token),
    queryKey: "getAllComplain",
    onSuccess: (data) => {
      setComplains(data.data);
    },
  });
  return { complains, refetch, isLoading };
};
export default useComplains;
