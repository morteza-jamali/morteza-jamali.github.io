import type { FunctionComponent, HTMLAttributes } from 'react';

export interface ISideBarItemProps {
  text: string;
  icon: FunctionComponent<any>;
  link: string;
  className?: string;
}

export interface ISideBarProps extends HTMLAttributes<HTMLDivElement> {
  items: ISideBarItemProps[];
}

export interface ISideBarStyleProps {}
