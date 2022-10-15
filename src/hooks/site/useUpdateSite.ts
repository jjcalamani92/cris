import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DELETE_SITE, graphQLClient, UPDATE_SITE } from "../../../graphql";
import { Site, UpdateSite } from "../../../interfaces";


export const useUpdateSite = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, input}:UpdateSite) => {
      const { updateSite } = await graphQLClient.request<{updateSite: Site}>(UPDATE_SITE, {
        id,
        input
      });
      return updateSite;
    },
    {
      onSuccess: async (updateSite, {id, input}) => {
        // const siteId = id
        // queryClient.invalidateQueries([`find-site`]);
        queryClient.setQueryData(['find-site', id], updateSite);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
