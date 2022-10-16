import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CREATE_PAGE_3, DELETE_PAGE_3, graphQLClient } from "../../../../graphql";
import { CreatePage, Page } from "../../../../interfaces";


export const useDeletePage3 = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => {
      const { deletePage3 } = await graphQLClient.request<{ deletePage3:string }>(DELETE_PAGE_3, {
        id,
      });
      return deletePage3;
    },
    {
      onSuccess: (deletePage3) => {
        queryClient.setQueryData<Page[]>(["find-pages3-by-parent", parentId], (old) => old!.filter((page) => page._id !== deletePage3))
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};