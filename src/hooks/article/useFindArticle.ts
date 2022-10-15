import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { graphQLClient, FIND_ARTICLE } from "../../../graphql";
import { Article } from "../../../interfaces";


export const findArticle = async (articleID:string) => {
  const { findArticle } = await graphQLClient.request(
    FIND_ARTICLE, {id: articleID}
  );
  return findArticle;
};

export function useFindArticle(articleID:string) {
  return useQuery<Article>(["find-article", articleID], () => findArticle(articleID))
}
