import React from "react";
import Head from "next/head";

export interface IHeadProps extends React.HTMLAttributes<HTMLHeadElement> {
  title: string;
}

const _Head: React.FunctionComponent<IHeadProps> = ({ title, ...rest }) => (
  <Head {...rest}>
    <title>{title}</title>
  </Head>
);

export { _Head as Head };
