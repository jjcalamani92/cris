import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import { FIND_PAGE_3_BY_PARENT, graphQLClient } from "../../../../graphql";
import { Page } from "../../../../interfaces";
import { getQuery } from "../../../../utils";



export const findPages3ByParent = async (parentId:string) => {
  const { findPages3ByParent } = await graphQLClient.request<{ findPages3ByParent: Page[] }>(FIND_PAGE_3_BY_PARENT, {parentId: parentId});
  return findPages3ByParent;
};

export function usePages3ByParent(asPath: string) {
  const query = getQuery(asPath)
  const parentId = query[4]
  return useQuery(["find-pages3-by-parent", parentId], () => findPages3ByParent(parentId));
}
