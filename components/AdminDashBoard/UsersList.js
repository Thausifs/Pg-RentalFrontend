import React, { useCallback, useMemo, useState } from "react";
import * as yup from "yup";
import MaterialReactTable from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { data, states } from "./makeData";
import useUsers from "../../utils/Hooks/useUsers";
import { useMutation } from "react-query";
import { Formik } from "formik";
import userApi from "../../utils/Api/users.api";
import { useAuthToken } from "../../contexts/authContext";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";

const UerList = () => {
  const { users, isLoading } = useUsers();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data);
  const queryClient = useQueryClient();
  const [validationErrors, setValidationErrors] = useState({});
  const token = useAuthToken();
  const { mutate: editUser, isLoading: isLoading2 } = useMutation({
    mutationKey: ["user_edit"],
    mutationFn: ({ id, data }) => {
      return userApi.editUserbyId(id, data, token);
    },
    onSuccess: (data) => {
      toast.success(`${data.data.name} edited Successfully`);
      queryClient.invalidateQueries(["getAllUsers"]);
    },
  });
  const { mutate: addNewUser, isLoading: isLoading4 } = useMutation({
    mutationKey: ["addNewUser"],
    mutationFn: (data) => userApi.addNewUser(data, token),
    onSuccess: (data) => {
      toast.success(`${data.data.name} added Successfully`);
      queryClient.invalidateQueries(["getAllUsers"]);
    },
  });

  const { mutate: deleteUserById, isLoading: isLoading3 } = useMutation({
    mutationKey: ["deleteUserById"],
    mutationFn: (id) => {
      return userApi.deleteUserById(id, token);
    },
    onSuccess: () => {
      toast.success(`User deleted Successfully`);
      queryClient.invalidateQueries(["getAllUsers"]);
      refetch();
    },
  });

  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      console.log(values);
      editUser({ id: values.id, data: values });
      //send/receive api updates here, then refetch or update local table data for re-render
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (!confirm(`Are you sure you want to delete ${row.getValue("name")}`)) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      deleteUserById(row.getValue("id"));
    },
    [deleteUserById]
  );

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === "email"
              ? validateEmail(event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors]
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "phoneNo",
        header: "Phone No",
        size: 140,
      },
      {
        accessorKey: "document_type",
        header: "Document Type",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "document_detail",
        header: "Document Detail",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },

      {
        accessorKey: "address",
        header: "Address",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "role",
        header: "Role",
        muiTableBodyCellEditTextFieldProps: {
          select: true, //change to select for a dropdown
          children: ["user", "admin"].map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          )),
        },
      },
    ],
    [getCommonEditTextFieldProps]
  );

  return (
    <>
      <div className="main-content d-flex flex-column">
        <MaterialReactTable
          state={{
            isLoading: isLoading || isLoading2 || isLoading3 || isLoading4,
          }}
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "center",
              },
              size: 120,
            },
          }}
          columns={columns}
          data={users}
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
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          renderTopToolbarCustomActions={() => (
            <Button
              color="secondary"
              onClick={() => setCreateModalOpen(true)}
              variant="contained"
            >
              Create New Account
            </Button>
          )}
        />
        <CreateNewAccountModal
          columns={columns}
          open={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onSubmit={handleCreateNewRow}
          addNewUser={addNewUser}
        />
      </div>
    </>
  );
};
const newUserDataValidation = yup.object().shape({
  name: yup.string().min(5).required("Name is Required"),
  phoneNo: yup.string().min(10).required("PhoneNo is Required"),
  document_type: yup.string().min(3).required("Document Type is Required"),
  document_detail: yup.string().min(3).required("Document Detail is Required"),
  address: yup.string().min(3).required("Address is Required"),
  email: yup.string().email().optional(),
});

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, onClose, addNewUser }) => {
  const handleSubmit = (values) => {
    if (values.email === "") {
      addNewUser({ ...values, email: undefined });
    } else {
      addNewUser(values);
    }
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Account</DialogTitle>
      <DialogContent>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            name: "",
            phoneNo: "",
            document_type: "",
            document_detail: "",
            email: "",
            address: "",
          }}
          validationSchema={newUserDataValidation}
        >
          {({ handleSubmit, handleChange, values, errors, setFieldValue }) => (
            <form onSubmit={handleSubmit} id="myform">
              <Stack
                sx={{
                  width: "100%",
                  padding: ".5rem",
                  minWidth: { xs: "300px", sm: "360px", md: "400px" },
                  gap: "1.5rem",
                }}
              >
                {[
                  { id: "name", title: "Name" },
                  { id: "phoneNo", title: "Phone No" },
                  { id: "document_type", title: "Document Type" },
                  { id: "document_detail", title: "Document Detail" },
                  { id: "email", title: "Email" },
                  { id: "address", title: "Address" },
                ].map(({ id, title }) => (
                  <TextField
                    key={id}
                    error={errors[id]}
                    label={errors[id] ?? title}
                    name={id}
                    onChange={handleChange}
                    value={values[id]}
                  />
                ))}
              </Stack>
            </form>
          )}
        </Formik>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          type="submit"
          color="secondary"
          form="myform"
          variant="contained"
        >
          Create New Account
        </Button>
      </DialogActions>
    </Dialog>
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

export default UerList;
