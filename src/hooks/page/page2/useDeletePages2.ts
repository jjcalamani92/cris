import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {  DELETE_PAGES_0, DELETE_PAGES_1, DELETE_PAGES_2, DELETE_SITES,  graphQLClient } from "../../../../graphql";
import {  DeletePages, DeleteManySitesById, Page, Site,  } from "../../../../interfaces"; 



export const useDeletePages2 = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids}: DeletePages) => {
      const { deletePages2 } = await graphQLClient.request(DELETE_PAGES_2, {
        ids
      });
      return deletePages2;
    },
    {
      onSuccess:  (deletePages2) => {
        queryClient.setQueryData<Page[]>(["find-pages2-by-parent", parentId],  (old) => old!.filter((page) => deletePages2.indexOf(page._id) < 0));
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

