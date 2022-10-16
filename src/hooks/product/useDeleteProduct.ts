import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_PRODUCT,  DELETE_PRODUCT,  graphQLClient } from "../../../graphql";
import { CreateProduct, CreateSite, DeleteProduct, Product, Site, UpdateSite } from "../../../interfaces";


export const useDeleteProduct = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, type}: DeleteProduct) => {
      const { deleteProduct } = await graphQLClient.request<{deleteProduct: string}>(DELETE_PRODUCT, {
        id,
        type,
      });
      return deleteProduct;
    },
    {
      onSuccess: async (deleteProduct) => {
        // console.log(deleteProduct);
        // console.log(parentId);
        
        await queryClient.setQueryData<Product[]>(['find-all-products-by-parent', parentId], (old) => old!.filter((product) => product._id !== deleteProduct));
        
        
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

