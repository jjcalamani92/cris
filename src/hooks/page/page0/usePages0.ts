import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0, graphQLClient } from "../../../../graphql";
import { Page } from "../../../../interfaces";



export const findPages0 = async () => {
  const { findPages0 } = await graphQLClient.request<{findPages0:Page[]}>(FIND_PAGES_0);
  return findPages0;
};

export function usePages0() {
  return useQuery(["find-pages0"], () => findPages0());
}
