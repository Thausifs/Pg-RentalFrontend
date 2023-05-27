import React, { useCallback, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Box, IconButton, MenuItem, Tooltip } from "@mui/material";
import { data } from "./makeData";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { useAuthToken } from "../../contexts/authContext";

import advanceBookingApi from "../../utils/Api/advanceBooking.api";

const AdvanceBooking = () => {
  const [tableData, setTableData] = useState(() => data);
  const token = useAuthToken();
  const { isLoading, refetch } = useQuery({
    queryFn: () => advanceBookingApi.getAllAdvanceBooking(token),
    queryKey: ["advanceBookings"],
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
        accessorKey: "user_name",
        header: "Name",
        size: 140,
        enableEditing: false,
      },

      {
        accessorKey: "phoneNo",
        header: "Phone No",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "isPaymentSuccess",
        header: "Payment Success",
        enableEditing: false,
        size: 80,
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={(theme) => ({
              backgroundColor:
                cell.getValue() !== true
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
        accessorKey: "resident.name",
        header: "Resident",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "razorpayOrderId",
        header: "Rezorpay Order Id",
        size: 80,
      },
      {
        accessorKey: "razorpay_payment_id",
        header: "Rezorpay Payment Id",
        size: 80,
      },

      {
        accessorKey: "date",
        header: "Date",
        enableEditing: false,
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
        />
      </div>
    </>
  );
};

export default AdvanceBooking;
