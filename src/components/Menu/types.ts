export type MenuProps = {
  isOpen: boolean;
  onCloseMenu: () => void;
};

export type MenuStyleProps = Pick<MenuProps, 'isOpen'>;
