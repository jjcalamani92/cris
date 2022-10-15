import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CREATE_PAGE_2, DELETE_PAGE_2, graphQLClient } from "../../../../graphql";
import { CreatePage, Page } from "../../../../interfaces";


export const useDeletePage2 = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => {
      const { deletePage2 } = await graphQLClient.request(DELETE_PAGE_2, {
        id,
      });
      return deletePage2;
    },
    {
      onSuccess: (deletePage2) => {
        queryClient.setQueryData<Page[]>(["find-pages2-by-parent", parentId], (old) => old!.filter((page) => page._id !== deletePage2))
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};