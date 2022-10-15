import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_FOOD, CREATE_PRODUCT,  graphQLClient } from "../../../graphql";
import { CreateFood, CreateProduct, CreateSite, Food, Product, Site, UpdateSite } from "../../../interfaces";


export const useCreateFood = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ input, type}: CreateFood) => {
      const { createFood } = await graphQLClient.request(CREATE_FOOD, {
        input,
        type,
      });
      return createFood;
    },
    {
      onSuccess: async (createFood) => {
        // console.log(createFood);
        
        queryClient.setQueryData<Food[]>(['find-all-foods-by-parent', parentId], (old) => [...old!, createFood]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

