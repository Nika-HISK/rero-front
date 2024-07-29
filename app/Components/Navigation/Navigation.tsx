import Link from 'next/link';
import React from 'react';
import styles from './Navigation.module.scss';
import { NavigationPropsInterface } from './interfaces/navigation-props.interface';

const Navigation = (props: NavigationPropsInterface) => {
  return (
    <Link
      href={props.link ? props.link : ''}
      className={`${styles.container} ${props.isActive && styles.active}`}
    >
      <div onClick={props.onClick}>
        <span>{props.title}</span>
      </div>
    </Link>
  );
};

export default Navigation;
