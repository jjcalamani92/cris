import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UPDATE_PAGE_3, graphQLClient } from "../../../../graphql";
import { Page, UpdatePage } from "../../../../interfaces";

export const useUpdatePage3 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, input }:  UpdatePage) => {
      const { updatePage3 } = await graphQLClient.request(UPDATE_PAGE_3, {
        id,
        input,
      });
      return updatePage3;
    },
    {
      onSuccess: async (updatePage3, {id, input}) => {
        const pageId = id
        queryClient.setQueryData<Page>(['find-page3', pageId], updatePage3);

      },
      onError: (error) => {
        console.log("error", error);
      },
    }
  );
};