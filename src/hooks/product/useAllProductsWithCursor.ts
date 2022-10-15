import { useQuery } from "@tanstack/react-query";
import { ConnectionArgs, ListResponse, Product } from "../../../interfaces";
import {  FIND_PRODUCTS_WITH_CURSOR, graphQLClient } from '../../../graphql';

export const findProductsWithCursor = async (args:ConnectionArgs, type: string, siteId: string) => {
  const { listProductWithCursor } = await graphQLClient.request(FIND_PRODUCTS_WITH_CURSOR, {args: args, type: type, siteId: siteId});
  return listProductWithCursor;
};

export function useProductsWithCursor(args:ConnectionArgs, type: string, siteId: string) {
  
  return useQuery<ListResponse>(["find-products-with-cursor", args, type, siteId], () => findProductsWithCursor(args, type, siteId));
}
