import React, { useCallback, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Box, IconButton, MenuItem, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { data } from "./makeData";
import { useMutation, useQuery, useQueryClient } from "react-query";

import scheduleVisitApi from "../../utils/Api/scheduleVisit.api";
import { useAuthToken } from "../../contexts/authContext";
import { toast } from "react-hot-toast";

const ScheduleVisit = () => {
  const [tableData, setTableData] = useState(() => data);
  const queryClient = useQueryClient();
  const [validationErrors, setValidationErrors] = useState({});
  const token = useAuthToken();
  const { isLoading, refetch } = useQuery({
    queryFn: () => scheduleVisitApi.getAllScheduleVisits(token),
    queryKey: ["scheduleVisits"],
    onSuccess: (data) => {
      setTableData(data.data);
    },
  });
  const { mutate, isLoading: isLoading2 } = useMutation({
    mutationKey: ["scdule_edit"],
    mutationFn: ({ id, data }) => {
      console.log(data);
      return scheduleVisitApi.updateNewScheduleVisit(data, id, token);
    },
    onSuccess: (data) => {
      toast.success(`${data.data.uid} edited Successfully`);
      queryClient.invalidateQueries(["scheduleVisits"]);
      refetch();
    },
  });
  const { mutate: mutate2, isLoading: isLoading3 } = useMutation({
    mutationKey: ["scdule_delete"],
    mutationFn: (id) => {
      return scheduleVisitApi.deleteScheduleVisit(id, token);
    },
    onSuccess: () => {
      toast.success(`deleted Successfully`);
      queryClient.invalidateQueries(["scheduleVisits"]);
      refetch();
    },
  });

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      console.log(values.completionState);
      mutate({
        id: values.uid,
        data: { completionState: values.completionState },
      });
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (!confirm(`Are you sure you want to delete ${row.getValue("uid")}`)) {
        return;
      }
      mutate2(row.getValue("uid"));
    },
    [mutate2]
  );

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
        accessorKey: "time",
        header: "Time",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "resident.name",
        header: "Resident",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "completionState",
        header: "Complete",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell, row }) => ({
          select: true,
          children: [
            "select any one",
            "scheduled",
            "completed",
            "canceled",
          ].map((state) => {
            const current = row.getValue("completionState");
            if (current !== state)
              return (
                <MenuItem
                  selected={state === "select any one"}
                  key={state}
                  value={state}
                >
                  {state}
                </MenuItem>
              );
          }),
        }),
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
          state={{ isLoading: isLoading || isLoading2 }}
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
          editingMode="modal" //default
          enableColumnOrdering
          enableEditing
          onEditingRowSave={handleSaveRowEdits}
          onEditingRowCancel={handleCancelRowEdits}
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Tooltip arrow placement="left" title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Delete">
                <IconButton
                  color="error"
                  onClick={() => {
                    handleDeleteRow(row);
                  }}
                >
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        />
      </div>
    </>
  );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
const validateAge = (age) => age >= 18 && age <= 50;

export default ScheduleVisit;
