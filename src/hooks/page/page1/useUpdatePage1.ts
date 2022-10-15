import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UPDATE_PAGE_1, graphQLClient } from "../../../../graphql";
import { Page, UpdatePage } from "../../../../interfaces";

export const useUpdatePage1 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, input }:  UpdatePage) => {
      const { updatePage1 } = await graphQLClient.request(UPDATE_PAGE_1, {
        id,
        input,
      });
      return updatePage1;
    },
    {
      onSuccess: async (updatePage1, {id, input}) => {
        const pageId = id
        queryClient.setQueryData<Page>(['find-page1', pageId], updatePage1);

      },
      onError: (error) => {
        console.log("error", error);
      },
    }
  );
};