import { useMutation, useQueryClient } from "@tanstack/react-query";
import { graphQLClient, UPDATE_IMAGE_PAGE_0, UPDATE_IMAGE_PAGE_1, UPDATE_SITE_IMAGE } from "../../../../graphql";
import { Page, Site, UpdateImagePage, UpdateSiteImage } from "../../../../interfaces";


export const useUpdatePage1Image = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, input, uid}:UpdateImagePage) => {
      const { updateImagePage1 } = await graphQLClient.request(UPDATE_IMAGE_PAGE_1, {
        id,
        input,
        uid,
      });
      return updateImagePage1;
    },
    {
      onSuccess: async (updateImagePage1, {id, input}) => {
        const pageId = id
        queryClient.setQueryData<Page>(['find-page1', pageId], updateImagePage1);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
