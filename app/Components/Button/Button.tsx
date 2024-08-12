import Image from 'next/image';
import React from 'react';
import styles from './Button.module.scss';
import { ButtonPropsInterface } from './interfaces/button-props.interface';
import { ButtonType } from '@/app/Enums/ButtonType.enum';

const Button = (props: ButtonPropsInterface) => {
  const classes = [styles.container];

  if (props.mode) classes.push(styles[props.mode]);

  const iconClass = [];

  if (props.type === ButtonType.IconText && props.icon) {
    iconClass.push(styles.iconContainer);
  } else if (props.type === ButtonType.IconOnly && props.icon && props.mode) {
    iconClass.push(styles[props.mode]);
  } else if (props.type === ButtonType.Text && props.mode) {
    iconClass.push(styles[props.mode]);
  }

  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={
        props.icon ? iconClass.join(' ').trim() : classes.join(' ').trim()
      }
    >
      {props.type === ButtonType.IconOnly && props.icon && (
        <Image src={props.icon} alt="Icon" width={24} height={24} />
      )}
      {props.type === ButtonType.IconText && props.icon && (
        <>
          <Image
            src={props.icon}
            alt="Icon"
            className={styles.icon}
            width={24}
            height={24}
          />
          {props.title}
        </>
      )}
      {props.type === ButtonType.Text && props.title}
    </button>
  );
};

export default Button;
