import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogoSvg } from '../../../svg/logo.component';

import style from './logo.module.scss';

interface Props {}

export function LogoComponent(props: Props) {
  return (
    <NavLink to="/" className={style.logo_container_link}>
      <div className={style.logo_container}>
        <LogoSvg className={style.logo} />
        <span className={style.site_name}>Reflection</span>
      </div>
    </NavLink>
  );
}
