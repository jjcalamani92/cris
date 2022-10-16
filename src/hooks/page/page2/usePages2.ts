import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import { FIND_PAGES_2, FIND_PAGE_2_BY_PARENT, graphQLClient } from "../../../../graphql";
import { Page } from "../../../../interfaces";



export const findPages2 = async () => {
  const { findPages2 } = await graphQLClient.request<{findPages2: Page[]}>(FIND_PAGES_2);
  return findPages2;
};

export function usePages2() {
  return useQuery(["find-pages2"], () => findPages2());
}
