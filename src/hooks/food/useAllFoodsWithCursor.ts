import { useQuery } from "@tanstack/react-query";
import { ConnectionArgs, ListResponse, Product } from "../../../interfaces";
import {  FIND_FOODS_WITH_CURSOR, FIND_PRODUCTS_WITH_CURSOR, graphQLClient } from '../../../graphql';

export const findFoodsWithCursor = async (args:ConnectionArgs, type: string, siteId: string) => {
  const { listFoodWithCursor } = await graphQLClient.request(FIND_FOODS_WITH_CURSOR, {args: args, type: type, siteId: siteId});
  return listFoodWithCursor;
};

export function useFoodsWithCursor(args:ConnectionArgs, type: string, siteId: string) {
  
  return useQuery<ListResponse>(["find-foods-with-cursor", args, type, siteId], () => findFoodsWithCursor(args, type, siteId));
}
