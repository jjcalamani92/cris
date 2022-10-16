import { useQuery } from "@tanstack/react-query";
import { FIND_ALL_PRODUCTS } from "../../../graphql";
import { graphQLClient } from "../../../graphql/graphQLClient";
import { FIND_SITES } from "../../../graphql/query/site.query";
import { Product } from "../../../interfaces";
import { Site } from "../../../interfaces/site.interface";



export const findAllProducts = async () => {
  const { findAllProducts } = await graphQLClient.request<{ findAllProducts:Product[] }>(FIND_ALL_PRODUCTS);
  return findAllProducts;
};

export function useAllProducts() {
  return useQuery(["find-all-products"], () => findAllProducts());
}
