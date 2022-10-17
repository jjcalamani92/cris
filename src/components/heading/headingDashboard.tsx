
import { createRef, FC, Fragment, useState } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  DocumentPlusIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { classNames, getQuery } from '../../../utils/function'
import { useRouter } from 'next/router'
import { Food, Page, Product, Site } from '../../../interfaces'
import { Modal } from '../utils'
import { TabFormFood, TabFormPage, TabFormProduct, TabFormSite } from '../tabs'
import { typePageEcommerceCategory, typePageFoodCategory, typeSite } from '../../../utils'
import { Text } from '../polymorphic'
import { CubeIcon, FolderPlusIcon, SquaresPlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useDeleteManyProductById } from '../../hooks'
import Swal from 'sweetalert2'
import { useToggle } from 'ahooks'
import { SlideOversForm } from '../tailwindComponents'



interface HeadingDashboard {
  title: string
  select?: string[]
  setSelect?: React.Dispatch<React.SetStateAction<string[] >> | any

  page?: Page
  site?: Site
  product?:Product
  meal?:Food
}
export const HeadingDashboard: FC<HeadingDashboard> = ({ title, page, site, product, meal, select, setSelect }) => {
  // console.log(select?.length);
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  // console.log(page?.data.type);
  const [state, { toggle, setLeft, setRight }] = useToggle();

  const [children, setChildren] = useState<React.ReactNode>()
  const { mutate: deleteProducts } = useDeleteManyProductById( {first: 10}, query[2],query[4])

  const deleteHandle = () => {
    // console.log('deleteHandle', select);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
        })
        deleteProducts({ids: select!, type: query[4]})
        setSelect([])
        // select.length === 0
      }
    })
  }
  const editHandle = (type: string) => {
    if (type === "site") {
      toggle()
      setChildren(<TabFormSite toggle={toggle} setLeft={setLeft} site={site} />)
    } else if (type === "page") {
      toggle()
      setChildren(<TabFormPage  toggle={toggle} setLeft={setLeft} page={page} type={page?.data.type} />)
    } else if (type === "product") {
      toggle()
      setChildren(<TabFormProduct toggle={toggle} setLeft={setLeft} type={product?.type} product={product}/>)
    } else if (type === "meal") {
      toggle()
      setChildren(<TabFormFood toggle={toggle} setLeft={setLeft} type={meal?.type} meal={meal}/>)
    }
  }
  const addHandle = (type: string) => {
    if (type === 'site') {
      toggle()
      setChildren(<TabFormSite toggle={toggle} setLeft={setLeft} />)
    }
    else if (type === 'page') {
      toggle()
      setChildren(<TabFormPage toggle={toggle} setLeft={setLeft}  type={site ? site?.data.type : page?.data.type} uid={site ? site?._id : page?._id} />)
    }
    else if (type === 'product') {
      toggle()
      setChildren(<TabFormProduct toggle={toggle} setLeft={setLeft} type={page?.data.type} uid={page?._id} />)
    }
    else if (type === 'article') {
      console.log('article add');

    }
    else if (type === 'category') {
      toggle()
      setChildren(<TabFormPage toggle={toggle} setLeft={setLeft}  type={page?.data.type} uid={page?._id} />)
    }
    else if (type === 'food') {
      toggle()
      setChildren(<TabFormFood toggle={toggle} setLeft={setLeft}  type={page?.data.type} uid={page?._id} />)
    }
  }
  return (
    <div className="flex lg:items-center lg:justify-between pt-6 pb-1 sm:pt-10">
      <div className="min-w-0 flex-1">
        <div className='flex'>
          <Text as="h2" className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mr-3">{title}</Text>

          {
            site &&
            <span className="block">
              <button className="btn-default space-x-3" onClick={() => editHandle('site')} >
                <PencilIcon className=" h-5 w-5 text-gray-500" aria-hidden="true" />
                <p className='hidden sm:block'>
                  Edit
                </p> 
              </button>
            </span>
          }
          {
            page &&
            <span className="block">
              <button className="btn-default space-x-3" onClick={() => editHandle('page')} >
                <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                <p className='hidden sm:block'>
                  Edit
                </p> 
              </button>
            </span>
          }
          {
            product &&
            <span className="block">
              <button className="btn-default space-x-3" onClick={() => editHandle('product')} >
              <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
              <p className='hidden sm:block'>
                  Edit
                </p> 
              </button>
            </span>
          }
          {
            meal &&
            <span className="block">
              <button className="btn-default space-x-3" onClick={() => editHandle('meal')} >
              <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
              <p className='hidden sm:block'>
                  Edit
                </p> 
              </button>
            </span>
          }
        </div>

      </div>
      <div className="flex lg:mt-0 lg:ml-4">
        {/* {['category-food'].includes(page?.data.type!) &&
          <span className="block">
            <button className="btn-primary space-x-3" onClick={() => addHandle('category')} >
            <DocumentPlusIcon className="h-6 w-6" aria-hidden="true" />
            <p className='hidden sm:block'>
              Add Category
                </p>
            </button>
          </span>} */}
        {['category', 'category-food'].includes(page?.data.type!) &&
          <span className="block">
            <button className="btn-primary space-x-3" onClick={() => addHandle('category')} >
            <DocumentPlusIcon className="h-6 w-6" aria-hidden="true" />
            <p className='hidden sm:block'>
              Add Category
                </p>
            </button>
          </span>}
        {typePageEcommerceCategory.map(data => data.value).includes(page?.data.type!) &&
          <span className="block">
            <button className="btn-primary space-x-3" onClick={() => addHandle('product')} >
            <DocumentPlusIcon className="h-6 w-6" aria-hidden="true" />
              <p className='hidden sm:block'>
                  Add Product
                </p>
            </button>
          </span>}
        {typePageFoodCategory.map(data => data.value).includes(page?.data.type!) &&
          <span className="block">
            <button className="btn-primary space-x-3" onClick={() => addHandle('food')} >
            <DocumentPlusIcon className="h-6 w-6" aria-hidden="true" />
              <p className='hidden sm:block'>
                  Add Food
                </p>
            </button>
          </span>}
        {
         ( typeSite.map(data => data.value).includes(site?.data.type!) || page?.data.type === 'page') &&
          <span className="block">
            <button className="btn-primary space-x-3" onClick={() => addHandle('page')} >
              <FolderPlusIcon className="h-6 w-6" aria-hidden="true" />
              <p className='hidden sm:block'>
                  Add Page
                </p>
            </button>
          </span>
        }
        {
         ( page?.data.type === 'page-blank') &&
          <span className="block">
            <button className="btn-primary space-x-3" onClick={() => addHandle('component')} >
              <CubeIcon className="h-6 w-6" aria-hidden="true" />
              <p className='hidden sm:block'>
                  Add Component
                </p>
            </button>
          </span>
        }
        {/* {
         ( page?.data.type === 'food') &&
          <span className="block">
            <button className="btn-primary space-x-3" onClick={() => addHandle('food')} >
              <CubeIcon className="h-6 w-6" aria-hidden="true" />
                <p className='hidden sm:block'>
                  Add Food
                </p>
            </button>
          </span>
        } */}
        {
          query.length === 2 &&
          <span className="block">
            <button className="btn-primary space-x-3" onClick={() => addHandle('site')} >
            <FolderPlusIcon className="h-6 w-6" aria-hidden="true" />
              <p className='hidden sm:block'>
                  Add Site
                </p>
            </button>
          </span>
        }
        {
          query.length === 5 && query[3] === '$products' &&
          <span className={`block opacity-0 ${select?.length !== 0 && "opacity-100"} transition ease-in-out delay-150`}>
            <button className="btn-primary space-x-3" onClick={() => deleteHandle()} >
            <TrashIcon className="h-6 w-6" aria-hidden="true" />
              <p className='hidden sm:block'>
                  Eliminar
                </p>
            </button>
          </span>
        }
        {

        (site && site.data.type === 'ecommerce') &&
        <Menu as="div" className="relative ml-3 ">
          <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Products
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {
                site.data.dataBase.map(db => (

              <Menu.Item key={db.uid}>
                {({ active }) => (
                  <Link href={`/dashboard/sites/${site._id}/$products/${db.value}`}>
                    <a
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                      {db.label}
                    </a>
                    </Link>
                )}
              </Menu.Item>
                ))
              }

             
            </Menu.Items>
          </Transition>
        </Menu>
        }
      </div>
      {/* <Modal state={state} toggle={toggle} >
        {children}
      </Modal> */}
      <SlideOversForm state={state} toggle={toggle} setLeft={setLeft}>
        {children}
      </SlideOversForm>
    </div>
  )
}
