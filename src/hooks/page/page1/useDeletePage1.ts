import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CREATE_PAGE_1, DELETE_PAGE_1, graphQLClient } from "../../../../graphql";
import { CreatePage, Page } from "../../../../interfaces";


export const useDeletePage1 = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => {
      const { deletePage1 } = await graphQLClient.request(DELETE_PAGE_1, {
        id,
      });
      return deletePage1;
    },
    {
      onSuccess: (deletePage1) => {
        queryClient.setQueryData<Page[]>(["find-pages1-by-parent", parentId], (old) => old!.filter((page) => page._id !== deletePage1))
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};