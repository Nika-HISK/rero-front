import styles from './Typhography.module.scss'
import { Props } from "./interfaces/typography-props.interface"

const Typhography = (props: Props) => {
    return (
        <>
            <div className={styles[props.type]} style={{ color: props.color }}>
                {props.children}
            </div>
        </>
    )
}

export default Typhography