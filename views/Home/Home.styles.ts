import { css } from 'glamor';
import type { IHomeViewStyleProps } from './Home.types';

export const Styles = ({ tileURL }: IHomeViewStyleProps) => {
  return {
    root: css({}),
    avatar: css({
      '& img': {
        filter: 'grayscale(100%)',
      },
      '&:before': {
        content: '""',
        backgroundImage: `url(${tileURL})`,
        position: 'absolute',
        inset: 0,
        margin: '-2rem',
      },
    }),
  };
};

export default Styles;
