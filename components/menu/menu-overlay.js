const MenuOverlay = ({ menuIsOpen, setMenuIsOpen }) => {
  const handleOnClick = () => {
    setMenuIsOpen(false);
  };

  return (
    <div
      className={`top-0 left-0 z-10 w-screen h-screen bg-black bg-opacity-40 backdrop-blur-sm transition ${
        menuIsOpen ? 'fixed' : 'hidden'
      }`}
      onClick={handleOnClick}
    ></div>
  );
};

export default MenuOverlay;
