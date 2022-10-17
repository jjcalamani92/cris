import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import { FIND_PAGE_2_BY_PARENT, graphQLClient } from "../../../../graphql";
import { Page } from "../../../../interfaces";
import { getQuery } from "../../../../utils";



export const findPages2ByParent = async (parentId:string) => {
  const { findPages2ByParent } = await graphQLClient.request<{ findPages2ByParent:Page[] }>(FIND_PAGE_2_BY_PARENT, {parentId: parentId});
  return findPages2ByParent;
};

export function usePages2ByParent(asPath: string) {
  const query = getQuery(asPath)
  const parentId = query[4]!
  return useQuery(["find-pages2-by-parent", parentId], () => findPages2ByParent(parentId));
}
