import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useRouter } from 'next/router';
import { graphQLClient, UPDATE_ARTICLE } from "../../../graphql";
import { UpdateArticle,  } from "../../../interfaces";
import { getQuery } from "../../../utils/function";


export const updatedArticle = async ({_id, input}:UpdateArticle) => {
  const { updateArticle } = await graphQLClient.request(UPDATE_ARTICLE, {
    _id,
    input
  });
  return updateArticle;
}

export const useUpdateArticle = () => {
  const queryClient = useQueryClient();
  return useMutation(
    updatedArticle,
    {
      onSuccess: (_id:string) => {
        queryClient.invalidateQueries(["find-article", _id]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};