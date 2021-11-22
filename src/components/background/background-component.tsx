import React from 'react';
import { motion } from 'framer-motion';

import style from './background.module.scss';

interface Props {}

export function BackgroundComponent(props: Props) {
  return (
    <div className={style.background_container}>
      <svg viewBox="0 0 500 500" width="100%" height="1500" preserveAspectRatio="none">
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            x1="294.159"
            y1="92.926"
            x2="294.159"
            y2="495.577"
            id="gradient-0"
            gradientTransform="matrix(-0.046342, 0.998925, -1.49384, -0.069303, 735.782914, 45.331394)"
          >
            <stop offset="0" style={{ stopColor: 'rgb(34, 240, 178, 0.2)' }}></stop>
            <stop offset="1" style={{ stopColor: 'rgb(66, 176, 232, 0.2)' }}></stop>
          </linearGradient>

          <linearGradient
            gradientUnits="userSpaceOnUse"
            x1="294.159"
            y1="92.926"
            x2="294.159"
            y2="495.577"
            id="gradient-1"
            gradientTransform="matrix(-0.046342, 0.998925, -1.49384, -0.069303, 735.782914, 45.331394)"
          >
            <stop offset="0" style={{ stopColor: 'rgb(34, 240, 178, 0.2)' }}></stop>
            <stop offset="1" style={{ stopColor: 'rgb(66, 176, 232, 0.2)' }}></stop>
          </linearGradient>
        </defs>

        <motion.path
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          animate={{
            d: `
                    M -9.081 135.192
                    C 423.676 31.75 447.236 250 810.15 186.421  
                    L 500 1501.921 
                    L 0 1505.684 
                    L -9.081 115.192 
                    Z`,
          }}
          fill='url("#gradient-0")'
          d={`
                    M -9.081 115.192
                    C 223.676 250 247.236 31.75 510.15 136.421 
                    L 500 501.921 
                    L 0 505.684 
                    L -9.081 115.192 
                    Z`}
        />
        <motion.path
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          animate={{
            d: `
                    M -9.081 160
                    C 423.676 50 447.236 270 810.15 206.421 
                    L 500 501.921 
                    L 0 505.684 
                    L -9.081 115.192 
                    Z`,
          }}
          fill='url("#gradient-1")'
          //stroke= 'url("#gradient-0")'
          d={`
                    M -9.081 140
                    C 223.676 270 247.236 51.75 510.15 156.421 
                    L 500 501.921 
                    L 0 505.684 
                    L -9.081 115.192 
                    Z`}
        />
        <motion.path
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          animate={{
            d: `
                    M -9.081 180
                    C 423.676 50 447.236 270 810.15 206.421 
                    L 500 501.921 
                    L 0 505.684 
                    L -9.081 115.192 
                    Z`,
          }}
          fill='url("#gradient-1")'
          //stroke= 'url("#gradient-0")'
          d={`
                    M -9.081 160
                    C 223.676 270 247.236 51.75 510.15 156.421 
                    L 500 501.921 
                    L 0 505.684 
                    L -9.081 115.192 
                    Z`}
        />
      </svg>
    </div>
  );
}
