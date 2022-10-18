// import { Article } from "../article/article.interface";
// import { Product } from "../product/product.interface";
import { Food } from "./food.interface";
import { Image, Seo } from "./site.interface";

export interface Page {
  _id: string;
  data: Data;
  slug: string;
  parent: string;
  // article: Article[];
  page: Page[];
  food: Food[];
  site: string
  // product: Product[]
}

interface Data {
  type: string;
  icon: Image;
  seo: Seo;
}

export interface CreatePage {
  title: string
  description: string
  type: string
  parent: string
  site: string
}
export interface UpdatePage {
  id:string
  input:{
    title: string
    description: string
    type: string
  }
}
export interface UpdateImagePage {
  id:string
  input: {
    src: string
    alt: string
  }
  uid: string
}
export interface DeletePages {
  ids:string[]
}