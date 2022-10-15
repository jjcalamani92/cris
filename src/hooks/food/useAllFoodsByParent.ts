import { useQuery } from "@tanstack/react-query";
import { Food, Product } from "../../../interfaces";
import { getQuery } from "../../../utils";
import { FIND_ALL_FOODS_BY_PARENT, graphQLClient } from '../../../graphql';

export const findAllFoodsByParent = async (parentId:string) => {
  const { findAllFoodsByParent } = await graphQLClient.request(FIND_ALL_FOODS_BY_PARENT, {parentId: parentId});
  return findAllFoodsByParent;
};

export function useAllFoodsByParent(asPath: string) {
  const query = getQuery(asPath)
  const parentId = query[3]?.split('=')[1]!
  return useQuery<[Food]>(["find-all-foods-by-parent", parentId], () => findAllFoodsByParent(parentId));
}
