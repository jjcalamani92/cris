import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { graphQLClient , DELETE_ARTICLE} from "../../../graphql";



export const deleteArticle = async (_id:string) => {
  const { deleteArticle } = await graphQLClient.request(DELETE_ARTICLE, {
    _id,
  });
  return deleteArticle;
}

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();
  return useMutation(
    deleteArticle,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`find-page0-by-slug`]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};