import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import { FIND_PAGES_3, FIND_PAGE_3_BY_PARENT, graphQLClient } from "../../../../graphql";
import { Page } from "../../../../interfaces";



export const findPages3 = async () => {
  const { findPages3 } = await graphQLClient.request<{ findPages3:Page[] } >(FIND_PAGES_3);
  return findPages3;
};

export function usePages3() {
  return useQuery(["find-pages3"], () => findPages3());
}
