import Link from 'next/link';
import React from 'react';
import styles from './Navigation.module.scss';
import { NavigationPropsInterface } from './interfaces/navigation-props.interface';

const NavigationItem = (props: NavigationPropsInterface) => {
  return (
    <Link href={props.href} className={styles.container}>
      <div onClick={props.onClick}>
        <span>{props.title}</span>
      </div>
    </Link>
  );
};

export default NavigationItem;
