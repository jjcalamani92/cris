import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { CREATE_PAGE_2, graphQLClient } from "../../../../graphql";
import { CreatePage, Page } from "../../../../interfaces";

export const useCreatePage2 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreatePage) => {
      const { createPage2 } = await graphQLClient.request<{ createPage2:Page }>(CREATE_PAGE_2, {
        input,
      });
      return createPage2;
    },
    {
      onSuccess: async (createPage2) => {
        const parentId = createPage2.parent
        queryClient.setQueryData<Page[]>(["find-pages2-by-parent", parentId], (old) => [...old!, createPage2]);
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