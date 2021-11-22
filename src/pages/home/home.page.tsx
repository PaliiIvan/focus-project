import React from 'react';
import style from './home.module.scss';
import { MainTitle } from '../../components';
interface Props {}

export const HomePage = (props: Props) => {
  return (
    <div className={style.container}>
      <MainTitle></MainTitle>
    </div>
  );
};
