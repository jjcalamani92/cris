import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { CREATE_FOOD, CREATE_PRODUCT,  graphQLClient } from "../../../graphql";
import { CreateFood, CreateProduct, CreateSite, Food, Product, Site, UpdateSite } from "../../../interfaces";


export const useCreateFood = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ input, type}: CreateFood) => {
      const { createFood } = await graphQLClient.request<{ createFood: Food }>(CREATE_FOOD, {
        input,
        type,
      });
      return createFood;
    },
    {
      onSuccess: async (createFood) => {
        queryClient.setQueryData<Food[]>(['find-all-foods-by-parent', parentId], (old) => [...old!, createFood]);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Created Food",
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

