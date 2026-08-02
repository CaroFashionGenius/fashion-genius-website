import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "light" | "outline" | "dark";
};

export function Button({ children, variant = "outline", className = "", ...props }: Props) {
  return <a className={`button button-${variant} ${className}`.trim()} {...props}>{children}</a>;
}
