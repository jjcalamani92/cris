import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DELETE_SITE, graphQLClient, UPDATE_FOOD_IMAGE, UPDATE_PRODUCT, UPDATE_PRODUCT_IMAGE, UPDATE_SITE } from "../../../graphql";
import { Food, Site, UpdateProductImage, UpdateSite } from "../../../interfaces";


export const useUpdateFoodImage = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, input, type, uid}:UpdateProductImage) => {
      const { updateFoodImage } = await graphQLClient.request<{ updateFoodImage: Food }>(UPDATE_FOOD_IMAGE, {
        id,
        input,
        type,
        uid,
      });
      return updateFoodImage;
    },
    {
      onSuccess: async (updateFoodImage, {id, input, type}) => {
        queryClient.setQueryData(['find-food', id, type], updateFoodImage);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
