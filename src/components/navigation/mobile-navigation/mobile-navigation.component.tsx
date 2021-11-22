import React, { MouseEventHandler } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CancelSvgIcon } from '../../../svg/cancel.svg.icon.component';
import './mobile-navigation.scss';
import { motion } from 'framer-motion';

interface Props {
  isMenuOpen: boolean;
  closeMenu: MouseEventHandler;
  setIsMenuOpen: Function;
}

export function MobileNavigationMenu(props: Props) {
  const ClassOnRoute = (route: string, className: string) => {
    const currentLocation = useLocation();
    if (currentLocation.pathname === route) {
      return className;
    } else {
      return '';
    }
  };

  const variants = {
    opened: { right: '0px' },
    closed: { right: '-300px' },
  };

  return (
    <motion.div
      transition={{ duration: 0.3 }}
      variants={variants}
      initial={`${props.isMenuOpen ? 'opened' : 'closed'}`}
      animate={`${props.isMenuOpen ? 'opened' : 'closed'}`}
      className={`mobile_navigation_container`}
    >
      <li className={'cancel_icon'}>
        <CancelSvgIcon closeMenu={props.closeMenu}></CancelSvgIcon>
      </li>
      <li>
        <NavLink
          onClick={() => props.setIsMenuOpen(false)}
          style={{ textDecoration: 'none' }}
          activeClassName={'active'}
          to="/"
        >
          <button className={`nav-item ${ClassOnRoute('/', 'active')}`}>Home</button>
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => props.setIsMenuOpen(false)}
          style={{ textDecoration: 'none' }}
          to="/about"
          activeClassName={'active'}
        >
          <button className={`nav-item ${ClassOnRoute('/about', 'active')}`}>About As</button>
        </NavLink>
      </li>
      <li>
        {' '}
        <NavLink
          onClick={() => props.setIsMenuOpen(false)}
          style={{ textDecoration: 'none' }}
          to="/contact"
          activeClassName={'active'}
        >
          <button className={`nav-item ${ClassOnRoute('/contact', 'active')}`}>Contact</button>
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => props.setIsMenuOpen(false)}
          style={{ textDecoration: 'none' }}
          to="/login"
          className={'login_btn'}
        >
          <button className={`nav-item ${ClassOnRoute('/login', 'active')}`}>Login</button>
        </NavLink>
      </li>
    </motion.div>
  );
}
