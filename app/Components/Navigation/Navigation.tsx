import Link from 'next/link';
import React from 'react';
import styles from './Navigation.module.scss';
import { NavigationPropsInterface } from './interfaces/Navigation-Props.interface';

const Navigation = (props: NavigationPropsInterface) => {
  const classes = [styles.container];

  if (props.left) classes.push(styles.leftContainer);
  if (props.right) classes.push(styles.rightContainer);
  if (props.isActive) classes.push(styles.active);

  return (
    <Link
      href={props.link ? props.link : ''}
      className={classes.join(' ').trim()}
    >
      <div onClick={props.onClick}>
        <span>{props.title}</span>
      </div>
    </Link>
  );
};

export default Navigation;
