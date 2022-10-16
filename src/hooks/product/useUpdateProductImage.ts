import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DELETE_SITE, graphQLClient, UPDATE_PRODUCT, UPDATE_PRODUCT_IMAGE, UPDATE_SITE } from "../../../graphql";
import { Product, Site, UpdateProductImage, UpdateSite } from "../../../interfaces";


export const useUpdateProductImage = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, input, type, uid}:UpdateProductImage) => {
      const { updateProductImage } = await graphQLClient.request<{updateProductImage: Product}>(UPDATE_PRODUCT_IMAGE, {
        id,
        input,
        type,
        uid,
      });
      return updateProductImage;
    },
    {
      onSuccess: async (updateProductImage, {id, input, type}) => {
        // const siteId = id
        // queryClient.invalidateQueries([`find-site`]);
        queryClient.setQueryData(['find-product', id, type], updateProductImage);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
