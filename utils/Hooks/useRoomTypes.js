import { useState } from "react";
import { useQuery } from "react-query";
import roomTypeAPi from "../Api/roomType.api";

const useRoomTypes = () => {
  const [roomTypes, setRoomTypes] = useState([]);
  const { refetch, isLoading } = useQuery({
    queryFn: roomTypeAPi.getAllRoomType,
    queryKey: "getAllRoomType",
    onSuccess: (data) => {
      setRoomTypes(data.data);
    },
  });
  return { roomTypes, refetch, isLoading };
};

export default useRoomTypes;
