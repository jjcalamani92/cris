import { useQuery } from "@tanstack/react-query";
import { FIND_FOOD, FIND_PRODUCT, graphQLClient } from "../../../graphql";
import { Food, Product } from "../../../interfaces";
import { getQuery } from "../../../utils";


export const findFood = async (id:string, type:string) => {
  const { findFood } = await graphQLClient.request(
    FIND_FOOD,
    { id: id, type: type }
  );
  return findFood;
};

export function useFood(asPath: string) {
  const query = getQuery(asPath)
  const id = query[4]?.split('=')[1]!
  const type = query[4]?.split('=')[0]!

  return useQuery<Food>(["find-food", id, type],  () => findFood(id, type));
}
