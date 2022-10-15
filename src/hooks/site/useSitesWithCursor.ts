import { useQuery } from "@tanstack/react-query";
import { ConnectionArgs, ListResponse, Product } from "../../../interfaces";
import { FIND_SITES_WITH_CURSOR, graphQLClient } from '../../../graphql';

export const findSitesWithCursor = async (args:ConnectionArgs) => {
  const { listSitesWithCursor } = await graphQLClient.request(FIND_SITES_WITH_CURSOR, {args: args});
  return listSitesWithCursor;
};

export function useSitesWithCursor(args:ConnectionArgs) {
  
  return useQuery<ListResponse>(["find-sites-with-cursor", args], () => findSitesWithCursor(args));
}
