import React from 'react';
import style from './mobile-preview.module.scss';

interface Props {
  prevOpt: {
    color1: string;
    color2: string;
    reverse?: boolean;
  };
}

export function MobilePreviewComponent(props: Props) {
  return (
    <div className={style.mobile_preview_container}>
      <div className={style.preview} style={{ backgroundColor: props.prevOpt.color1 }}></div>
      <div
        className={`${style.preview} ${props.prevOpt.reverse ? style.preview_left : style.preview_right}`}
        style={{ backgroundColor: props.prevOpt.color2 }}
      ></div>
    </div>
  );
}
