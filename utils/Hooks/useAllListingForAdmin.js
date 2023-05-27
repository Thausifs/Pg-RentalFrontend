import { useState } from "react";
import { useQuery } from "react-query";
import { useAuthToken } from "../../contexts/authContext";
import listingAPi from "../Api/listing.api";

const useListingForAdmin = (city) => {
  const [listing, setListings] = useState([]);
  const [page, setPageNo] = useState(1);
  const [limit, setLimit] = useState(1000000);
  const token = useAuthToken();
  const { refetch, isLoading } = useQuery({
    queryFn: () => listingAPi.getAllListingForAdmin(city, limit, page, token),
    queryKey: "getAllLisingAmin",
    onSuccess: (data) => {
      setListings(data.data);
    },
  });
  return { listing, refetch, isLoading };
};
export default useListingForAdmin;
