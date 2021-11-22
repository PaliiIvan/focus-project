import React from 'react';
import style from './download-btn.module.scss';
interface Props {}

export function DownloadBtn(props: Props) {
  return <button className={style.download_btn}>Download</button>;
}
