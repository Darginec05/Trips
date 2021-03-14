import { createContext, ReactNode, useState } from 'react';

export type MenuContextState = {
  isOpenMenu: boolean;
  closeMenu: () => void;
  openMenu: () => void;
};

const MenuContext = createContext<MenuContextState>({
  isOpenMenu: false,
  closeMenu: () => {},
  openMenu: () => {},
});

const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenMenu, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  return <MenuContext.Provider value={{ isOpenMenu, closeMenu, openMenu }}>{children}</MenuContext.Provider>;
};

export { MenuContext, MenuProvider };
