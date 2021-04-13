import {
  Fragment,
  FunctionComponent,
  HTMLAttributes,
  MetaHTMLAttributes,
} from "react";
import NextHead from "next/head";

export interface IHeadProps extends HTMLAttributes<HTMLHeadElement> {
  title: string;
  meta?: MetaHTMLAttributes<HTMLMetaElement>[];
}

export const Meta: FunctionComponent<IHeadProps["meta"]> = (metas) => (
  <Fragment>
    {metas.map(({ ...props }, index) => (
      <meta {...props} key={index} />
    ))}
  </Fragment>
);

export const Head: FunctionComponent<IHeadProps> = ({ title, meta }) => (
  <NextHead>
    <title>{title}</title>
    {meta ? Meta(meta) : null}
  </NextHead>
);
