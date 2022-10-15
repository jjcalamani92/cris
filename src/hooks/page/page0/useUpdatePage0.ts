import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UPDATE_PAGE_0, graphQLClient } from "../../../../graphql";
import { CreatePage, Page, UpdatePage } from "../../../../interfaces";

export const useUpdatePage0 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, input }:  UpdatePage) => {
      const { updatePage0 } = await graphQLClient.request(UPDATE_PAGE_0, {
        id,
        input,
      });
      return updatePage0;
    },
    {
      onSuccess: async (updatePage0, {id, input}) => {
        const pageId = id
        queryClient.setQueryData<Page>(['find-page0', pageId], updatePage0);

      },
      onError: (error) => {
        console.log("error", error);
      },
    }
  );
};