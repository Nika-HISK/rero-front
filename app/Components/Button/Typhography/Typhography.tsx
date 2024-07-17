import { ColorsEnum } from "@/app/Enums/colors.enum"
import { ReactNode } from "react"
import styles from './Typhography.module.scss'
import { TyphographyEnum } from "@/app/Enums/Typhography.enum"

type Props = {
    children: ReactNode
    type: TyphographyEnum
    color?: ColorsEnum

}
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