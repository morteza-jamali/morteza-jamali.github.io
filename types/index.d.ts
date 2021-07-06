import type { ComponentType } from 'react';

export interface IRoutesProps {
  path: string;
  view: ComponentType<any>;
  exact?: boolean;
}
