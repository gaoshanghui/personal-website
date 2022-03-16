import Link from "next/link";

interface MenuProps {
  menuIsOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ menuIsOpen }) => {
  return (
    <div
      className={`fixed top-[69px] z-20 w-full bg-white pt-16 pb-20 pl-28 lg:hidden ${
        menuIsOpen ? "block " : "hidden"
      }`}
    >
      <ul className="space-y-10">
        <li>
          <Link href="/">
            <a className="text-xl font-bold leading-7 text-slate-900">
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-xl font-bold leading-7 text-slate-900">About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-xl font-bold leading-7 text-slate-900">Resume</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
