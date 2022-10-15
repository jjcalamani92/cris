import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_PRODUCT,  graphQLClient } from "../../../graphql";
import { CreateProduct, CreateSite, Product, Site, UpdateSite } from "../../../interfaces";


export const useCreateProduct = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ input, type}: CreateProduct) => {
      const { createProduct } = await graphQLClient.request(CREATE_PRODUCT, {
        input,
        type,
      });
      return createProduct;
    },
    {
      onSuccess: async (createProduct) => {
        // console.log(createProduct);
        
        queryClient.setQueryData<Product[]>(['find-all-products-by-parent', parentId], (old) => [...old!, createProduct]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

