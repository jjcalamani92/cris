import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { DELETE_SITE, graphQLClient, UPDATE_FOOD, UPDATE_SITE } from "../../../graphql";
import { Food, Site, UpdateFood, UpdateProduct, UpdateSite } from "../../../interfaces";


export const useUpdateFood = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, input, type}:UpdateFood) => {
      const { updateFood } = await graphQLClient.request<{ updateFood: Food }>(UPDATE_FOOD, {
        id,
        input,
        type
      });
      return updateFood;
    },
    {
      onSuccess: async (updateFood, {id, input, type}) => {
        queryClient.setQueryData(['find-food', id, type], updateFood);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Food",
          showConfirmButton: false,
          timer: 1000,
        });
      },
      onError: (error: { response: { errors: [{ message: string }] } }) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.errors[0].message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      },
    }
  );
};
