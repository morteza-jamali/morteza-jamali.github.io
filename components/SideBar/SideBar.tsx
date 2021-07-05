import React, { FunctionComponent, createElement } from 'react';
import { extendProperties, extendProperty } from '@morajlab-website/utilities';
import type { ISideBarProps } from './SideBar.types';

export const SideBar: FunctionComponent<ISideBarProps> = ({
  items,
  ...rest
}) => {
  return (
    <div
      {...extendProperties(rest, {
        className: 'h-full py-4 ml-4 relative w-72',
      })}
    >
      <div className="hidden lg:block relative shadow-lg w-full h-full">
        <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
          <nav className="h-full flex flex-col justify-center px-4">
            {items.map(({ icon, link, text, ...itemRest }, key) => (
              <a
                className={extendProperty(
                  itemRest,
                  'className',
                  'w-full uppercase flex items-center p-4 my-2 transition-colors duration-200 justify-left bg-gradient-to-r rounded-2xl'
                )}
                href={link}
                key={key}
              >
                <span className="text-left">
                  {createElement(icon, { className: 'w-8 h-8' })}
                </span>
                <span className="mx-4 text-sm font-bold">{text}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
