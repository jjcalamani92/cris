import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { UPDATE_PAGE_2, graphQLClient } from "../../../../graphql";
import { Page, UpdatePage } from "../../../../interfaces";

export const useUpdatePage2 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, input }:  UpdatePage) => {
      const { updatePage2 } = await graphQLClient.request<{updatePage2: Page}>(UPDATE_PAGE_2, {
        id,
        input,
      });
      return updatePage2;
    },
    {
      onSuccess: async (updatePage2, {id, input}) => {
        const pageId = id
        queryClient.setQueryData(['find-page2', pageId], updatePage2);
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