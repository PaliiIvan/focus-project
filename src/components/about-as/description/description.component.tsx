import React from 'react';
import { MobilePreview } from '../..';
import style from './description.module.scss';
import { motion } from 'framer-motion';
interface Props {
  isReversed?: boolean;
  additionalStyle?: string;
}

export function DescriptionComponent(props: Props) {
  return (
    <>
      {props.isReversed ? (
        <div className={style.description_container}>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ opacity: 0, x: -100 }}
            className={style.description_text_container}
          >
            <div className={style.description_title}>
              What is the <span className={'bold'}> Reflection </span> application?
            </div>
            <div className={style.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis viverra condimentum. Integer
              lobortis interdum aliquet. Vestibulum bibendum finibus neque in dignissim. Integer porta est justo, id
              laoreet nisi venenatis id. Donec tristique, urna feugiat commodo finibus, quam magna ullamcorper odio, ut
              condimentum ante dui eu nunc. Ut et malesuada dui. Cras id consectetur libero. Duis eu velit sed dui
              euismod sollicitudin eu et elit. Phasellus risus leo, imperdiet ut nibh at, posuere vestibulum nisl.
            </div>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            style={{ opacity: 0, x: 100 }}
            className={style.mobile_preview}
          >
            <MobilePreview prevOpt={{ color1: '#C4C4C4', color2: '#FC9595', reverse: true }} />
          </motion.div>
        </div>
      ) : (
        <div className={`${style.description_container} ${props.additionalStyle}`}>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            style={{ opacity: 0, x: -100 }}
            className={style.mobile_preview}
          >
            <MobilePreview prevOpt={{ color1: '#fdffb2', color2: '#DEBCB2' }} />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            style={{ opacity: 0, x: 100 }}
            className={style.description_text_container}
          >
            <div className={style.description_title}>
              Why <span className={'bold'}>Reflection</span>?
            </div>
            <div className={style.description}>
              Quisque odio neque, finibus a tincidunt sed, blandit nec mi. Nunc volutpat est ut aliquet tristique. Donec
              ante nunc, vehicula et dui quis, dapibus hendrerit tellus. Quisque dolor felis, consequat a euismod ut,
              vehicula a diam. Vestibulum placerat suscipit massa, vitae pharetra eros eleifend ut. Quisque in consequat
              nisl. Etiam eu tortor eu nulla fringilla feugiat eget ac sapien. Donec consectetur erat sit amet cursus
              tincidunt. Proin pulvinar mollis dolor, quis lobortis magna mollis id. Nulla facilisi. n fringilla
              tincidunt nibh, a cursus massa volutpat non. Maecenas vel nibh vestibulum, accumsan augue eget, aliquet
              risus. Vivamus non viverra lorem. Maecenas vestibulum lectus ac tempus suscipit. Integer volutpat magna
              vitae enim ultricies tempor. Proin id elementum mauris. Aenean turpis lorem, mattis et lacus nec, viverra
              vehicula nisl.
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
