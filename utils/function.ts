
export const uuidv3 = () => {
  return 'yxyyxy'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
export const getQuery = (asPath: string) => {
  asPath.toString()
  return asPath.slice(1).split("/");
};
export const compose = (...fns: any[]) => {
  return (x: any) => {
    return fns.reduceRight((v,f) => {
      return f(v)
    }, x)
  }
}