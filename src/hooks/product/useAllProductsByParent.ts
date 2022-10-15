import { useQuery } from "@tanstack/react-query";
import { Product } from "../../../interfaces";
import { getQuery } from "../../../utils";
import { FIND_ALL_PRODUCTS_BY_PARENT, FIND_PRODUCTS_BY_PARENT, graphQLClient } from '../../../graphql';

export const findAllProductsByParent = async (parentId:string) => {
  const { findAllProductsByParent } = await graphQLClient.request(FIND_ALL_PRODUCTS_BY_PARENT, {parentId: parentId});
  return findAllProductsByParent;
};

export function useAllProductsByParent(asPath: string) {
  const query = getQuery(asPath)
  const parentId = query[3]?.split('=')[1]!
  return useQuery<[Product]>(["find-all-products-by-parent", parentId], () => findAllProductsByParent(parentId));
}
