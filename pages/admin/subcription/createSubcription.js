import { Button } from "@mui/material";
import Select from "react-select";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import useUsers from "../../../utils/Hooks/useUsers";
import useListing from "../../../utils/Hooks/useListing";
import Loading from "../../../components/Shared/Loading";

import { useEffect, useMemo, useState } from "react";
import { Formik } from "formik";
import { useAuthToken } from "../../../contexts/authContext";
import rentPaymtApi from "../../../utils/Api/rentPayment.api.js";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import toast from "react-hot-toast";

function CreateSubcription() {
  const { users, isLoading } = useUsers();
  const router = useRouter();
  const token = useAuthToken();
  const queryClient = useQueryClient();
  const { listing, isLoading: isLoading2 } = useListing(
    undefined,
    undefined,
    1000
  );
  const { mutate: addNewRentPayment, isLoading: isLoading3 } = useMutation({
    mutationKey: ["addNewUser"],
    mutationFn: (data) => rentPaymtApi.addNewRentPayment(data, token),
    onSuccess: () => {
      toast.success(`New Rent Subcription added Successfully`);
      queryClient.invalidateQueries(["rentPayments"]);
      router.push("/admin/rentPayment");
    },
    onError:()=>{
      toast.error("There is already a subcription exist which is not cancel")
      router.push("/admin/rentPayment");
    }
  });

  const [residentId, setResidentId] = useState("");

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [token, router]);

  const usersSelectOption = useMemo(() => {
    const selectOption = users.map((ele) => ({
      value: ele.id,
      label: ele.name+" "+ele.role+"",
      color: "black",
    }));
    return selectOption;
  }, [users]);
  const SelectHotelOption = useMemo(() => {
    const selectOption = listing.map((ele) => ({
      value: ele.id,
      label: ele.name,
    }));
    return selectOption;
  }, [listing]);
  const SelectAvailabilityOption = useMemo(() => {
    const filter = listing.find((ele) => ele.id === residentId);

    let options = [];
    if (filter) {
      options = filter?.AvailAbility?.map((ele) => ({
        value: ele.uid,
        label: ele.roomType.typeOfRoom,
      }));
    }

    return options;
  }, [listing, residentId]);
  const onSubmitHandler = (values) => {
    if (values.availabilityId === "") {
      toast.error("Plase select one AvailAbility");
      return;
    }
    const { availabilityId, userId } = values;
    addNewRentPayment({ availabilityId, userId });
  };

  if (isLoading || isLoading2 || isLoading3) {
    return <Loading />;
  }

  return (
    <div className="container">
      <Formik
        onSubmit={onSubmitHandler}
        initialValues={{
          residentId: "",
          userId: "",
          availabilityId: "",
        }}
      >
        {({ handleSubmit, values, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="column" sx={{ marginBottom: 4 }}>
              <Typography>Add New Subcription</Typography>
              <Select
                className="basic-single"
                classNamePrefix="select"
                name="color"
                onChange={(select) => {
                  setFieldValue("userId", select.value);
                }}
                isClearable={true}
                options={usersSelectOption}
              />
              <Select
                className="basic-single"
                classNamePrefix="select"
                name="color"
                isDisabled={values.userId === ""}
                isClearable={true}
                onChange={(select) => {
                  setFieldValue("residentId", select.value);
                  setResidentId(select.value);
                }}
                options={SelectHotelOption}
              />
              <Select
                className="basic-single"
                classNamePrefix="select"
                name="color"
                isDisabled={values.residentId === "" || values.userId === ""}
                isClearable={true}
                options={SelectAvailabilityOption}
                onChange={(select) => {
                  console.log(select.value);
                  setFieldValue("availabilityId", select.value);
                }}
              />
              <Button variant="outlined" color="secondary" type="submit">
                Add New Subcription
              </Button>
            </Stack>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default CreateSubcription;
