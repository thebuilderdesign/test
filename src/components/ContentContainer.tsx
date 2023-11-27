import { FC } from 'react';
import Link from "next/link";
import Text from './Text';
import NavElement from './nav-element';
interface Props {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<Props> = ({ children }) => {

  return (
    <div className="flex-col justify-between flex-1 drawer h-52">
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      <div className="flex flex-col items-center justify-between drawer-content">
        {children}
      </div>
      {/* SideBar / Drawer */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="gap-6 drawer-overlay"></label>

        <ul className="items-center gap-10 p-4 overflow-y-auto menu w-80 bg-base-100 sm:flex">
          <li>
            <Text variant="heading" className='mt-10 font-extrabold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500'>Menu</Text>
          </li>
          <li>
          <NavElement
            label="Home"
            href="/"
          />
          </li>
        </ul>
      </div>
    </div>
  );
};
