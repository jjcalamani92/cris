import { Image, Seo, Site } from "./site.interface"

export interface Products {
  clothings?: Product[]
  furnituries?: Product[]
}
export interface Product {
  _id: string
  data: DataProduct
  site: string
  parent: string
  type: string
  page: string
}
export interface DataProduct {
  name: string;
  slug: string;
  mark: string;
  inStock: number;
  price: number;
  discountPrice: number;
  description: string;
  image: Image[];
  seo: Seo;
  promotion: Promotion
}


export interface Promotion {
  name: string;
  href: string;
}
export interface Data {
  type: string;
  seo: Seo;
}
export interface ConnectionArgs {
  before?: string;
  after?: string;
  first?: number;
  last?: number;
}

export interface ListResponse{
  page: PageConnection
  pageData: PageData
}

export interface PageConnection{
  edges: Edge[]
  pageInfo: PageInfo
}
export interface Edge {
  cursor: string
  node: Product | Site
}
export interface PageInfo {
  startCursor: string
  endCursor: string
  hasPreviousPage: boolean
  hasNextPage: boolean
}
export interface PageData {
  count: number
  limit: number
  offset: number
}

export interface ImageProduct extends Image {}

export interface CreateProduct {
  input:{
    name: string
    mark: string
    description: string
    promotion: string
    inStock: number
    price: number
    discountPrice: number
    site: string
    parent: string
    uid: string
    change: string
  }
  type: string
}
export interface UpdateProduct {
  id:string
  input:{
    name: string
    mark: string
    description: string
    promotion: string
    inStock: number
    price: number
    discountPrice: number
    change: string
    uid: string
    site: string
    parent: string
  }
  type: string
}
export interface UpdateProductImage {
  id:string
  input: UpdateImage[]
  type: string
  uid: string
}
export interface UpdateImage {
  uid: string
  src: string
  alt: string
}
export interface DeleteProduct {
  id:string
  type: string
}
export interface DeleteManyProductById {
  ids:string[]
  type: string
}