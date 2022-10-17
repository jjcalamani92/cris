import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { CREATE_PRODUCT,  graphQLClient } from "../../../graphql";
import { CreateProduct, CreateSite, Product, Site, UpdateSite } from "../../../interfaces";


export const useCreateProduct = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ input, type}: CreateProduct) => {
      const { createProduct } = await graphQLClient.request<{createProduct: Product}>(CREATE_PRODUCT, {
        input,
        type,
      });
      return createProduct;
    },
    {
      onSuccess: async (createProduct) => {
        queryClient.setQueryData<Product[]>(['find-all-products-by-parent', parentId], (old) => [...old!, createProduct]);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Created Product",
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

