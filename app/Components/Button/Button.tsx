import styles from './Button.module.scss';

type Props = {
    title: string;
    mode?: 'fill' | 'outline';
    disabled?: boolean;
    onClick?: () => void;
    icon?: string;
}

const Button = (props: Props) => {

    const classes = [styles.container];
    const iconClass = [];

    if (props.mode === 'fill') classes.push(styles.fill);
    else classes.push(styles.outline);
    if (props.icon) iconClass.push(styles.iconContainer);

    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={props.icon ? iconClass.join(' ').trim() : classes.join(' ').trim()}
        >
            {props.icon && (
                <img src={props.icon} alt='Icon' className={styles.icon} />
            )}
            {props.title}
        </button>
    )
}

export default Button;