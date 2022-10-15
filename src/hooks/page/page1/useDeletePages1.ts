import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {  DELETE_PAGES_0, DELETE_PAGES_1, DELETE_SITES,  graphQLClient } from "../../../../graphql";
import {  DeletePages, DeleteManySitesById, Page, Site,  } from "../../../../interfaces"; 



export const useDeletePages1 = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids}: DeletePages) => {
      const { deletePages1 } = await graphQLClient.request(DELETE_PAGES_1, {
        ids
      });
      return deletePages1;
    },
    {
      onSuccess:  (deletePages1) => {
        queryClient.setQueryData<Page[]>(["find-pages1-by-parent", parentId],  (old) => old!.filter((page) => deletePages1.indexOf(page._id) < 0));
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

