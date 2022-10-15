import { Site } from "../interfaces";

export const getPathByProjects = (sites: Site[]) =>
sites.map((data) => ({asPath:`/dashboard/projects/${data._id}`, seo: data.data.seo}));
export const getPathByProject = (sites: Site[], asPath:string) =>
getPathByProjects(sites).map((data) => data.asPath).find(data => data === asPath);
