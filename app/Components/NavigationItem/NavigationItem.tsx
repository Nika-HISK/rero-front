import Link from 'next/link';
import React from 'react';
import styles from './NavigationItem.module.scss';
import { NavigationItemPropsInterface } from './interfaces/navigation-props.interface';

const NavigationItem = (props: NavigationItemPropsInterface) => {
  return (
    <Link
      href={props.href}
      className={`${styles.container} ${props.isActive && styles.active}`}
    >
      <div onClick={props.onClick}>
        <span>{props.title}</span>
      </div>
    </Link>
  );
};

export default NavigationItem;
