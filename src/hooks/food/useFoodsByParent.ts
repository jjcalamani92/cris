import { useQuery } from "@tanstack/react-query";
import { Food, Product } from "../../../interfaces";
import { getQuery } from "../../../utils";
import { FIND_FOODS_BY_PARENT, FIND_PRODUCTS_BY_PARENT, graphQLClient } from '../../../graphql';

export const findFoodsByParent = async (parentId:string, type: string) => {
  const { findFoodsByParent } = await graphQLClient.request(FIND_FOODS_BY_PARENT, {parentId: parentId, type: type});
  return findFoodsByParent;
};

export function useFoodsByParent(asPath: string, type: string) {
  const query = getQuery(asPath)
  const parentId = query.at(-1)?.split('=')[1]!
  return useQuery<[Food]>(["find-foods-by-parent", parentId, type], () => findFoodsByParent(parentId, type));
}
