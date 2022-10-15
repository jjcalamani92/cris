import { useMutation, useQueryClient } from "@tanstack/react-query";
import { graphQLClient, UPDATE_IMAGE_PAGE_0, UPDATE_IMAGE_PAGE_1, UPDATE_IMAGE_PAGE_2, UPDATE_IMAGE_PAGE_3, UPDATE_SITE_IMAGE } from "../../../../graphql";
import { Page, Site, UpdateImagePage, UpdateSiteImage } from "../../../../interfaces";


export const useUpdatePage3Image = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, input, uid}:UpdateImagePage) => {
      const { updateImagePage3 } = await graphQLClient.request(UPDATE_IMAGE_PAGE_3, {
        id,
        input,
        uid,
      });
      return updateImagePage3;
    },
    {
      onSuccess: async (updateImagePage3, {id, input}) => {
        const pageId = id
        queryClient.setQueryData<Page>(['find-page3', pageId], updateImagePage3);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
