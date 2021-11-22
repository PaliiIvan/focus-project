import React, { useState } from 'react';
import { MenuSvgIcon } from '../../svg/menu.svg.icon.component';
import { Logo } from './logo/logo.container';
import { MobileNavigationMenu } from './mobile-navigation/mobile-navigation.component';
import { NavItems } from './nav-items/nav-items.component';
import style from './navigation.module.scss';
import { useMediaQuery } from 'react-responsive';

interface Props {}

export function NavigationComponent(props: Props) {
  const isMobile = useMediaQuery({ query: '(max-width: 990px)' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function showMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={style.navigation_container}>
      <Logo></Logo>
      {isMobile ? (
        <>
          <MenuSvgIcon onClick={showMenu} />
          <MobileNavigationMenu setIsMenuOpen={setIsMenuOpen} closeMenu={showMenu} isMenuOpen={isMenuOpen} />
        </>
      ) : (
        <NavItems />
      )}

      {/* <NavItems></NavItems> */}
      {/* <></MobileNavigationMenu> */}
    </div>
  );
}
