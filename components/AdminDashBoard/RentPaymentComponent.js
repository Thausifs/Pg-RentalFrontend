import React, { useCallback, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Box, IconButton, MenuItem, Tooltip, Button } from "@mui/material";
import { data } from "./makeData";
import { useQuery } from "react-query";

import rentPaymentApi from "../../utils/Api/rentPayment.api.js";
import { useRouter } from "next/router";
import { useAuthToken } from "../../contexts/authContext";

const RentPaymentComponent = () => {
  const [tableData, setTableData] = useState(() => data);
  const router = useRouter();
  const token = useAuthToken();
  const { isLoading } = useQuery({
    queryFn: () => rentPaymentApi.getAllRentPayment(token),
    queryKey: ["rentPayments"],
    onSuccess: (data) => {
      setTableData(data.data);
      console.log(data);
    },
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: "uid",
        header: "ID",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: "user.name",
        header: "User Name",
        size: 140,
        enableEditing: false,
      },

      {
        accessorKey: "user.phoneNo",
        header: "Phone No",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "status",
        header: "Status",
        enableEditing: false,
        size: 80,
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={(theme) => ({
              backgroundColor:
                cell.getValue() !== "CREATED"
                  ? theme.palette.error.dark
                  : theme.palette.success.dark,

              borderRadius: "0.25rem",
              color: "#fff",
              maxWidth: "9ch",
              p: "0.25rem",
            })}
          >
            {cell.getValue()?.toLocaleString?.("en-US", {
              style: "currency",

              currency: "USD",

              minimumFractionDigits: 0,

              maximumFractionDigits: 0,
            })}
          </Box>
        ),
      },
      {
        accessorKey: "availability.resident.name",
        header: "Resident",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "planId",
        header: "Rezorpay Plan Id",
        size: 80,
      },
      {
        accessorKey: "razorpayPaymentId",
        header: "Rezorpay Payment Id",
        size: 80,
      },
    ],
    []
  );

  return (
    <>
      <div className="main-content d-flex flex-column">
        <MaterialReactTable
          state={{ isLoading }}
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "center",
              },
              size: 120,
            },
          }}
          columns={columns}
          data={tableData}
          enableColumnOrdering
          renderTopToolbarCustomActions={() => (
            <Button
              color="secondary"
              onClick={() => {
                router.push("/admin/subcription/createSubcription");
              }}
              variant="contained"
            >
              Create New Rent Payment
            </Button>
          )}
        />
      </div>
    </>
  );
};

export default RentPaymentComponent;
