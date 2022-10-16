import { useQuery } from "@tanstack/react-query";
import { Product } from "../../../interfaces";
import { getQuery } from "../../../utils";
import { FIND_PRODUCTS_BY_PARENT, graphQLClient } from '../../../graphql';

export const findProductsByParent = async (parentId:string, type: string) => {
  const { findProductsByParent } = await graphQLClient.request<{findProductsByParent: Product[]}>(FIND_PRODUCTS_BY_PARENT, {parentId: parentId, type: type});
  return findProductsByParent;
};

export function useProductsByParent(asPath: string, type: string) {
  const query = getQuery(asPath)
  const parentId = query.at(-1)?.split('=')[1]!
  return useQuery(["find-products-by-parent", parentId, type], () => findProductsByParent(parentId, type));
}
