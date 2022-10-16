import { useMutation, useQueryClient } from "@tanstack/react-query";
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
        // const siteId = id
        // queryClient.invalidateQueries([`find-site`]);
        queryClient.setQueryData(['find-product', id, type], updateProduct);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
