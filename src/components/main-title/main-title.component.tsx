import React from 'react';
import { DownloadBtn } from '..';
import style from './main-title.module.scss';

import { MindfulnessSvgImage } from '../../svg/mindfulness.svg.component';
import { motion } from 'framer-motion';

interface Props {}

export function MainTitleComponent(props: Props) {
  return (
    <div className={style.main_title_container}>
      <div className={style.app_download_container}>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ opacity: 0, x: -100 }}
          className={style.app_name}
        >
          Reflection
        </motion.div>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          style={{ opacity: 0, x: -100 }}
          className={style.learn_yoga}
        >
          Immerse yourself in your mind.
        </motion.div>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{ opacity: 0, x: -100 }}
        >
          <DownloadBtn></DownloadBtn>
        </motion.div>
      </div>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ opacity: 0 }}
        className={style.home_svg_images}
      >
        <MindfulnessSvgImage />
      </motion.div>
    </div>
  );
}
