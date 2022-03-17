import Link from "next/link";
import { MailButton, LinkedinButton } from "./outlined-button";
import MenuButton from "./menu/menu-button";

interface NavigationProps {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({
  menuIsOpen,
  setMenuIsOpen,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 z-30 flex w-full items-center px-5 py-3 drop-shadow-[0_1px_0px_rgba(0,0,0,0.12)] transition lg:py-5 ${
        menuIsOpen ? "bg-white" : "bg-white bg-opacity-95 backdrop-blur-lg"
      }`}
    >
      <nav className="mx-auto flex w-full justify-between lg:grid lg:w-11/12 lg:grid-cols-3">
        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/">
            <a className="text-base font-bold leading-6 text-slate-900 transition duration-300 hover:text-blue-600">
              Projects
            </a>
          </Link>
          <Link href="/about">
            <a className="text-base font-bold leading-6 text-slate-900 transition duration-300 hover:text-blue-600">
              About
            </a>
          </Link>
          {/* <a
            className="text-base font-bold leading-6 text-slate-900 transition duration-300 hover:text-blue-600"
            target="_blank"
            href="https://github.com/gaoshanghui"
            rel="noopener noreferrer"
          >
            Resume
          </a> */}
        </div>
        <Link href="/">
          <a className="flex h-full flex-col justify-center">
            <h1 className="text-lg font-black leading-7 text-slate-900 lg:mb-1 lg:text-center lg:text-xl">
              Gao Shanghui
            </h1>
            <p className="text-xs font-normal leading-4 text-slate-600 lg:text-center">
              UX, UI and Web
            </p>
          </a>
        </Link>
        <div className="flex items-center justify-end gap-4">
          <a href="mailto:mail.gaoshanghui@gmail.com">
            <MailButton />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shanghui-gao-b503b1227"
            rel="noopener noreferrer"
          >
            <LinkedinButton />
          </a>
          <span className="lg:hidden">
            <MenuButton menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
