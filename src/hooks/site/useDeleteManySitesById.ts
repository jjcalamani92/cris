import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {  DELETE_SITES,  graphQLClient } from "../../../graphql";
import {  DeleteManySitesById, Site,  } from "../../../interfaces"; 
import { findSites } from './useSites';


export const useDeleteManySitesById = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids}: DeleteManySitesById) => {
      const { deleteSites } = await graphQLClient.request<{deleteSites: string[]}>(DELETE_SITES, {
        ids
      });
      return deleteSites;
    },
    {
      onSuccess:  (deleteSites) => {
        queryClient.setQueryData<Site[]>(["find-sites"],  (old) => old!.filter((site) => deleteSites.indexOf(site._id) < 0));
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

