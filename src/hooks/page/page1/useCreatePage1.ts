import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Swal from "sweetalert2";
import { CREATE_PAGE_1, graphQLClient } from "../../../../graphql";
import { CreatePage, Page } from "../../../../interfaces";

export const useCreatePage1 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreatePage) => {
      const { createPage1 } = await graphQLClient.request<{
        createPage1: Page;
      }>(CREATE_PAGE_1, {
        input,
      });
      return createPage1;
    },
    {
      onSuccess: async (createPage1) => {
        const parentId = createPage1.parent;
        queryClient.setQueryData<Page[]>(
          ["find-pages1-by-parent", parentId],
          (old) => [...old!, createPage1]
        );
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
