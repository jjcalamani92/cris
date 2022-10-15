import { Food, Page, Product, Site } from "../interfaces";

export const getPathByProducts = (products: Product[]) =>
products.map((data) => ({asPath:`/dashboard/sites/${data.site}/product/${data.type}=${data._id}`, seo: data.data.seo}));
export const getPathByProduct = (products: Product[], asPath:string) =>
getPathByProducts(products).map((data) => data.asPath).find(data => data === asPath);

export const getPathByFoods = (foods: Food[]) =>
foods.map((data) => ({asPath:`/dashboard/sites/${data.site}/meal/${data.type}=${data._id}`, seo: data.data.seo}));
export const getPathByFood = (foods: Food[], asPath:string) =>
getPathByFoods(foods).map((data) => data.asPath).find(data => data === asPath);

export const getPathsAllProducts = (products: Product[]) =>
products.map((data) => ({asPath:`/dashboard/sites/${data.site}/products/${data.type}=${data._id}`, seo: data.data.seo}));
export const getPathsAllProduct = (products: Product[], asPath:string) =>
getPathByProducts(products).map((data) => data.asPath).find(data => data === asPath);
// export const getPathsAllProductsDB = (products: Product[]) =>
// products.map((data) => ({asPath:`/dashboard/sites/${data.site}/products/${data.type}=${data._id}`, seo: data.data.seo}));
// export const getPathsAllProductDB = (products: Product[], asPath:string) =>
// getPathByProducts(products).map((data) => data.asPath).find(data => data === asPath);


// export const getPathBySitesDB = (sites: Site[]) =>
// sites.map((data) => data.data.dataBase.map(db => ({asPath:`/dashboard/sites/${data._id}/$products/${db.value}`, seo: data.data.seo})) ).flat(1);
// export const getPathBySiteProductsDB = (sites: Site[], asPath:string) =>
// getPathBySitesDB(sites).map((data) => data.asPath).find(data => data === asPath);

export const getPathBySitesProductsDB = (sites: Site[]) =>
sites.map((data) => data.data.dataBase.map(db => ({asPath:`/dashboard/sites/${data._id}/$products/${db.value}`, seo: data.data.seo})) ).flat(1);
export const getPathBySiteProductsDB = (sites: Site[], asPath:string) =>
getPathBySitesProductsDB(sites).map((data) => data.asPath).find(data => data === asPath);

export const getPathBySites = (sites: Site[]) =>
sites.map((data) => ({asPath:`/dashboard/sites/${data._id}`, seo: data.data.seo}));
export const getPathBySite = (sites: Site[], asPath:string) =>
getPathBySites(sites).map((data) => data.asPath).find(data => data === asPath);

export const getPathByPages0 = (pages0: Page[]) =>
pages0.map((data) => ({asPath:`/dashboard/sites/${data.site}/page0=${data._id}`, seo: data.data.seo}));
export const getPathByPage0 = (pages0: Page[], asPath:string) =>
getPathByPages0(pages0).map((data) => data.asPath).find(data => data === asPath);

export const getPathByPages1 = (pages1: Page[]) =>
pages1.map((data) => ({asPath:`/dashboard/sites/${data.site}/page1=${data._id}`, seo: data.data.seo}));
export const getPathByPage1 = (pages1: Page[], asPath:string) =>
getPathByPages1(pages1).map((data) => data.asPath).find(data => data === asPath);

export const getPathByPages2 = (pages1: Page[]) =>
pages1.map((data) => ({asPath:`/dashboard/sites/${data.site}/page2=${data._id}`, seo: data.data.seo}));
export const getPathByPage2 = (pages1: Page[], asPath:string) =>
getPathByPages2(pages1).map((data) => data.asPath).find(data => data === asPath);
