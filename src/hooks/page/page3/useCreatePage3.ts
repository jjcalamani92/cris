import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CREATE_PAGE_3, graphQLClient } from "../../../../graphql";
import { CreatePage, Page } from "../../../../interfaces";

export const useCreatePage3 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreatePage) => {
      const { createPage3 } = await graphQLClient.request<{ createPage3:Page }>(CREATE_PAGE_3, {
        input,
      });
      return createPage3;
    },
    {
      onSuccess: async (createPage3) => {
        const parentId = createPage3.parent
        queryClient.setQueryData<Page[]>(["find-pages3-by-parent", parentId], (old) => [...old!, createPage3]);
      },
      onError: (error) => {
        console.log("error", error);
      },
    }
  );
};