import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { UPDATE_PAGE_0, graphQLClient } from "../../../../graphql";
import { CreatePage, Page, UpdatePage } from "../../../../interfaces";

export const useUpdatePage0 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, input }:  UpdatePage) => {
      const { updatePage0 } = await graphQLClient.request<{ updatePage0: Page } >(UPDATE_PAGE_0, {
        id,
        input,
      });
      return updatePage0;
    },
    {
      onSuccess: async (updatePage0, {id, input}) => {
        const pageId = id
        queryClient.setQueryData(['find-page0', pageId], updatePage0);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Page",
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