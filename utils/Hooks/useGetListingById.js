import { useState } from "react";
import { useQuery } from "react-query";
import listingApi from "../Api/listing.api";

const useGetListingById = (id) => {
  const [listing, setListing] = useState(undefined);

  const { isLoading } = useQuery({
    queryFn: () => listingApi.getListingById(id),
    queryKey: [`listingDetailById ${id}`],
    onSuccess: (data) => {
      setListing(data.data);
    },
  });
  return { listing, isLoading };
};

export default useGetListingById;
