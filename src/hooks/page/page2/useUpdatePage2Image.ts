import { useMutation, useQueryClient } from "@tanstack/react-query";
import { graphQLClient, UPDATE_IMAGE_PAGE_0, UPDATE_IMAGE_PAGE_1, UPDATE_IMAGE_PAGE_2, UPDATE_SITE_IMAGE } from "../../../../graphql";
import { Page, Site, UpdateImagePage, UpdateSiteImage } from "../../../../interfaces";


export const useUpdatePage2Image = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, input, uid}:UpdateImagePage) => {
      const { updateImagePage2 } = await graphQLClient.request(UPDATE_IMAGE_PAGE_2, {
        id,
        input,
        uid,
      });
      return updateImagePage2;
    },
    {
      onSuccess: async (updateImagePage2, {id, input}) => {
        const pageId = id
        queryClient.setQueryData<Page>(['find-page2', pageId], updateImagePage2);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
