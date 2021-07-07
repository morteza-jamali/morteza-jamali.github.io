import React, { FunctionComponent } from 'react';
import { Styles } from './Posts.styles';
import { PostCard } from '../../components/.';
import { extendProperties } from '@morajlab-website/utilities';
import SimpleBar from 'simplebar-react';
import type { IPostsViewProps } from './Posts.types';
import 'simplebar/dist/simplebar.min.css';

export const PostsView: FunctionComponent<IPostsViewProps> = ({ ...rest }) => {
  const { root, scrollBar } = Styles({});

  return (
    <div
      {...root}
      {...extendProperties(rest, {
        className: 'block w-full h-full relative select-none',
      })}
    >
      <SimpleBar {...scrollBar}>
        <div className="grid grid-cols-3 gap-4">
          {Array(10)
            .fill(0)
            .map((_value, key) => (
              <div key={key}>
                <PostCard />
              </div>
            ))}
        </div>
      </SimpleBar>
    </div>
  );
};

export default PostsView;
