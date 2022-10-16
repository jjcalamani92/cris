import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import { FIND_PAGES_1, FIND_PAGE_1_BY_PARENT, graphQLClient } from "../../../../graphql";
import { Page } from "../../../../interfaces";



export const findPages1 = async () => {
  const { findPages1 } = await graphQLClient.request< { findPages1: Page[] } >(FIND_PAGES_1);
  return findPages1;
};

export function usePages1() {
  return useQuery(["find-pages1"], () => findPages1());
}
