import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { graphQLClient, CREATE_ARTICLE } from "../../../graphql";
import { CreateArticle } from "../../../interfaces";

export const addArticle = async (input: CreateArticle) => {
  const { createArticle } = await graphQLClient.request(CREATE_ARTICLE, {
    input,
  });
  return createArticle;
}

export const useCreateArticle = () => {
  const queryClient = useQueryClient();
  return useMutation(
    addArticle,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["find-page0-by-slug"]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};