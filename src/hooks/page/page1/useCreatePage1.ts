import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CREATE_PAGE_1, graphQLClient } from "../../../../graphql";
import { CreatePage, Page } from "../../../../interfaces";

export const useCreatePage1 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreatePage) => {
      const { createPage1 } = await graphQLClient.request(CREATE_PAGE_1, {
        input,
      });
      return createPage1;
    },
    {
      onSuccess: async (createPage1) => {
        const parentId = createPage1.parent
        queryClient.setQueryData<Page[]>(["find-pages1-by-parent", parentId], (old) => [...old!, createPage1]);
      },
      onError: (error) => {
        console.log("error", error);
      },
    }
  );
};