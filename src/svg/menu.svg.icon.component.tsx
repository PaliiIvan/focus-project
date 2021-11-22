import React, { MouseEventHandler } from 'react';

interface Props {
  onClick: MouseEventHandler;
}

export function MenuSvgIcon(props: Props) {
  return (
    <svg
      style={{ cursor: 'pointer' }}
      onClick={props.onClick}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2" />
      <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
    </svg>
  );
}
