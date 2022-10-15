import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DELETE_SITE, graphQLClient, UPDATE_FOOD, UPDATE_SITE } from "../../../graphql";
import { Food, Site, UpdateFood, UpdateProduct, UpdateSite } from "../../../interfaces";


export const useUpdateFood = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, input, type}:UpdateFood) => {
      const { updateFood } = await graphQLClient.request(UPDATE_FOOD, {
        id,
        input,
        type
      });
      return updateFood;
    },
    {
      onSuccess: async (updateFood, {id, input, type}) => {
        // const siteId = id
        // queryClient.invalidateQueries([`find-site`]);
        queryClient.setQueryData<Food>(['find-food', id, type], updateFood);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
