import { useState } from "react";
import { useQuery } from "react-query";
import commentApi from "../Api/comment.api";

const useCommentsByResidentId = (id) => {
  const [comments, setComments] = useState([]);
  const { isLoading } = useQuery({
    queryFn: () => commentApi.getAllComment(id),
    queryKey: [`commentDataByResidentId ${id}`],
    onSuccess: (data) => {
      setComments(data.data);
    },
  });
  return { comments, isLoading };
};

export default useCommentsByResidentId;
