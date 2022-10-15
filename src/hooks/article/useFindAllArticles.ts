import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { graphQLClient, FIND_ARTICLES } from "../../../graphql";
import { Article } from "../../../interfaces";


export const findArticles = async () => {
  const { findArticles } = await graphQLClient.request(
    FIND_ARTICLES,
  );
  return findArticles;
};

export function useFindAllArticles() {
  return useQuery<[Article]>(["find-all-articles"], () => findArticles())
}
