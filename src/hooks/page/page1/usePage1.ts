import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import { FIND_PAGE_1, graphQLClient } from "../../../../graphql";
import { Page } from "../../../../interfaces";
import { getQuery } from "../../../../utils";



export const findPage1 = async (pageId:string) => {
  const { findPage1 } = await graphQLClient.request<{findPage1: Page}>(FIND_PAGE_1, {id: pageId});
  return findPage1;
};

export function usePage1(asPath:string) {
  const query = getQuery(asPath)
  const pageId = query[4]
  return useQuery(["find-page1", pageId], () => findPage1(pageId));
}
