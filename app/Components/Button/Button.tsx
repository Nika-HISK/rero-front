import styles from './Button.module.scss';

type Props = {
    title: string;
    mode?: 'fill' | 'outline' | 'inline' | 'delete' | 'transparent' | 'more';
    disabled?: boolean;
    onClick?: () => void;
    icon?: string;
    type?: 'text' | 'icon-only' | 'icon-text';
}

const Button = (props: Props) => {

    const classes = [styles.container];
    const iconClass = [];

    if (props.mode === 'fill') classes.push(styles.fill);
    if (props.mode === 'outline') classes.push(styles.outline);
    if (props.mode === 'more') classes.push(styles.more);

    if (props.type === 'icon-text' && props.icon) iconClass.push(styles.iconContainer);
    if (props.type === 'icon-only' && props.icon) {
        if (props.mode === 'inline') iconClass.push(styles.inline);
        if (props.mode === 'delete') iconClass.push(styles.delete);
        if (props.mode === 'transparent') iconClass.push(styles.transparent);
    }

    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={props.icon ? iconClass.join(' ').trim() : classes.join(' ').trim()}
        >
            {props.type === 'icon-only' && props.icon && (
                <img src={props.icon} alt='Icon' />
            )}
            {props.type === 'icon-text' && props.icon && (
                <>
                    <img src={props.icon} alt='Icon' className={styles.icon} />
                    {props.title}
                </>
            )}
            {props.type === 'text' && props.title}
        </button>
    );
}

export default Button;