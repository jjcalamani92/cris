import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_SITE, DELETE_SITE, graphQLClient, UPDATE_SITE } from "../../../graphql";
import { CreateSite, Site, UpdateSite } from "../../../interfaces";


export const useCreateSite = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreateSite) => {
      const { createSite } = await graphQLClient.request<{createSite: Site}>(CREATE_SITE, {
        input,
      });
      return createSite;
    },
    {
      onSuccess: async (createSite) => {
        queryClient.setQueryData<Site[]>(['find-sites'], (old) => [...old!, createSite]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

