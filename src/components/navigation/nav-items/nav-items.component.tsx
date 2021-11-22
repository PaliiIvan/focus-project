import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './nav-items.module.scss';

interface Props {}

const ClassOnRoute = (route: string, className: string) => {
  const currentLocation = useLocation();
  if (currentLocation.pathname === route) {
    return className;
  } else {
    return '';
  }
};

export function NavItems(props: Props) {
  return (
    <div className={style.nav_items_container}>
      <NavLink style={{ textDecoration: 'none' }} activeClassName={style.active} to="/">
        <button className={`nav-item ${ClassOnRoute('/', style.active)}`}>Home</button>
      </NavLink>
      <NavLink style={{ textDecoration: 'none' }} to="/about" activeClassName={style.active}>
        <button className={`nav-item ${ClassOnRoute('/about', style.active)}`}>About As</button>
      </NavLink>
      <NavLink style={{ textDecoration: 'none' }} to="/contact" activeClassName={style.active}>
        <button className={`nav-item ${ClassOnRoute('/contact', style.active)}`}>Contact</button>
      </NavLink>
      <NavLink style={{ textDecoration: 'none' }} to="/login" className={style.login_btn}>
        <button className={`nav-item ${ClassOnRoute('/login', style.active)}`}>Login</button>
      </NavLink>
    </div>
  );
}
