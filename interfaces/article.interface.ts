import { Image, Seo, Tags, UpdateDate } from "./site.interface";


export interface Article {
  _id: string;
  data: DataBlog;
  site: string
  parent: string
  updateDate: UpdateDate
}

export interface DataBlog {
  title: string;
  slug: string;
  content: string;
  category: string;
  description: string;
  meta: string;
  tags: Tags[];
  author: string;
  thumbnail: Image;
  seo: Seo;
}

export interface CreateArticle {
  title: string
  author: string
  description: string
  site: string
  parent: string
  category: string
}
export interface UpdateArticle {
  _id:string
  input:{
    title: string
    author: string
    description: string
    category: string
    src: string
    alt: string
    content: string
    meta: string
    tags: string[]
  }
}