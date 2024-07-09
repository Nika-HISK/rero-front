import styles from './Button.module.scss';

export enum Mode {
    Fill = 'fill',
    Outline = 'outline',
    Inline = 'inline',
    Delete = 'delete',
    Transparent = 'transparent',
    More = 'more',
}

export enum ButtonType {
    Text = 'text',
    IconText ='icon-text',
    IconOnly ='icon-Only',
}

type Props = {
    title: string;
    mode?: Mode;
    disabled?: boolean;
    onClick?: () => void;
    icon?: string;
    type?: ButtonType;
}

const Button = (props: Props) => {

    const classes = [styles.container];
    const iconClass = [];

    if (props.mode === Mode.Fill) classes.push(styles.fill);
    if (props.mode === Mode.Outline) classes.push(styles.outline);
    if (props.mode === Mode.More) classes.push(styles.more);

    if (props.type === ButtonType.IconText && props.icon) iconClass.push(styles.iconContainer);
    if (props.type === ButtonType.IconOnly&& props.icon) {
        if (props.mode === Mode.Inline) iconClass.push(styles.inline);
        if (props.mode === Mode.Delete) iconClass.push(styles.delete);
        if (props.mode === Mode.Transparent) iconClass.push(styles.transparent);
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