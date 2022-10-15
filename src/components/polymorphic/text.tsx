import { ComponentPropsWithRef, ElementType } from "react";

type TextProps<C extends ElementType> = {
  as?: C
  children: React.ReactNode;
} & ComponentPropsWithRef<C>;

export const Text = <C extends ElementType >({
  as,
  children,
  ...restProps
}: TextProps<C>) => {
  const Component = as || "span";
  return <Component {...restProps}>{children}</Component>
}