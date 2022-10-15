import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {  DELETE_PAGES_0, DELETE_PAGES_1, DELETE_PAGES_2, DELETE_PAGES_3, DELETE_SITES,  graphQLClient } from "../../../../graphql";
import {  DeletePages, DeleteManySitesById, Page, Site,  } from "../../../../interfaces"; 



export const useDeletePages3 = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids}: DeletePages) => {
      const { deletePages3 } = await graphQLClient.request(DELETE_PAGES_3, {
        ids
      });
      return deletePages3;
    },
    {
      onSuccess:  (deletePages3) => {
        queryClient.setQueryData<Page[]>(["find-pages3-by-parent", parentId],  (old) => old!.filter((page) => deletePages3.indexOf(page._id) < 0));
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

