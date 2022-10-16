import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CREATE_PAGE_0, graphQLClient } from "../../../../graphql";
import { CreatePage, Page } from "../../../../interfaces";

export const useCreatePage0 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreatePage) => {
      const { createPage0 } = await graphQLClient.request<{ createPage0: Page }>(CREATE_PAGE_0, {
        input,
      });
      return createPage0;
    },
    {
      onSuccess: async (createPage0) => {
        const parentId = createPage0.parent
        queryClient.setQueryData<Page[]>(["find-pages0-by-parent", parentId], (old) => [...old!, createPage0]);
      },
      onError: (error) => {
        console.log("error", error);
      },
    }
  );
};