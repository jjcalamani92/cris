import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UPDATE_PAGE_2, graphQLClient } from "../../../../graphql";
import { Page, UpdatePage } from "../../../../interfaces";

export const useUpdatePage2 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, input }:  UpdatePage) => {
      const { updatePage2 } = await graphQLClient.request(UPDATE_PAGE_2, {
        id,
        input,
      });
      return updatePage2;
    },
    {
      onSuccess: async (updatePage2, {id, input}) => {
        const pageId = id
        queryClient.setQueryData<Page>(['find-page2', pageId], updatePage2);

      },
      onError: (error) => {
        console.log("error", error);
      },
    }
  );
};