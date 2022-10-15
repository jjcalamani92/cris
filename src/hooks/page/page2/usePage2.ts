import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import { FIND_PAGE_2, graphQLClient } from "../../../../graphql";
import { Page } from "../../../../interfaces";
import { getQuery } from "../../../../utils";



export const findPage2 = async (pageId:string) => {
  const { findPage2 } = await graphQLClient.request(FIND_PAGE_2, {id: pageId});
  return findPage2;
};

export function usePage2(asPath:string) {
  const query = getQuery(asPath)
  const pageId = query[3]?.split('=')[1]!
  return useQuery<Page>(["find-page2", pageId], () => findPage2(pageId));
}
