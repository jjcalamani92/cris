import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_PRODUCT,  DELETE_MANY_FOOD_BY_ID,  DELETE_MANY_PRODUCT_BY_ID,  DELETE_PRODUCT,  graphQLClient } from "../../../graphql";
import { ConnectionArgs, CreateProduct, CreateSite, DeleteManyFoodById, DeleteManyProductById, DeleteProduct, Food, Product, Site, UpdateSite } from "../../../interfaces";



export const useDeleteFoods = (parentId:string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids, type}: DeleteManyFoodById) => {
      const { deleteFoodsById } = await graphQLClient.request<{ deleteFoodsById: string[] }>(DELETE_MANY_FOOD_BY_ID, {
        ids,
        type,
      });
      return deleteFoodsById;
    },
    {
      onSuccess: (deleteFoodsById) => {
        // queryClient.invalidateQueries(["find-products-with-cursor", args, type, siteId],  await findFoodsWithCursor(args, type, siteId));
        queryClient.setQueryData<Food[]>(["find-all-foods-by-parent", parentId],  (old) => old!.filter((food) => deleteFoodsById.indexOf(food._id) < 0));

        // queryClient.invalidateQueries(["find-all-products-by-parent", parentId], findAllProductsByParent(parentId));
        },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

