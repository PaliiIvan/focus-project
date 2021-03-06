import React from 'react';

interface Props {
  className: string;
}

export function LogoSvg(props: Props) {
  return (
    <div className={props.className}>
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="clip-0">
            <circle style={{ fill: 'rgb(255, 112, 112)' }} cx="250" cy="250" r="249.229"></circle>
            <path style={{ fill: 'rgb(202, 80, 80)', stroke: 'rgb(201, 125, 125)' }} d="M 283.389 297.419"></path>
          </clipPath>
        </defs>
        <circle style={{ fill: 'rgb(255, 112, 112)' }} cx="250" cy="250" r="249.229"></circle>
        <path
          style={{ stroke: 'rgb(0, 0, 0)', fill: 'rgb(253, 255, 156)', strokeWidth: '0', clipPath: 'url(#clip-0)' }}
          d="M -4.49 234.569 C -4.49 234.569 154.187 341.781 251.403 227.834 C 348.619 113.887 523.673 164.376 516.835 172.278 L 497.755 508.979 C 497.755 508.979 -5.051 507.295 -5.051 506.734 C -5.051 506.173 -44.333 244.669 -4.49 234.569 Z"
        ></path>
      </svg>
    </div>
  );
}
