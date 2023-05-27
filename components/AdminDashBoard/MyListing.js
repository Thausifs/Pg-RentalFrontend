import Link from "next/link";
import useListingForAdmin from "../../utils/Hooks/useAllListingForAdmin";
import DashboardListingArea from "../Dashboard/DashboardListingArea";
import Loading from "../Shared/Loading";
import { useMutation, useQueryClient } from "react-query";
import listingApi from "../../utils/Api/listing.api";
import { toast } from "react-hot-toast";
import { useAuthToken } from "../../contexts/authContext";

const MyListing = () => {
  const { listing, isLoading } = useListingForAdmin();
  const token = useAuthToken();
  const queryClient = useQueryClient();
  const { mutate: deleteListingById, isLoading: isLoading2 } = useMutation({
    mutationKey: ["deleteListingById"],
    mutationFn: (id) => {
      return listingApi.deleteListingById(id, token);
    },
    onSuccess: () => {
      toast.success(`Listing deleted Successfully`);
      queryClient.invalidateQueries(["getAllLisingAmin"]);
      refetch();
    },
  });;

  return (
    <>
      <div className="main-content d-flex flex-column">
        <div className="breadcrumb-area">
          <h1>My Listing</h1>
          <ol className="breadcrumb">
            <li className="item">
              <Link href="/admin">
                <a>Home</a>
              </Link>
            </li>
            <li className="item">
              <Link href="/admin">
                <a>Dashboard</a>
              </Link>
            </li>
            <li className="item">
              <Link href="/admin/my-listing">
                <a>My Listing</a>
              </Link>
            </li>
          </ol>
        </div>
        {isLoading ||isLoading2? (
          <Loading />
        ) : (
          <DashboardListingArea listing={listing} deleteListingById={deleteListingById} isLoading={isLoading} />
        )}
      </div>
    </>
  );
};

export default MyListing;
