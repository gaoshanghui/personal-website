interface MenuOverlayProps {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({
  menuIsOpen,
  setMenuIsOpen,
}) => {
  const handleOnClick = () => {
    setMenuIsOpen(false);
  };

  return (
    <div
      className={`top-0 left-0 z-20 h-screen w-screen bg-black bg-opacity-40 backdrop-blur-sm transition lg:hidden ${
        menuIsOpen ? "fixed" : "hidden"
      }`}
      onClick={handleOnClick}
    ></div>
  );
};

export default MenuOverlay;
