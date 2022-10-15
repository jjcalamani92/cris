import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_PRODUCT,  DELETE_FOOD,  DELETE_PRODUCT,  graphQLClient } from "../../../graphql";
import { CreateProduct, CreateSite, DeleteProduct, Food, Product, Site, DeleteFood } from "../../../interfaces";


export const useDeleteFood = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, type}: DeleteFood) => {
      const { deleteFood } = await graphQLClient.request(DELETE_FOOD, {
        id,
        type,
      });
      return deleteFood;
    },
    {
      onSuccess: async (deleteFood) => {
        // console.log(deleteFood);
        // console.log(parentId);
        
        await queryClient.setQueryData<Food[]>(['find-all-foods-by-parent', parentId], (old) => old!.filter((food) => food._id !== deleteFood));
        
        
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

