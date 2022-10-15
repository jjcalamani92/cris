import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {  DELETE_PAGES_0, DELETE_SITES,  graphQLClient } from "../../../../graphql";
import {  DeletePages, DeleteManySitesById, Page, Site,  } from "../../../../interfaces"; 



export const useDeletePages0 = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids}: DeletePages) => {
      const { deletePages0 } = await graphQLClient.request(DELETE_PAGES_0, {
        ids
      });
      return deletePages0;
    },
    {
      onSuccess:  (deletePages0) => {
        queryClient.setQueryData<Page[]>(["find-pages0-by-parent", parentId],  (old) => old!.filter((page) => deletePages0.indexOf(page._id) < 0));
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

