import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CREATE_PAGE_0, DELETE_PAGE_0, graphQLClient } from "../../../../graphql";
import { CreatePage, Page } from "../../../../interfaces";


export const useDeletePage0 = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => {
      const { deletePage0 } = await graphQLClient.request<{ deletePage0: string }>(DELETE_PAGE_0, {
        id,
      });
      return deletePage0;
    },
    {
      onSuccess: (deletePage0) => {
        queryClient.setQueryData<Page[]>(["find-pages0-by-parent", parentId], (old) => old!.filter((page) => page._id !== deletePage0))
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};