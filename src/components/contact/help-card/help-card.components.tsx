import React from 'react';
import './help-card.scss';

interface Props {
  icon?: React.ReactNode;
  title: string;
  description: string;
  additionalStyle: string;
  iconColor?: string;
}

export function HelpCard(props: Props) {
  return (
    <div className={`help-card ${props.additionalStyle}`}>
      <div className={'card-icon'}>{props.icon}</div>
      <div className={'card-content'}>
        <div className={'card-title'}>{props.title}</div>
        <div className={'card-description'}>{props.description}</div>
      </div>
    </div>
  );
}
