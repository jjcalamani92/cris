import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
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
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Created Page",
          showConfirmButton: false,
          timer: 1000,
        });
      },
      onError: (error: { response: { errors: [{ message: string }] } }) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.errors[0].message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      },
      
    }
  );
};