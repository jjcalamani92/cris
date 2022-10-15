import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CREATE_PAGE_2, graphQLClient } from "../../../../graphql";
import { CreatePage, Page } from "../../../../interfaces";

export const useCreatePage2 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreatePage) => {
      const { createPage2 } = await graphQLClient.request(CREATE_PAGE_2, {
        input,
      });
      return createPage2;
    },
    {
      onSuccess: async (createPage2) => {
        const parentId = createPage2.parent
        queryClient.setQueryData<Page[]>(["find-pages2-by-parent", parentId], (old) => [...old!, createPage2]);
      },
      onError: (error) => {
        console.log("error", error);
      },
    }
  );
};