import React from 'react';
import { Description } from '../../components';
import style from './about.module.scss';

interface Props {}

export const AboutPage = (props: Props) => {
  return (
    <div className={style.about_as}>
      <Description isReversed={true}></Description>

      <Description additionalStyle={style.second_description}></Description>
    </div>
  );
};
