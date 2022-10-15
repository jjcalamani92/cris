import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import { FIND_PAGES_0, FIND_PAGE_0, graphQLClient } from "../../../../graphql";
import { Page } from "../../../../interfaces";
import { getQuery } from "../../../../utils";



export const findPage0 = async (pageId:string) => {
  const { findPage0 } = await graphQLClient.request(FIND_PAGE_0, {id: pageId});
  return findPage0;
};

export function usePage0(asPath:string) {
  const query = getQuery(asPath)
  const pageId = query[4]
  return useQuery<Page>(["find-page0", pageId], () => findPage0(pageId));
}
