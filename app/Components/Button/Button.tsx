import React from 'react';
import styles from './Button.module.scss';
import { ButtonType } from '../../Enums/Enums';
import type { Button } from '@/app/Interfaces/Interfaces';

const Button = (props: Button) => {

    const classes = [styles.container];

    if (props.mode) classes.push(styles[props.mode]);

    const iconClass = [];
    
    if (props.type === ButtonType.IconText && props.icon) {
        iconClass.push(styles.iconContainer);
    } else if (props.type === ButtonType.IconOnly && props.icon && props.mode) {
        iconClass.push(styles[props.mode]);
    } else if (props.type === ButtonType.Text && props.mode) {
        iconClass.push(styles[props.mode]);
    };

    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={props.icon ? iconClass.join(' ').trim() : classes.join(' ').trim()}
        >
            {props.type === ButtonType.IconOnly && props.icon && (
                <img src={props.icon} alt='Icon' />
            )}
            {props.type === ButtonType.IconText && props.icon && (
                <>
                    <img src={props.icon} alt='Icon' className={styles.icon} />
                    {props.title}
                </>
            )}
            {props.type === ButtonType.Text && props.title}
        </button>
    );
}

export default Button;
