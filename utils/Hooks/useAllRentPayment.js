import { useState } from "react";
import { useQuery } from "react-query";
import { useAuthToken } from "../../contexts/authContext";
import rentPaymentApi from "../Api/rentPayment.api";

const useAllRentPayment = () => {
  const [allRentPayment, setAllRentPayment] = useState([]);
  const token = useAuthToken();
  const { isLoading } = useQuery({
    queryFn: () => rentPaymentApi.getAllRentPayment(token),
    queryKey: ["rentPayments"],
    onSuccess: (data) => {
      setAllRentPayment(data.data);
    },
  });
  return { allRentPayment, isLoading };
};

export default useAllRentPayment;
