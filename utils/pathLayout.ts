import { Site } from "../interfaces";

export const getPathByLayout = (site: Site) =>
// site.page.map((data) => data.data.type === "category-food" && ({name: data.data.seo.title}));
site.page.map((data) => ({name: data.data.seo.title, children: data.page.map(data1 => ({name: data1.data.seo.title, href: data1.data.seo.href, items: data1.food.map(food => ({name: food.data.seo.title, href: food.data.seo.href, imageSrc: food.data.seo.image.src, imageAlt: food.data.seo.image.alt}))}))}))