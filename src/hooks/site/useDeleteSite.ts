import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DELETE_SITE, graphQLClient } from "../../../graphql";
import { Site } from "../../../interfaces";

export const useDeleteSite = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id:string) => {
      const { deleteSite } = await graphQLClient.request<{deleteSite: string}>(DELETE_SITE, {
        id,
      });
      return deleteSite;
    },
    {
      onSuccess: (deleteSite) => {
        queryClient.setQueryData<Site[]>(['find-sites'], (old) => old!.filter((site) => site._id !== deleteSite))
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};