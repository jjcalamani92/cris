import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import { FIND_SITE } from "../../../graphql";
import { graphQLClient } from "../../../graphql/graphQLClient";
import { Site } from "../../../interfaces";
import { getQuery } from "../../../utils/function";



export const findSite = async (siteId:String) => {
  const { findSite } = await graphQLClient.request<{findSite: Site}>(FIND_SITE, {id: siteId});
  return findSite;
};

export function useSite(asPath: string) {
  const query = getQuery(asPath)
  const siteId = query[2]
  return useQuery(["find-site", siteId], () => findSite(siteId!));
}
