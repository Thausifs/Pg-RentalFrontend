import React, { useCallback, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useMutation } from "react-query";
import { useAuthToken } from "../../contexts/authContext";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import useCommentsByResidentId from "../../utils/Hooks/useCommentsByResidentId";
import commentApi from "../../utils/Api/comment.api";

const CommentTable = ({ residentId }) => {
  const { comments, isLoading } = useCommentsByResidentId(residentId);
  const queryClient = useQueryClient();
  const [validationErrors, setValidationErrors] = useState({});
  const token = useAuthToken();
  const { mutate: editComment, isLoading: isLoading2 } = useMutation({
    mutationKey: ["comment_edit"],
    mutationFn: ({ id, data }) => {
      return commentApi.editCommentById(id, data, token, residentId);
    },
    onSuccess: (data) => {
      toast.success(`Comment edited Successfully`);
      queryClient.invalidateQueries([`commentDataByResidentId ${residentId}`]);
    },
  });

  const { mutate: deleteCommentById, isLoading: isLoading3 } = useMutation({
    mutationKey: ["deleteCommentById"],
    mutationFn: (id) => {
      return commentApi.deleteCommentbyId(id, token, residentId);
    },
    onSuccess: () => {
      toast.success(`Comment deleted Successfully`);
      queryClient.invalidateQueries([`commentDataByResidentId ${residentId}`]);
    },
  });

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      editComment({ id: values.id, data: { content: values.content } });
      //send/receive api updates here, then refetch or update local table data for re-render
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (!confirm(`Are you sure you want to delete ${row.getValue("id")}`)) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      deleteCommentById(row.getValue("id"));
    },
    [deleteCommentById]
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
        accessorKey: "user.name",
        header: "User Name",
        size: 140,
        enableEditing: false,
      },
      {
        accessorKey: "content",
        header: "Content",
        size: 140,
        enableEditing: true,
      },
    ],
    []
  );

  return (
    <>
      <MaterialReactTable
        state={{
          isLoading: isLoading || isLoading2 || isLoading3,
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
        data={comments}
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
      />
    </>
  );
};

export default CommentTable;
