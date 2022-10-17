import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import {  DELETE_SITES,  graphQLClient } from "../../../graphql";
import {  DeleteManySitesById, Site,  } from "../../../interfaces"; 
import { findSites } from './useSites';


export const useDeleteManySitesById = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids}: DeleteManySitesById) => {
      const { deleteSites } = await graphQLClient.request<{deleteSites: string[]}>(DELETE_SITES, {
        ids
      });
      return deleteSites;
    },
    {
      onSuccess:  (deleteSites) => {
        queryClient.setQueryData<Site[]>(["find-sites"],  (old) => old!.filter((site) => deleteSites.indexOf(site._id) < 0));
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
        })
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

