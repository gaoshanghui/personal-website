interface MenuButtonProps {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  menuIsOpen,
  setMenuIsOpen,
}) => {
  const handleOnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <button
      onClick={handleOnClick}
      className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-solid border-gray-300 transition hover:bg-gray-100"
      aria-label="Toggle menu"
    >
      <div>
        <span
          className={`absolute left-[calc(50%-10px)] block h-[2px] w-5 transform  rounded-full bg-blue-600 transition ${
            menuIsOpen ? "top-[calc(50%-1px)] rotate-45" : "top-3"
          }`}
        ></span>
        <span
          className={`absolute left-[calc(50%-10px)] block h-[2px] w-5 transform  rounded-full bg-blue-600 transition ${
            menuIsOpen ? "top-[calc(50%-1px)] -rotate-45" : "bottom-3"
          }`}
        ></span>
      </div>
    </button>
  );
};

export default MenuButton;
