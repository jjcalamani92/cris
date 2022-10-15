import Link from "next/link"
import { FC } from "react";
import { Page } from "../../../interfaces";
import Swal from 'sweetalert2';
import { useDeletePage3 } from "../../hooks";
import { Image } from "../utils";
interface CardPage3 {
  page?:  Page
  
}
export const CardPage3: FC<CardPage3> = ({ page }) => {
  
  const { mutate: deletePage3 } = useDeletePage3(page?.parent!)
  const onDelete = (id:string) => {
    Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then( async (result) => {
			if (result.isConfirmed ) {
				Swal.fire({ 
						title: 'Deleted!',
						text: 'Your file has been deleted.',
						icon: 'success',
						timer: 1000,
						showConfirmButton: false,
					})
        deletePage3(id)
			}
		})
  }
  return (
    <div className="max-w-xs rounded-md shadow-lg bg-gray-50 text-gray-800">
      <Link href={`/dashboard/sites/${page?.site}/page2=${page?._id}`}>
        <a>
          <Image img={page?.data.seo.image!} className={"h-[12rem] w-full object-cover"}/>

          <div className="flex flex-col justify-between px-4 space-y-8">
            <div className="space-y-2">
              <h2 className=" text-sm tracking-wide">{page?.data.seo.title }</h2>
            </div>
          </div>
        </a>
      </Link>
      <div className="flex flex-col justify-between p-4 space-y-8">
        <button className="justify-center btn-primary"
        onClick={() => onDelete(page?._id!)}
        >
          Delete
        </button>
        
      </div>
    </div>
  )
}