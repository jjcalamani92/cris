import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_PRODUCT,  DELETE_MANY_PRODUCT_BY_ID,  DELETE_PRODUCT,  graphQLClient } from "../../../graphql";
import { ConnectionArgs, CreateProduct, CreateSite, DeleteManyProductById, DeleteProduct, Product, Site, UpdateSite } from "../../../interfaces";
import { findAllProductsByParent } from "./useAllProductsByParent";
import { findProductsWithCursor } from "./useAllProductsWithCursor";


export const useDeleteProducts = (parentId:string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids, type}: DeleteManyProductById) => {
      const { deleteProductsById } = await graphQLClient.request(DELETE_MANY_PRODUCT_BY_ID, {
        ids,
        type,
      });
      return deleteProductsById;
    },
    {
      onSuccess: (deleteProductsById) => {
        // queryClient.invalidateQueries(["find-products-with-cursor", args, type, siteId],  await findProductsWithCursor(args, type, siteId));
        queryClient.setQueryData<Product[]>(["find-all-products-by-parent", parentId],  (old) => old!.filter((product) => deleteProductsById.indexOf(product._id) < 0));

        // queryClient.invalidateQueries(["find-all-products-by-parent", parentId], findAllProductsByParent(parentId));
        },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

