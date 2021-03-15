import { Router } from 'next/router';
import { createContext, ReactNode, useEffect, useState } from 'react';

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

  useEffect(() => {
    Router.events.on('routeChangeComplete', closeMenu);

    return () => Router.events.off('routeChangeComplete', closeMenu);
  }, []);

  return <MenuContext.Provider value={{ isOpenMenu, closeMenu, openMenu }}>{children}</MenuContext.Provider>;
};

export { MenuContext, MenuProvider };
