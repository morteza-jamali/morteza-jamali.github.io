import { BGColors } from '@workspace/morteza-jamali/blog/components/styles/colors';
import type {
  BlogComponent,
  IBlogProps,
} from '@workspace/morteza-jamali/blog/types';

export interface IButtonProps extends IBlogProps {
  text: string;
  bgColor?: BGColors;
}
export type ButtonComponent = BlogComponent<IButtonProps>;
