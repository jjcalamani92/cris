import { useQuery } from "@tanstack/react-query";
import { FIND_PRODUCT, graphQLClient } from "../../../graphql";
import { Product } from "../../../interfaces";
import { getQuery } from "../../../utils";


export const findProduct = async (id:string, type:string) => {
  const { findProduct } = await graphQLClient.request(
    FIND_PRODUCT,
    { id: id, type: type }
  );
  return findProduct;
};

export function useProduct(asPath: string) {
  const query = getQuery(asPath)
  const id = query[4]?.split('=')[1]!
  const type = query[4]?.split('=')[0]!

  return useQuery<Product>(["find-product", id, type],  () => findProduct(id, type));
}
