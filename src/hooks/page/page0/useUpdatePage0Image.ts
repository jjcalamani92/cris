import { useMutation, useQueryClient } from "@tanstack/react-query";
import { graphQLClient, UPDATE_IMAGE_PAGE_0, UPDATE_SITE_IMAGE } from "../../../../graphql";
import { Page, Site, UpdateImagePage, UpdateSiteImage } from "../../../../interfaces";


export const useUpdatePage0Image = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, input, uid}:UpdateImagePage) => {
      const { updateImagePage0 } = await graphQLClient.request<{ updateImagePage0:Page }>(UPDATE_IMAGE_PAGE_0, {
        id,
        input,
        uid,
      });
      return updateImagePage0;
    },
    {
      onSuccess: async (updateImagePage0, {id, input}) => {
        const pageId = id
        queryClient.setQueryData(['find-page0', pageId], updateImagePage0);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
