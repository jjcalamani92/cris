import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_PRODUCT,  DELETE_MANY_PRODUCT_BY_ID,  DELETE_PRODUCT,  graphQLClient } from "../../../graphql";
import { ConnectionArgs, CreateProduct, CreateSite, DeleteManyProductById, DeleteProduct, Product, Site, UpdateSite } from "../../../interfaces";
import { findProductsWithCursor } from "./useAllProductsWithCursor";


export const useDeleteManyProductById = (args: ConnectionArgs, siteId: string, type: string) => {
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
      onSuccess: async () => {
        // queryClient.invalidateQueries(["find-products-with-cursor", args, type, siteId],  await findProductsWithCursor(args, type, siteId));
        },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

