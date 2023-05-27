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
import { data } from "./makeData";
import { useMutation } from "react-query";
import userApi from "../../utils/Api/users.api";
import { useAuthToken } from "../../contexts/authContext";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import teamMemberApi from "../../utils/Api/teamMember.api";
import useTeamMember from "../../utils/Hooks/useTeamMember";

const TeamMember = () => {
const {teamMembers,isLoading}=useTeamMember()
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data);
  const queryClient = useQueryClient();
  const [validationErrors, setValidationErrors] = useState({});
  const token = useAuthToken();

  const { mutate: addNewTeamMember, isLoading: isLoading4 } = useMutation({
    mutationKey: ["addNewUser"],
    mutationFn: (data) => teamMemberApi.addNewTeamMember(data,token),
    onSuccess: (data) => {
      toast.success(`${data.data.name} added Successfully`);
      queryClient.invalidateQueries(["getAllTeamMembers"]);
    },
  });

  const { mutate: deleteUserById, isLoading: isLoading3 } = useMutation({
    mutationKey: ["deleteTeamMemberById"],
    mutationFn: (id) => {
      return teamMemberApi.deleteTeamMember(id,token)
    },
    onSuccess: () => {
      toast.success(`Team member deleted Successfully`);
      queryClient.invalidateQueries(["getAllTeamMembers"]);
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
      },
      {
        accessorKey: "title",
        header: "Title",
        size: 140,
      },
      {
        accessorKey: "facebookUrl",
        header: "Fackbook Url",
        size: 140,
      },
      {
        accessorKey: "pic.path",
        header: "Picture",
        size: 140,
        Cell: ({ renderedCellValue, row }) => (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <img
                alt="avatar"
                height={30}
                src={renderedCellValue}
                loading="lazy"
                style={{ borderRadius: '50%' }}
              />
            </Box>
          ),
      }
    ],
    []
  );

  return (
    <>
      <div className="main-content d-flex flex-column">
        <MaterialReactTable
          state={{
            isLoading: isLoading  || isLoading3 || isLoading4,
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
          data={teamMembers}
          editingMode="modal" //default
          enableColumnOrdering
          enableEditing
          onEditingRowSave={handleSaveRowEdits}
          onEditingRowCancel={handleCancelRowEdits}
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", gap: "1rem" }}> 
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
              Add New Team Member
            </Button>
          )}
        />
        <CreateNewAccountModal
          columns={columns}
          open={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onSubmit={handleCreateNewRow}
          addNewTeamMember={addNewTeamMember}
        />
      </div>
    </>
  );
};
//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, onClose, addNewTeamMember }) => {
  const handleSubmitHandler = (e) => {
    e.preventDefault()
    const formValue=new FormData(e.target)
    addNewTeamMember(formValue)
    onClose()
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Account</DialogTitle>
      <DialogContent>
            <form onSubmit={handleSubmitHandler} id="myform">
              <Stack
                sx={{
                  width: "100%",
                  padding: ".5rem",
                  minWidth: { xs: "300px", sm: "360px", md: "400px" },
                  gap: "1.5rem",
                }}
              >
                {[
                  { id: "name", title: "Name",type:"text" ,require:true},
                  { id: "title", title: "Title",type:"text" ,require:true},
                  { id: "facebookUrl", title: "Facebook Url",type:"url",require:true },
                  { id: "linkedinUrl", title: "Linkedin Url",type:"url" ,require:false},
                  { id: "twitterUrl", title: "Twitter Url",type:"url",require:false},
                ].map(({ id, title,type,require }) => (
                  <TextField
                    key={id}
                    label={ title??""}
                    name={id}
                    type={type}
                    required={require}
                  />
                ))}
             { [{ id: "picture",type:"file",require:true }].map(({ id, title,type,require }) => (
                  <input
                    key={id}
                    placeholder={title}
                    name={id}
                    type={type}
                    accept="image/*"
                    required={require}
                  />
                ))}
              </Stack>
            </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          type="submit"
          color="secondary"
          form="myform"
          variant="contained"
        >
          Add new Team Member
        </Button>
      </DialogActions>
    </Dialog>
  );
};



export default TeamMember;
