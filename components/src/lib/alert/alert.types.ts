import type {
  IBlogProps,
  BlogComponent,
} from '@workspace/morteza-jamali/blog/types';

export enum Type {
  ERROR = 'error',
  SUCCESS = 'success',
  WARN = 'warn',
  INFO = 'info',
}
export interface IAlertProps extends IBlogProps {
  type?: Type;
}
export type AlertComponent = BlogComponent<IAlertProps>;
