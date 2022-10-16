import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import { FIND_PAGES_0_BY_PARENT, graphQLClient } from "../../../../graphql";
import { Page } from "../../../../interfaces";
import { getQuery } from "../../../../utils";



export const findPages0ByParent = async (parentId:string) => {
  const { findPages0ByParent } = await graphQLClient.request<{findPages0ByParent: Page[]}>(FIND_PAGES_0_BY_PARENT, {parentId: parentId});
  return findPages0ByParent;
};

export function usePages0ByParent(asPath: string) {
  const query = getQuery(asPath)
  const parentId = query[2]
  return useQuery(["find-pages0-by-parent", parentId], () => findPages0ByParent(parentId));
}
