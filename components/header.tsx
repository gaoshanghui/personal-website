import { useState } from "react";
import Menu from "./menu/menu";
import MenuOverlay from "./menu/menu-overlay";
import Navigation from "./navigation";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div>
      <Navigation menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Menu menuIsOpen={menuIsOpen} />
      <MenuOverlay menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </div>
  );
};

export default Header;
