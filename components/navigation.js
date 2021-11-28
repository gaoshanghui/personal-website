import Link from 'next/link';
import { MailButton, LinkedinButton } from './buttons/outlined';
import { MenuButton } from './buttons/menu';

const Navigation = () => {
  return (
    <div className="px-5 py-3 fixed top-0 left-0 z-10 bg-white bg-opacity-75 backdrop-blur-lg w-full flex items-center border-b border-gray-300">
      <nav className="w-full flex justify-between lg:grid lg:grid-cols-3 lg:w-10/12 mx-auto">
        <div className="hidden lg:flex gap-8 items-center">
          <Link href="/">
            <a className="text-gray-900 text-base leading-6 font-bold">
              Projects
            </a>
          </Link>
          <Link href="/about">
            <a className="text-gray-900 text-base leading-6 font-bold">About</a>
          </Link>
          <a
            className="text-gray-900 text-base leading-6 font-bold"
            target="_blank"
            href="https://twitter.com/"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <Link href="/">
          <a className="flex flex-col h-full justify-center">
            <h1 className="text-lg lg:text-center leading-7 font-black text-gray-900">
              Gao Shanghui
            </h1>
            <p className="text-xs lg:text-center leading-4 font-normal text-gray-600">
              Web and UX designer
            </p>
          </a>
        </Link>
        <div className="flex justify-end items-center gap-4">
          <a href="mailto:mail.gaoshanghui@gmail.com">
            <MailButton />
          </a>
          <a target="_blank" href="#" rel="noopener noreferrer">
            <LinkedinButton />
          </a>
          <span>
            <MenuButton />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
