import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import { FIND_PAGE_3, graphQLClient } from "../../../../graphql";
import { Page } from "../../../../interfaces";
import { getQuery } from "../../../../utils";



export const findPage3 = async (pageId:string) => {
  const { findPage3 } = await graphQLClient.request(FIND_PAGE_3, {id: pageId});
  return findPage3;
};

export function usePage3(asPath:string) {
  const query = getQuery(asPath)
  const pageId = query[3]?.split('=')[1]!
  return useQuery<Page>(["find-page3", pageId], () => findPage3(pageId));
}
