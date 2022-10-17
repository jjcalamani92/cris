import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { DELETE_SITE, graphQLClient, UPDATE_PRODUCT, UPDATE_SITE } from "../../../graphql";
import { Product, Site, UpdateProduct, UpdateSite } from "../../../interfaces";


export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, input, type}:UpdateProduct) => {
      const { updateProduct } = await graphQLClient.request<{updateProduct: Product}>(UPDATE_PRODUCT, {
        id,
        input,
        type
      });
      return updateProduct;
    },
    {
      onSuccess: async (updateProduct, {id, input, type}) => {
        queryClient.setQueryData(['find-product', id, type], updateProduct);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Product",
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
