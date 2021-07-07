import { css } from 'glamor';
import type { IPostsViewStyleProps } from './Posts.types';

export const Styles = ({}: IPostsViewStyleProps) => {
  return {
    root: css({}),
    scrollBar: css({
      height: '100%',
      width: '100%',
      overflowX: 'hidden',
    }),
  };
};

export default Styles;
